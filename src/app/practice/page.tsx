"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { Harmonium } from "@/components/instruments/harmonium";
import { Piano } from "@/components/instruments/piano";
import { Guitar } from "@/components/instruments/guitar";
import { Ukulele } from "@/components/instruments/ukulele";
import { Flute } from "@/components/instruments/flute";
import { Violin } from "@/components/instruments/violin";
import { Tabla } from "@/components/instruments/tabla";
import { Drums } from "@/components/instruments/drums";
import { Saxophone } from "@/components/instruments/saxophone";
import { getPitchDetector, type PitchData, type AudioState } from "@/lib/audio/pitch-detector";
import type { NoteInfo } from "@/lib/audio/note-frequencies";

type InstrumentType = "harmonium" | "piano" | "guitar" | "ukulele" | "flute" | "violin" | "tabla" | "drums" | "saxophone";
type PracticeMode = "free" | "guided";

const INSTRUMENTS: { id: InstrumentType; name: string; emoji: string }[] = [
  { id: "harmonium", name: "Harmonium", emoji: "🪗" },
  { id: "piano", name: "Piano", emoji: "🎹" },
  { id: "guitar", name: "Guitar", emoji: "🎸" },
  { id: "ukulele", name: "Ukulele", emoji: "🪕" },
  { id: "flute", name: "Flute", emoji: "🎺" },
  { id: "violin", name: "Violin", emoji: "🎻" },
  { id: "tabla", name: "Tabla", emoji: "🥁" },
  { id: "drums", name: "Drums", emoji: "🪘" },
  { id: "saxophone", name: "Saxophone", emoji: "🎷" },
];

// Practice sequences for guided mode
const PRACTICE_SEQUENCES = [
  { name: "Sa Re Ga Ma", notes: ["C4", "D4", "E4", "F4"], labels: ["Sa", "Re", "Ga", "Ma"] },
  { name: "Pa Dha Ni Sa", notes: ["G4", "A4", "B4", "C5"], labels: ["Pa", "Dha", "Ni", "Sa'"] },
  { name: "Full Scale Up", notes: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], labels: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'"] },
  { name: "Full Scale Down", notes: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], labels: ["Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"] },
  { name: "Skip Notes", notes: ["C4", "E4", "G4", "C5"], labels: ["Sa", "Ga", "Pa", "Sa'"] },
];

