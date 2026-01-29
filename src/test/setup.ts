import "@testing-library/jest-dom";

// Mock window.AudioContext
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
        return {
            getChannelData: () => new Float32Array(4096),
        };
    }
    createBufferSource() {
        return {
            connect: () => { },
            start: () => { },
            stop: () => { },
            buffer: null,
        };
    }
    get currentTime() {
        return 0;
    }
    get destination() {
        return {};
    }
    get sampleRate() {
        return 44100;
    }
    resume() {
        return Promise.resolve();
    }
    get state() {
        return "running";
    }
}

// @ts-expect-error - Mock AudioContext
global.AudioContext = MockAudioContext;
// @ts-expect-error - Mock webkitAudioContext
global.webkitAudioContext = MockAudioContext;

// Mock localStorage
const localStorageMock = {
    getItem: () => null,
    setItem: () => { },
    removeItem: () => { },
    clear: () => { },
};
Object.defineProperty(window, "localStorage", { value: localStorageMock });
