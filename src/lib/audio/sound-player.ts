/**
 * Sound Player with Web Audio API fallback
 * Uses soundfont-player for realistic sounds, falls back to oscillator synthesis
 */

export type InstrumentType =
    | "acoustic_grand_piano"
    | "accordion"
    | "acoustic_guitar_nylon"
    | "flute"
    | "violin"
    | "xylophone"
    | "trumpet"
    | "alto_sax";

// Map our instrument names to soundfont names
export const INSTRUMENT_SOUNDFONT_MAP: Record<string, InstrumentType> = {
    harmonium: "accordion",
    piano: "acoustic_grand_piano",
    guitar: "acoustic_guitar_nylon",
    ukulele: "acoustic_guitar_nylon",
    flute: "flute",
    violin: "violin",
    tabla: "xylophone",  // Closest available - percussive sound
    drums: "xylophone",  // Closest available - percussive sound
    saxophone: "alto_sax",
};

// Note frequency map for fallback oscillator
const NOTE_FREQUENCIES: Record<string, number> = {
    // Octave 2 (for bass/percussion)
    "C2": 65.41, "C#2": 69.30, "D2": 73.42, "D#2": 77.78, "E2": 82.41,
    "F2": 87.31, "F#2": 92.50, "G2": 98.00, "G#2": 103.83, "A2": 110.00,
    "A#2": 116.54, "B2": 123.47,
    // Octave 3
    "C3": 130.81, "C#3": 138.59, "D3": 146.83, "D#3": 155.56, "E3": 164.81,
    "F3": 174.61, "F#3": 185.00, "G3": 196.00, "G#3": 207.65, "A3": 220.00,
    "A#3": 233.08, "B3": 246.94,
    // Octave 4
    "C4": 261.63, "C#4": 277.18, "D4": 293.66, "D#4": 311.13, "E4": 329.63,
    "F4": 349.23, "F#4": 369.99, "G4": 392.00, "G#4": 415.30, "A4": 440.00,
    "A#4": 466.16, "B4": 493.88,
    // Octave 5
    "C5": 523.25, "C#5": 554.37, "D5": 587.33, "D#5": 622.25, "E5": 659.25,
    "F5": 698.46, "F#5": 739.99, "G5": 783.99, "G#5": 830.61, "A5": 880.00,
    "A#5": 932.33, "B5": 987.77,
    "C6": 1046.50,
};

class SoundPlayerService {
    private audioContext: AudioContext | null = null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private loadedInstruments: Map<string, any> = new Map();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private isLoading: Map<string, Promise<any>> = new Map();
    private useFallback: boolean = false;

    /**
     * Initialize the audio context
     */
    async initialize(): Promise<void> {
        if (typeof window === "undefined") return;

        if (!this.audioContext) {
            try {
                const AudioContextClass = window.AudioContext ||
                    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
                this.audioContext = new AudioContextClass();
            } catch (e) {
                console.error("[SoundPlayer] Failed to create AudioContext:", e);
                return;
            }
        }

        // Resume if suspended (browser autoplay policy)
        if (this.audioContext.state === "suspended") {
            try {
                await this.audioContext.resume();
            } catch (e) {
                console.error("[SoundPlayer] Failed to resume AudioContext:", e);
            }
        }
    }

    /**
     * Load an instrument soundfont
     */
    async loadInstrument(instrument: string): Promise<boolean> {
        if (typeof window === "undefined") return false;

        await this.initialize();

        const soundfontName = INSTRUMENT_SOUNDFONT_MAP[instrument] || "acoustic_grand_piano";

        // Already loaded?
        if (this.loadedInstruments.has(soundfontName)) {
            return true;
        }

        // Currently loading?
        if (this.isLoading.has(soundfontName)) {
            try {
                await this.isLoading.get(soundfontName);
                return true;
            } catch {
                return false;
            }
        }

        // Start loading
        console.log(`[SoundPlayer] Loading instrument: ${soundfontName}`);
        const loadPromise = this.loadSoundfont(soundfontName);
        this.isLoading.set(soundfontName, loadPromise);

        try {
            const player = await loadPromise;
            this.loadedInstruments.set(soundfontName, player);
            this.isLoading.delete(soundfontName);
            console.log(`[SoundPlayer] Loaded instrument: ${soundfontName}`);
            return true;
        } catch (error) {
            console.warn(`[SoundPlayer] Failed to load soundfont, using fallback:`, error);
            this.isLoading.delete(soundfontName);
            this.useFallback = true;
            return true; // Return true to allow fallback to work
        }
    }

