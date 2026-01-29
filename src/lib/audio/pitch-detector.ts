/**
 * Real-time Pitch Detection using Web Audio API and pitchy library
 * Detects musical notes from microphone input
 */

import { PitchDetector } from "pitchy";
import { frequencyToNote, NoteInfo } from "./note-frequencies";

export interface AudioState {
    isListening: boolean;
    hasPermission: boolean;
    error: string | null;
}

export interface PitchData {
    frequency: number;
    clarity: number;
    note: NoteInfo | null;
    timestamp: number;
}

export type PitchCallback = (data: PitchData) => void;
export type StateCallback = (state: AudioState) => void;

class PitchDetectorService {
    private audioContext: AudioContext | null = null;
    private analyserNode: AnalyserNode | null = null;
    private mediaStream: MediaStream | null = null;
    private detector: PitchDetector<Float32Array> | null = null;
    private animationFrameId: number | null = null;
    private inputBuffer: Float32Array | null = null;

    private state: AudioState = {
        isListening: false,
        hasPermission: false,
        error: null,
    };

    private pitchCallbacks: Set<PitchCallback> = new Set();
    private stateCallbacks: Set<StateCallback> = new Set();

    // Configuration
    private readonly MIN_CLARITY = 0.85; // Minimum clarity threshold
    private readonly SAMPLE_RATE = 44100;
    private readonly FFT_SIZE = 2048;

    /**
     * Subscribe to pitch detection updates
     */
    onPitch(callback: PitchCallback): () => void {
        this.pitchCallbacks.add(callback);
        return () => this.pitchCallbacks.delete(callback);
    }

    /**
     * Subscribe to state changes
     */
    onStateChange(callback: StateCallback): () => void {
        this.stateCallbacks.add(callback);
        callback(this.state); // Immediately emit current state
        return () => this.stateCallbacks.delete(callback);
    }

    /**
     * Get current audio state
     */
    getState(): AudioState {
        return { ...this.state };
    }

    /**
     * Request microphone permission and initialize audio
     */
    async initialize(): Promise<boolean> {
        try {
            // Request microphone access
            this.mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false,
                },
            });

            // Create audio context
            this.audioContext = new AudioContext({ sampleRate: this.SAMPLE_RATE });

            // Create analyser node
            this.analyserNode = this.audioContext.createAnalyser();
            this.analyserNode.fftSize = this.FFT_SIZE;

            // Connect microphone to analyser
            const source = this.audioContext.createMediaStreamSource(this.mediaStream);
            source.connect(this.analyserNode);

            // Initialize pitch detector
            this.detector = PitchDetector.forFloat32Array(this.analyserNode.fftSize);
            this.inputBuffer = new Float32Array(this.detector.inputLength);

            this.updateState({
                hasPermission: true,
                error: null,
            });

            return true;
        } catch (error) {
            const errorMessage =
                error instanceof Error ? error.message : "Failed to access microphone";
            this.updateState({
                hasPermission: false,
                error: errorMessage,
            });
            return false;
        }
    }

    /**
     * Start listening for pitch
     */
    startListening(): void {
        if (!this.audioContext || !this.analyserNode || !this.detector) {
            console.error("Audio not initialized. Call initialize() first.");
            return;
        }

        // Resume audio context if suspended
        if (this.audioContext.state === "suspended") {
            this.audioContext.resume();
        }

        this.updateState({ isListening: true });
        this.detectPitch();
    }

    /**
     * Stop listening for pitch
     */
    stopListening(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        this.updateState({ isListening: false });
    }

    /**
     * Clean up all resources
     */
    destroy(): void {
        this.stopListening();

        if (this.mediaStream) {
            this.mediaStream.getTracks().forEach((track) => track.stop());
            this.mediaStream = null;
        }

        if (this.audioContext) {
            this.audioContext.close();
            this.audioContext = null;
        }

        this.analyserNode = null;
        this.detector = null;
        this.inputBuffer = null;

        this.updateState({
            isListening: false,
            hasPermission: false,
            error: null,
        });
    }

    /**
     * Main pitch detection loop
     */
    private detectPitch = (): void => {
        if (
            !this.state.isListening ||
            !this.analyserNode ||
            !this.detector ||
            !this.inputBuffer ||
            !this.audioContext
        ) {
            return;
        }

        // Get time domain data
        this.analyserNode.getFloatTimeDomainData(this.inputBuffer);

        // Detect pitch
        const [frequency, clarity] = this.detector.findPitch(
            this.inputBuffer,
            this.audioContext.sampleRate
        );

        const pitchData: PitchData = {
            frequency: frequency,
            clarity: clarity,
            note: null,
            timestamp: Date.now(),
        };

        // Only report if clarity is above threshold
        if (clarity >= this.MIN_CLARITY && frequency > 0) {
            pitchData.note = frequencyToNote(frequency);
        }

        // Emit to all listeners
        this.pitchCallbacks.forEach((callback) => callback(pitchData));

        // Continue loop
        this.animationFrameId = requestAnimationFrame(this.detectPitch);
    };

    /**
     * Update internal state and notify listeners
     */
    private updateState(partial: Partial<AudioState>): void {
        this.state = { ...this.state, ...partial };
        this.stateCallbacks.forEach((callback) => callback(this.state));
    }
}

// Singleton instance
let detectorInstance: PitchDetectorService | null = null;

/**
 * Get the pitch detector service instance
 */
export function getPitchDetector(): PitchDetectorService {
    if (!detectorInstance) {
        detectorInstance = new PitchDetectorService();
    }
    return detectorInstance;
}

/**
 * React hook-friendly initialization
 */
export async function initializePitchDetection(): Promise<boolean> {
    const detector = getPitchDetector();
    return detector.initialize();
}