export default function PracticePage() {
  const [instrument, setInstrument] = useState<InstrumentType>("harmonium");
  const [practiceMode, setPracticeMode] = useState<PracticeMode>("free");
  const [isListening, setIsListening] = useState(false);
  const [audioState, setAudioState] = useState<AudioState>({
    isListening: false,
    hasPermission: false,
    error: null,
  });
  const [currentNote, setCurrentNote] = useState<NoteInfo | null>(null);
  const [noteHistory, setNoteHistory] = useState<string[]>([]);

  // Guided mode state
  const [selectedSequence, setSelectedSequence] = useState(0);
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [lastResult, setLastResult] = useState<"correct" | "wrong" | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const sequence = PRACTICE_SEQUENCES[selectedSequence];
  const targetNote = sequence.notes[sequenceIndex];
  const targetLabel = sequence.labels[sequenceIndex];
  const accuracy = totalAttempts > 0 ? Math.round((correctCount / totalAttempts) * 100) : 0;

  // Handle pitch detection for guided mode
  const handlePitchDetected = useCallback((data: PitchData) => {
    if (data.note && data.clarity > 0.85) {
      const detectedNote = `${data.note.note}${data.note.octave}`;
      setCurrentNote(data.note);

      // In guided mode, check if the detected note matches target
      if (practiceMode === "guided" && !isComplete) {
        setTotalAttempts(prev => prev + 1);

        if (detectedNote === targetNote) {
          // Correct!
          setCorrectCount(prev => prev + 1);
          setLastResult("correct");
          setNoteHistory(prev => [...prev, "✓"]);

          // Move to next note
          setTimeout(() => {
            if (sequenceIndex + 1 >= sequence.notes.length) {
              setIsComplete(true);
            } else {
              setSequenceIndex(prev => prev + 1);
            }
            setLastResult(null);
          }, 800);
        } else {
          // Wrong
          setLastResult("wrong");
          setNoteHistory(prev => [...prev, "✗"]);
          setTimeout(() => setLastResult(null), 500);
        }
      }
    } else {
      setCurrentNote(null);
    }
  }, [practiceMode, targetNote, sequenceIndex, sequence.notes.length, isComplete]);

  // Toggle listening
  const toggleListening = async () => {
    const detector = getPitchDetector();

    if (isListening) {
      detector.stopListening();
      setIsListening(false);
    } else {
      const success = await detector.initialize();
      if (success) {
        detector.onPitch(handlePitchDetected);
        detector.onStateChange(setAudioState);
        detector.startListening();
        setIsListening(true);
        // Reset guided mode state
        if (practiceMode === "guided") {
          resetGuidedMode();
        }
      } else {
        setAudioState(detector.getState());
      }
    }
  };

  const resetGuidedMode = () => {
    setSequenceIndex(0);
    setCorrectCount(0);
    setTotalAttempts(0);
    setNoteHistory([]);
    setIsComplete(false);
    setLastResult(null);
  };

  useEffect(() => {
    return () => {
      const detector = getPitchDetector();
      detector.stopListening();
    };
  }, []);

  // Update pitch callback when mode changes
  useEffect(() => {
    if (isListening) {
      const detector = getPitchDetector();
      detector.onPitch(handlePitchDetected);
    }
  }, [isListening, handlePitchDetected]);

  const handleNotePlay = (fullNote: string) => {
    console.log(`Played: ${fullNote}`);
  };

  // Note to position converters (for visual instrument)
  const NOTES_ARR = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  const noteToMidi = (note: string): number => {
    const match = note.match(/([A-G]#?)(\d)/);
    if (!match) return 0;
    const [, noteName, octave] = match;
    return NOTES_ARR.indexOf(noteName) + (parseInt(octave) + 1) * 12;
  };

  const GUITAR_TUNING = ["E4", "B3", "G3", "D3", "A2", "E2"];
  const getGuitarPositions = (notes: string[]): { string: number; fret: number }[] => {
    const positions: { string: number; fret: number }[] = [];
    for (const note of notes) {
      const targetMidi = noteToMidi(note);
      for (let stringIdx = 0; stringIdx < GUITAR_TUNING.length; stringIdx++) {
        const openMidi = noteToMidi(GUITAR_TUNING[stringIdx]);
        const fret = targetMidi - openMidi;
        if (fret >= 0 && fret <= 12) {
          positions.push({ string: stringIdx, fret: fret === 0 ? 1 : fret });
          break;
        }
      }
    }
    return positions;
  };

  const UKULELE_TUNING = ["G4", "C4", "E4", "A4"];
  const getUkulelePositions = (notes: string[]): { string: number; fret: number }[] => {
    const positions: { string: number; fret: number }[] = [];
    for (const note of notes) {
      const targetMidi = noteToMidi(note);
      for (let stringIdx = 0; stringIdx < UKULELE_TUNING.length; stringIdx++) {
        const openMidi = noteToMidi(UKULELE_TUNING[stringIdx]);
        const fret = targetMidi - openMidi;
        if (fret >= 0 && fret <= 12) {
          positions.push({ string: stringIdx, fret: fret === 0 ? 1 : fret });
          break;
        }
      }
    }
    return positions;
  };

  // Convert note to violin position
  const VIOLIN_TUNING = ["E5", "A4", "D4", "G3"];
  const getViolinPositions = (notes: string[]): { string: number; position: number }[] => {
    const positions: { string: number; position: number }[] = [];
    for (const note of notes) {
      const targetMidi = noteToMidi(note);
      for (let stringIdx = 0; stringIdx < VIOLIN_TUNING.length; stringIdx++) {
        const openMidi = noteToMidi(VIOLIN_TUNING[stringIdx]);
        const pos = targetMidi - openMidi;
        if (pos >= 0 && pos <= 8) {
          positions.push({ string: stringIdx, position: pos });
          break;
        }
      }
    }
    return positions;
  };

  // Get highlighted notes for visual instrument  
  const getHighlightedNotes = (): string[] => {
    if (practiceMode === "guided" && !isComplete) {
      return [targetNote];
    }
    return [];
  };

  // Render the selected instrument with highlighting
  const renderInstrument = () => {
    const highlightedNotes = getHighlightedNotes();

    switch (instrument) {
      case "harmonium":
        return <Harmonium octaves={2} highlightedNotes={highlightedNotes} onNotePlay={handleNotePlay} />;
      case "piano":
        return <Piano octaves={2} highlightedNotes={highlightedNotes} onNotePlay={handleNotePlay} />;
      case "guitar":
        return <Guitar frets={12} highlightedPositions={getGuitarPositions(highlightedNotes)} onNotePlay={(s, f, n) => handleNotePlay(n)} />;
      case "ukulele":
        return <Ukulele frets={12} highlightedPositions={getUkulelePositions(highlightedNotes)} onNotePlay={(s, f, n) => handleNotePlay(n)} />;
      case "flute":
        return <Flute highlightedNote={highlightedNotes[0]} onNotePlay={(note) => handleNotePlay(note)} showFingeringChart={true} />;
      case "violin":
        return <Violin highlightedPositions={getViolinPositions(highlightedNotes)} onNotePlay={(s, p, n) => handleNotePlay(n)} />;
      case "tabla":
        return <Tabla highlightedBol={highlightedNotes[0]} onBolPlay={(bol) => handleNotePlay(bol)} />;
      case "drums":
        return <Drums highlightedDrum={highlightedNotes[0]} onDrumPlay={(drum) => handleNotePlay(drum)} />;
      case "saxophone":
        return <Saxophone highlightedNote={highlightedNotes[0]} onNotePlay={(note) => handleNotePlay(note)} />;
      default:
        return null;
    }
  };

  return (
    <main className="practice-page">
      {/* Header */}
      <header className="practice-header">
        <Link href="/" className="back-link">← Home</Link>
        <h1>Practice Mode</h1>
      </header>

      {/* Mode Toggle */}
      <div className="mode-toggle">
        <button
          className={`mode-btn ${practiceMode === "free" ? "active" : ""}`}
          onClick={() => { setPracticeMode("free"); if (isListening) toggleListening(); resetGuidedMode(); }}
        >
          🎵 Free Play
        </button>
        <button
          className={`mode-btn ${practiceMode === "guided" ? "active" : ""}`}
          onClick={() => { setPracticeMode("guided"); if (isListening) toggleListening(); resetGuidedMode(); }}
        >
          🎯 Guided Practice
        </button>
      </div>

      {/* Instrument selector */}
      <div className="instrument-selector">
        {INSTRUMENTS.map((inst) => (
          <button
            key={inst.id}
            className={`selector-btn ${instrument === inst.id ? "active" : ""}`}
            onClick={() => setInstrument(inst.id)}
          >
            {inst.emoji}
          </button>
        ))}
      </div>

      {/* Guided Mode UI */}
      {practiceMode === "guided" && (
        <div className="guided-section">
          {/* Sequence selector */}
          <div className="sequence-selector">
            {PRACTICE_SEQUENCES.map((seq, idx) => (
              <button
                key={idx}
                className={`seq-btn ${selectedSequence === idx ? "active" : ""}`}
                onClick={() => { setSelectedSequence(idx); resetGuidedMode(); }}
                disabled={isListening}
              >
                {seq.name}
              </button>
            ))}
          </div>

          {/* Target display */}
          {!isComplete ? (
            <div className={`target-display ${lastResult || ""}`}>
              <div className="target-label">Play this note:</div>
              <div className="target-note">{targetLabel}</div>
              <div className="progress-dots">
                {sequence.labels.map((label, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx < sequenceIndex ? "done" : idx === sequenceIndex ? "current" : ""}`}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <div className="complete-display">
              <div className="complete-icon">🏆</div>
              <div className="complete-text">Sequence Complete!</div>
              <div className="accuracy-circle">
                <span className="accuracy-value">{accuracy}%</span>
                <span className="accuracy-label">Accuracy</span>
              </div>
              <button className="btn btn-primary" onClick={resetGuidedMode}>
                Try Again
              </button>
            </div>
          )}

          {/* Detected note display */}
          {isListening && currentNote && (
            <div className={`detected-note ${lastResult || ""}`}>
              Heard: <strong>{currentNote.indianNote || currentNote.note}{currentNote.octave}</strong>
            </div>
          )}
        </div>
      )}

      {/* Microphone button */}
      <div className="mic-controls">
        <button
          className={`mic-btn ${isListening ? "listening" : ""}`}
          onClick={toggleListening}
        >
          {isListening ? "🔴 Stop" : "🎤 Start Listening"}
        </button>
        {audioState.error && <p className="error-message">{audioState.error}</p>}
        {!isListening && !audioState.error && (
          <p className="hint">
            {practiceMode === "guided"
              ? "Start listening and play the highlighted note on your instrument"
              : "Detect notes from your real instrument"
            }
          </p>
        )}
      </div>

      {/* Instrument */}
      <section className="instrument-section">
        {renderInstrument()}
      </section>

      <style jsx>{`
        .practice-page {
          min-height: 100vh;
          padding: var(--space-4);
        }

        .practice-header {
          text-align: center;
          margin-bottom: var(--space-4);
        }

        .practice-header h1 {
          font-size: var(--text-2xl);
          margin: var(--space-2) 0;
        }

        .back-link {
          color: var(--text-muted);
          font-size: var(--text-sm);
        }

        .mode-toggle {
          display: flex;
          justify-content: center;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
        }

        .mode-btn {
          padding: var(--space-2) var(--space-4);
          background: var(--bg-tertiary);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-lg);
          color: var(--text-secondary);
          font-size: var(--text-sm);
          cursor: pointer;
          transition: all 0.2s;
        }

        .mode-btn.active {
          background: var(--gradient-primary);
          border-color: transparent;
          color: white;
        }

        .instrument-selector {
          display: flex;
          justify-content: center;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
        }

        .selector-btn {
          width: 48px;
          height: 48px;
          font-size: 1.5rem;
          background: var(--bg-tertiary);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-lg);
          cursor: pointer;
          transition: all 0.2s;
        }

        .selector-btn.active {
          border-color: var(--color-primary);
          box-shadow: 0 0 12px rgba(var(--color-primary-rgb), 0.3);
        }

        .guided-section {
          text-align: center;
          margin-bottom: var(--space-4);
        }

        .sequence-selector {
          display: flex;
          justify-content: center;
          gap: var(--space-2);
          margin-bottom: var(--space-4);
          flex-wrap: wrap;
        }

        .seq-btn {
          padding: var(--space-1) var(--space-3);
          background: var(--bg-secondary);
          border: 1px solid var(--glass-border);
          border-radius: var(--radius-md);
          color: var(--text-muted);
          font-size: var(--text-xs);
          cursor: pointer;
          transition: all 0.2s;
        }

        .seq-btn.active {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .seq-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .target-display {
          padding: var(--space-4);
          background: var(--bg-tertiary);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-xl);
          display: inline-block;
          transition: all 0.3s;
        }

        .target-display.correct {
          border-color: var(--color-success);
          box-shadow: 0 0 20px rgba(16, 185, 129, 0.4);
        }

        .target-display.wrong {
          border-color: var(--color-error);
          animation: shake 0.3s;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }

        .target-label {
          font-size: var(--text-sm);
          color: var(--text-muted);
          margin-bottom: var(--space-1);
        }

        .target-note {
          font-size: var(--text-4xl);
          font-weight: 700;
          color: var(--color-primary);
        }

        .progress-dots {
          display: flex;
          justify-content: center;
          gap: var(--space-2);
          margin-top: var(--space-3);
          flex-wrap: wrap;
        }

        .dot {
          padding: var(--space-1) var(--space-2);
          background: var(--bg-secondary);
          border-radius: var(--radius-sm);
          font-size: var(--text-xs);
          color: var(--text-muted);
        }

        .dot.done {
          background: var(--color-success);
          color: white;
        }

        .dot.current {
          background: var(--color-primary);
          color: white;
          animation: pulse 1s infinite;
        }

        .complete-display {
          padding: var(--space-6);
        }

        .complete-icon {
          font-size: 3rem;
          margin-bottom: var(--space-2);
        }

        .complete-text {
          font-size: var(--text-xl);
          font-weight: 600;
          margin-bottom: var(--space-4);
        }

        .accuracy-circle {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--gradient-primary);
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
        }

        .accuracy-value {
          font-size: var(--text-xl);
          font-weight: 700;
          color: white;
        }

        .accuracy-label {
          font-size: var(--text-xs);
          color: rgba(255,255,255,0.8);
        }

        .detected-note {
          margin-top: var(--space-3);
          padding: var(--space-2) var(--space-4);
          background: var(--bg-secondary);
          border-radius: var(--radius-md);
          display: inline-block;
          font-size: var(--text-sm);
          transition: all 0.2s;
        }

        .detected-note.correct {
          background: var(--color-success);
          color: white;
        }

        .detected-note.wrong {
          background: var(--color-error);
          color: white;
        }

        .mic-controls {
          text-align: center;
          margin-bottom: var(--space-4);
        }

        .mic-btn {
          padding: var(--space-3) var(--space-6);
          background: var(--gradient-primary);
          border: none;
          border-radius: var(--radius-lg);
          color: white;
          font-size: var(--text-base);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .mic-btn.listening {
          background: var(--color-error);
          animation: pulse 1.5s infinite;
        }

        .error-message {
          color: var(--color-error);
          margin-top: var(--space-2);
          font-size: var(--text-sm);
        }

        .hint {
          color: var(--text-muted);
          font-size: var(--text-sm);
          margin-top: var(--space-2);
        }

        .instrument-section {
          display: flex;
          justify-content: center;
          overflow-x: auto;
          padding: var(--space-2) 0;
        }

        @media (max-width: 640px) {
          .mode-toggle {
            flex-direction: column;
            align-items: center;
          }
          
          .mode-btn {
            width: 100%;
            max-width: 200px;
          }
        }
      `}</style>
    </main>
  );
}
