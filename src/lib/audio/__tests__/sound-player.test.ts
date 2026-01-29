import { describe, it, expect, beforeEach } from "bun:test";

// Mock AudioContext for testing
class MockAudioContext {
    createOscillator() {
        return {
            connect: () => { },
            start: () => { },
            stop: () => { },
            frequency: { setValueAtTime: () => { }, exponentialRampToValueAtTime: () => { } },
            type: "sine",
        };
    }
    createGain() {
        return {
            connect: () => { },
            gain: { setValueAtTime: () => { }, linearRampToValueAtTime: () => { }, exponentialRampToValueAtTime: () => { } },
        };
    }
    createBiquadFilter() {
        return {
            connect: () => { },
            frequency: { setValueAtTime: () => { } },
            Q: { setValueAtTime: () => { } },
            type: "lowpass",
        };
    }
    createBuffer() {
        return { getChannelData: () => new Float32Array(4096) };
    }
    createBufferSource() {
        return { connect: () => { }, start: () => { }, stop: () => { }, buffer: null };
    }
    get currentTime() { return 0; }
    get destination() { return {}; }
    get sampleRate() { return 44100; }
    resume() { return Promise.resolve(); }
    get state() { return "running"; }
}

// @ts-ignore
globalThis.AudioContext = MockAudioContext;
// @ts-ignore
globalThis.webkitAudioContext = MockAudioContext;

// Import after mocking
import { getSoundPlayer, INSTRUMENT_SOUNDFONT_MAP } from "../sound-player";

describe("SoundPlayer", () => {
    describe("getSoundPlayer", () => {
        it("should return the same instance (singleton)", () => {
            const instance1 = getSoundPlayer();
            const instance2 = getSoundPlayer();
            expect(instance1).toBe(instance2);
        });

        it("should have playNote method", () => {
            const player = getSoundPlayer();
            expect(typeof player.playNote).toBe("function");
        });
    });

    describe("INSTRUMENT_SOUNDFONT_MAP", () => {
        it("should map harmonium to accordion", () => {
            expect(INSTRUMENT_SOUNDFONT_MAP.harmonium).toBe("accordion");
        });

        it("should map piano to acoustic_grand_piano", () => {
            expect(INSTRUMENT_SOUNDFONT_MAP.piano).toBe("acoustic_grand_piano");
        });

        it("should map guitar to acoustic_guitar_nylon", () => {
            expect(INSTRUMENT_SOUNDFONT_MAP.guitar).toBe("acoustic_guitar_nylon");
        });

        it("should include tabla mapping", () => {
            expect(INSTRUMENT_SOUNDFONT_MAP.tabla).toBeDefined();
        });

        it("should include drums mapping", () => {
            expect(INSTRUMENT_SOUNDFONT_MAP.drums).toBeDefined();
        });

        it("should include saxophone mapping", () => {
            expect(INSTRUMENT_SOUNDFONT_MAP.saxophone).toBe("alto_sax");
        });
    });
});