    /**
     * Load soundfont from CDN
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private async loadSoundfont(instrumentName: InstrumentType): Promise<any> {
        const Soundfont = await import("soundfont-player");

        if (!this.audioContext) {
            throw new Error("Audio context not initialized");
        }

        const player = await Soundfont.instrument(
            this.audioContext,
            instrumentName,
            {
                soundfont: "MusyngKite",
                format: "mp3",
            }
        );

        return player;
    }

    /**
     * Play a note using oscillator (fallback)
     */
    private playOscillator(note: string, duration: number = 0.5, gain: number = 0.3): void {
        if (!this.audioContext) return;

        const frequency = NOTE_FREQUENCIES[note];
        if (!frequency) {
            console.warn(`[SoundPlayer] Unknown note: ${note}`);
            return;
        }

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.type = "triangle"; // Softer sound
            oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);

            // Attack-decay envelope for more pleasant sound
            gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(gain, this.audioContext.currentTime + 0.02);
            gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + duration);

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.start(this.audioContext.currentTime);
            oscillator.stop(this.audioContext.currentTime + duration);

            console.log(`[SoundPlayer] Playing oscillator: ${note} (${frequency}Hz)`);
        } catch (error) {
            console.error("[SoundPlayer] Oscillator error:", error);
        }
    }

    /**
     * Play custom percussion sound (for tabla with realistic synthesis)
     */
    private playPercussion(note: string, duration: number = 0.3, gain: number = 0.6, instrument: string = "tabla"): void {
        if (!this.audioContext) return;

        const frequency = NOTE_FREQUENCIES[note];
        if (!frequency) {
            console.warn(`[SoundPlayer] Unknown percussion note: ${note}`);
            return;
        }

        try {
            const ctx = this.audioContext;
            const now = ctx.currentTime;

            // Drum kit uses specialized synthesis per frequency range
            if (instrument === "drums") {
                this.playDrumKit(frequency, duration, gain);
                return;
            }

            // TABLA synthesis (default) - tonal with pitch bend
            // Create noise for attack transient
            const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.1, ctx.sampleRate);
            const noiseData = noiseBuffer.getChannelData(0);
            for (let i = 0; i < noiseData.length; i++) {
                noiseData[i] = Math.random() * 2 - 1;
            }
            const noiseSource = ctx.createBufferSource();
            noiseSource.buffer = noiseBuffer;

            // Filter the noise (bandpass for percussion character)
            const noiseFilter = ctx.createBiquadFilter();
            noiseFilter.type = "bandpass";
            noiseFilter.frequency.setValueAtTime(frequency * 2, now);
            noiseFilter.Q.setValueAtTime(2, now);

            // Noise envelope (very short attack)
            const noiseGain = ctx.createGain();
            noiseGain.gain.setValueAtTime(gain * 0.3, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

            // Tone oscillator for body of sound
            const osc = ctx.createOscillator();
            osc.type = frequency < 150 ? "sine" : "triangle"; // Sine for bass, triangle for treble
            osc.frequency.setValueAtTime(frequency, now);
            // Pitch bend down for percussive feel
            osc.frequency.exponentialRampToValueAtTime(frequency * 0.7, now + duration * 0.3);

            // Tone envelope (quick attack, medium decay)
            const toneGain = ctx.createGain();
            toneGain.gain.setValueAtTime(0, now);
            toneGain.gain.linearRampToValueAtTime(gain * 0.8, now + 0.01);
            toneGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

            // Connect noise path
            noiseSource.connect(noiseFilter);
            noiseFilter.connect(noiseGain);
            noiseGain.connect(ctx.destination);

            // Connect tone path
            osc.connect(toneGain);
            toneGain.connect(ctx.destination);

            // Start and stop
            noiseSource.start(now);
            noiseSource.stop(now + 0.1);
            osc.start(now);
            osc.stop(now + duration);

            console.log(`[SoundPlayer] Playing tabla: ${note} (${frequency}Hz)`);
        } catch (error) {
            console.error("[SoundPlayer] Percussion error:", error);
        }
    }

    /**
     * Play drum kit sounds - distinct synthesis for each piece
     */
    private playDrumKit(frequency: number, duration: number = 0.3, gain: number = 0.6): void {
        if (!this.audioContext) return;

        const ctx = this.audioContext;
        const now = ctx.currentTime;

        try {
            // KICK DRUM (low frequency < 150Hz) - deep sine with punch
            if (frequency < 150) {
                const osc = ctx.createOscillator();
                osc.type = "sine";
                osc.frequency.setValueAtTime(150, now);
                osc.frequency.exponentialRampToValueAtTime(40, now + 0.1);

                const oscGain = ctx.createGain();
                oscGain.gain.setValueAtTime(gain, now);
                oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

                // Add click for attack
                const clickOsc = ctx.createOscillator();
                clickOsc.type = "square";
                clickOsc.frequency.setValueAtTime(800, now);
                const clickGain = ctx.createGain();
                clickGain.gain.setValueAtTime(gain * 0.3, now);
                clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

                osc.connect(oscGain);
                oscGain.connect(ctx.destination);
                clickOsc.connect(clickGain);
                clickGain.connect(ctx.destination);

                osc.start(now);
                osc.stop(now + 0.5);
                clickOsc.start(now);
                clickOsc.stop(now + 0.03);

                console.log("[SoundPlayer] Playing kick drum");
            }
            // SNARE (mid frequency 250-350Hz) - tone + noise rattle
            else if (frequency >= 250 && frequency <= 350) {
                // Tone body
                const osc = ctx.createOscillator();
                osc.type = "triangle";
                osc.frequency.setValueAtTime(200, now);
                osc.frequency.exponentialRampToValueAtTime(150, now + 0.05);

                const oscGain = ctx.createGain();
                oscGain.gain.setValueAtTime(gain * 0.5, now);
                oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

                // Noise for snare wires
                const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.2, ctx.sampleRate);
                const noiseData = noiseBuffer.getChannelData(0);
                for (let i = 0; i < noiseData.length; i++) {
                    noiseData[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = noiseBuffer;

                const noiseFilter = ctx.createBiquadFilter();
                noiseFilter.type = "highpass";
                noiseFilter.frequency.setValueAtTime(2000, now);

                const noiseGain = ctx.createGain();
                noiseGain.gain.setValueAtTime(gain * 0.8, now);
                noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);

                osc.connect(oscGain);
                oscGain.connect(ctx.destination);
                noise.connect(noiseFilter);
                noiseFilter.connect(noiseGain);
                noiseGain.connect(ctx.destination);

                osc.start(now);
                osc.stop(now + 0.2);
                noise.start(now);
                noise.stop(now + 0.25);

                console.log("[SoundPlayer] Playing snare drum");
            }
            // HI-HAT / CYMBALS (high frequency > 450Hz) - mostly noise
            else if (frequency > 450) {
                const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.3, ctx.sampleRate);
                const noiseData = noiseBuffer.getChannelData(0);
                for (let i = 0; i < noiseData.length; i++) {
                    noiseData[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = noiseBuffer;

                // Very high pass filter for metallic sound
                const filter = ctx.createBiquadFilter();
                filter.type = "highpass";
                filter.frequency.setValueAtTime(frequency > 600 ? 8000 : 5000, now);
                filter.Q.setValueAtTime(1, now);

                // Bandpass for tone
                const bandpass = ctx.createBiquadFilter();
                bandpass.type = "bandpass";
                bandpass.frequency.setValueAtTime(frequency * 8, now);
                bandpass.Q.setValueAtTime(2, now);

                const noiseGain = ctx.createGain();
                const decayTime = frequency > 550 ? 0.4 : 0.15; // Longer for crash/ride
                noiseGain.gain.setValueAtTime(gain * 0.5, now);
                noiseGain.gain.exponentialRampToValueAtTime(0.001, now + decayTime);

                noise.connect(filter);
                filter.connect(bandpass);
                bandpass.connect(noiseGain);
                noiseGain.connect(ctx.destination);

                noise.start(now);
                noise.stop(now + decayTime + 0.1);

                console.log("[SoundPlayer] Playing cymbal");
            }
            // TOMS (mid-low frequency 150-450Hz) - pitched drums
            else {
                const osc = ctx.createOscillator();
                osc.type = "sine";
                osc.frequency.setValueAtTime(frequency, now);
                osc.frequency.exponentialRampToValueAtTime(frequency * 0.6, now + 0.15);

                const oscGain = ctx.createGain();
                oscGain.gain.setValueAtTime(gain * 0.7, now);
                oscGain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

                // Add some noise attack
                const noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.05, ctx.sampleRate);
                const noiseData = noiseBuffer.getChannelData(0);
                for (let i = 0; i < noiseData.length; i++) {
                    noiseData[i] = Math.random() * 2 - 1;
                }
                const noise = ctx.createBufferSource();
                noise.buffer = noiseBuffer;

                const noiseFilter = ctx.createBiquadFilter();
                noiseFilter.type = "bandpass";
                noiseFilter.frequency.setValueAtTime(frequency * 3, now);

                const noiseGain = ctx.createGain();
                noiseGain.gain.setValueAtTime(gain * 0.2, now);
                noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

                osc.connect(oscGain);
                oscGain.connect(ctx.destination);
                noise.connect(noiseFilter);
                noiseFilter.connect(noiseGain);
                noiseGain.connect(ctx.destination);

                osc.start(now);
                osc.stop(now + 0.4);
                noise.start(now);
                noise.stop(now + 0.05);

                console.log("[SoundPlayer] Playing tom");
            }
        } catch (error) {
            console.error("[SoundPlayer] Drum kit error:", error);
        }
    }

    /**
     * Play a single note
     */
    async playNote(
        instrument: string,
        note: string | number,
        duration: number = 0.5,
        gain: number = 0.8
    ): Promise<void> {
        if (typeof window === "undefined") return;

        await this.initialize();

        // Ensure audio context is running
        if (this.audioContext?.state === "suspended") {
            await this.audioContext.resume();
        }

        const noteStr = String(note);


        // Use custom percussion synthesis for tabla and drums
        if (instrument === "tabla" || instrument === "drums") {
            this.playPercussion(noteStr, duration, gain, instrument);
            return;
        }

        // Try soundfont first
        if (!this.useFallback) {
            try {
                await this.loadInstrument(instrument);

                const soundfontName = INSTRUMENT_SOUNDFONT_MAP[instrument] || "acoustic_grand_piano";
                const player = this.loadedInstruments.get(soundfontName);

                if (player && this.audioContext) {
                    player.play(noteStr, this.audioContext.currentTime, {
                        duration,
                        gain,
                    });
                    console.log(`[SoundPlayer] Playing soundfont: ${noteStr}`);
                    return;
                }
            } catch (error) {
                console.warn("[SoundPlayer] Soundfont play failed, using fallback:", error);
                this.useFallback = true;
            }
        }

        // Fallback to oscillator
        this.playOscillator(noteStr, duration, gain * 0.5);
    }

    /**
     * Play a sequence of notes
     */
    async playSequence(
        instrument: string,
        notes: string[],
        interval: number = 500,
        noteDuration: number = 0.4
    ): Promise<void> {
        for (let i = 0; i < notes.length; i++) {
            await this.playNote(instrument, notes[i], noteDuration);
            if (i < notes.length - 1) {
                await new Promise((resolve) => setTimeout(resolve, interval));
            }
        }
    }

    /**
     * Get the audio context
     */
    getAudioContext(): AudioContext | null {
        return this.audioContext;
    }

    /**
     * Clean up resources
     */
    destroy(): void {
        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }
        this.loadedInstruments.clear();
        this.isLoading.clear();
    }
}

// Singleton instance
let playerInstance: SoundPlayerService | null = null;

/**
 * Get the sound player service instance
 */
export function getSoundPlayer(): SoundPlayerService {
    if (!playerInstance) {
        playerInstance = new SoundPlayerService();
    }
    return playerInstance;
}
