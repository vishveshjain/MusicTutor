"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { getCurrentLesson } from "@/lib/progress/progress-service";

type SkillLevel = "beginner" | "intermediate" | "advanced";
type Instrument = "harmonium" | "piano" | "guitar" | "ukulele" | "flute" | "violin" | "tabla" | "drums" | "saxophone";

interface OnboardingState {
  step: number;
  instrument: Instrument | null;
  skillLevel: SkillLevel | null;
  language: "en" | "hi";
  name: string;
}

export default function OnboardingPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselectedInstrument = searchParams.get("instrument") as Instrument | null;

  const [state, setState] = useState<OnboardingState>({
    step: preselectedInstrument ? 2 : 1,
    instrument: preselectedInstrument,
    skillLevel: null,
    language: "en",
    name: "",
  });

  const updateState = (updates: Partial<OnboardingState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const nextStep = () => {
    updateState({ step: state.step + 1 });
  };

  const prevStep = () => {
    updateState({ step: state.step - 1 });
  };



  const handleComplete = () => {
    if (!state.instrument || !state.skillLevel) return;

    // Get the next lesson based on progress
    const nextLessonId = getCurrentLesson(state.instrument, state.skillLevel);

    // Pass skill level and language as query params
    const lessonPath = `/learn/${state.instrument}/${nextLessonId}?level=${state.skillLevel}&lang=${state.language}`;
    router.push(lessonPath);
  };

  return (
    <main className="onboarding">
      <div className="onboarding-container">
        {/* Progress indicator */}
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${(state.step / 4) * 100}%` }}
          />
        </div>

        {/* Step 1: Choose Instrument */}
        {state.step === 1 && (
          <div className="step animate-fade-in">
            <h1>Choose Your Instrument</h1>
            <p className="step-description">
              Which instrument would you like to learn? You can always add more later.
            </p>

            <div className="instrument-options">
              <button
                className={`instrument-option ${state.instrument === "harmonium" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "harmonium" })}
              >
                <span className="emoji">🪗</span>
                <span className="name">Harmonium</span>
                <span className="desc">हारमोनियम</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "piano" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "piano" })}
              >
                <span className="emoji">🎹</span>
                <span className="name">Piano</span>
                <span className="desc">पियानो</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "guitar" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "guitar" })}
              >
                <span className="emoji">🎸</span>
                <span className="name">Guitar</span>
                <span className="desc">गिटार</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "ukulele" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "ukulele" })}
              >
                <span className="emoji">🪕</span>
                <span className="name">Ukulele</span>
                <span className="desc">यूकुलेले</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "flute" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "flute" })}
              >
                <span className="emoji">🎺</span>
                <span className="name">Flute</span>
                <span className="desc">बांसुरी</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "violin" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "violin" })}
              >
                <span className="emoji">🎻</span>
                <span className="name">Violin</span>
                <span className="desc">वायलिन</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "tabla" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "tabla" })}
              >
                <span className="emoji">🥁</span>
                <span className="name">Tabla</span>
                <span className="desc">तबला</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "drums" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "drums" })}
              >
                <span className="emoji">🪘</span>
                <span className="name">Drums</span>
                <span className="desc">ड्रम्स</span>
              </button>

              <button
                className={`instrument-option ${state.instrument === "saxophone" ? "selected" : ""
                  }`}
                onClick={() => updateState({ instrument: "saxophone" })}
              >
                <span className="emoji">🎷</span>
                <span className="name">Saxophone</span>
                <span className="desc">सैक्सोफोन</span>
              </button>
            </div>

            <div className="step-actions">
              <Link href="/" className="btn btn-ghost">
                Back
              </Link>
              <button
                className="btn btn-primary"
                disabled={!state.instrument}
                onClick={nextStep}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Skill Level */}
        {state.step === 2 && (
          <div className="step animate-fade-in">
            <h1>What&apos;s Your Experience Level?</h1>
            <p className="step-description">
              This helps us create the perfect learning path for you.
            </p>

            <div className="level-options">
              <button
                className={`level-option ${state.skillLevel === "beginner" ? "selected" : ""
                  }`}
                onClick={() => updateState({ skillLevel: "beginner" })}
              >
                <span className="icon">🌱</span>
                <div className="level-info">
                  <span className="title">Beginner</span>
                  <span className="desc">I&apos;m new to this instrument</span>
                  <span className="desc-hi">मैं इस वाद्य में नया हूँ</span>
                </div>
              </button>

              <button
                className={`level-option ${state.skillLevel === "intermediate" ? "selected" : ""
                  }`}
                onClick={() => updateState({ skillLevel: "intermediate" })}
              >
                <span className="icon">🌿</span>
                <div className="level-info">
                  <span className="title">Intermediate</span>
                  <span className="desc">I know the basics</span>
                  <span className="desc-hi">मुझे मूल बातें पता हैं</span>
                </div>
              </button>

              <button
                className={`level-option ${state.skillLevel === "advanced" ? "selected" : ""
                  }`}
                onClick={() => updateState({ skillLevel: "advanced" })}
              >
                <span className="icon">🌳</span>
                <div className="level-info">
                  <span className="title">Advanced</span>
                  <span className="desc">I want to master my skills</span>
                  <span className="desc-hi">मैं अपने कौशल में महारत हासिल करना चाहता हूँ</span>
                </div>
              </button>
            </div>

            <div className="step-actions">
              <button className="btn btn-ghost" onClick={prevStep}>
                Back
              </button>
              <button
                className="btn btn-primary"
                disabled={!state.skillLevel}
                onClick={nextStep}
              >
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Language Preference */}
        {state.step === 3 && (
          <div className="step animate-fade-in">
            <h1>Choose Your Language</h1>
            <p className="step-description">
              Select your preferred language for lessons and feedback.
            </p>

            <div className="language-options">
              <button
                className={`language-option ${state.language === "en" ? "selected" : ""
                  }`}
                onClick={() => updateState({ language: "en" })}
              >
                <span className="flag">🇺🇸</span>
                <span className="name">English</span>
              </button>

              <button
                className={`language-option ${state.language === "hi" ? "selected" : ""
                  }`}
                onClick={() => updateState({ language: "hi" })}
              >
                <span className="flag">🇮🇳</span>
                <span className="name">हिन्दी</span>
              </button>
            </div>

            <div className="step-actions">
              <button className="btn btn-ghost" onClick={prevStep}>
                Back
              </button>
              <button className="btn btn-primary" onClick={nextStep}>
                Continue
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Ready to Start */}
        {state.step === 4 && (
          <div className="step animate-fade-in">
            <div className="ready-icon">🎉</div>
            <h1>You&apos;re All Set!</h1>
            <p className="step-description">
              {state.language === "en"
                ? `Your personalized ${state.instrument} lessons are ready. Let's begin your musical journey!`
                : `आपके व्यक्तिगत ${state.instrument === "harmonium" ? "हारमोनियम" :
                  state.instrument === "piano" ? "पियानो" :
                    state.instrument === "guitar" ? "गिटार" :
                      state.instrument === "ukulele" ? "यूकुलेले" :
                        state.instrument === "flute" ? "बांसुरी" :
                          state.instrument === "violin" ? "वायलिन" :
                            state.instrument === "tabla" ? "तबला" :
                              state.instrument === "drums" ? "ड्रम्स" :
                                state.instrument === "saxophone" ? "सैक्सोफोन" : state.instrument
                } पाठ तैयार हैं। आइए आपकी संगीत यात्रा शुरू करें!`}
            </p>

            <div className="summary-card card">
              <div className="summary-item">
                <span className="label">Instrument:</span>
                <span className="value">
                  {state.instrument === "harmonium" && "🪗 Harmonium"}
                  {state.instrument === "piano" && "🎹 Piano"}
                  {state.instrument === "guitar" && "🎸 Guitar"}
                  {state.instrument === "ukulele" && "🪕 Ukulele"}
                  {state.instrument === "flute" && "🎺 Flute"}
                  {state.instrument === "violin" && "🎻 Violin"}
                  {state.instrument === "tabla" && "🥁 Tabla"}
                  {state.instrument === "drums" && "🪘 Drums"}
                  {state.instrument === "saxophone" && "🎷 Saxophone"}
                </span>
              </div>
              <div className="summary-item">
                <span className="label">Level:</span>
                <span className="value">{state.skillLevel}</span>
              </div>
              <div className="summary-item">
                <span className="label">Language:</span>
                <span className="value">
                  {state.language === "en" ? "English" : "हिन्दी"}
                </span>
              </div>
            </div>

            <div className="step-actions">
              <button className="btn btn-ghost" onClick={prevStep}>
                Back
              </button>
              <button className="btn btn-primary btn-lg" onClick={handleComplete}>
                Start First Lesson
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .onboarding {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--space-6);
          background: var(--gradient-subtle);
        }

        .onboarding-container {
          width: 100%;
          max-width: 600px;
        }

        .progress-bar {
          height: 4px;
          background: var(--bg-tertiary);
          border-radius: var(--radius-full);
          margin-bottom: var(--space-10);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: var(--radius-full);
          transition: width var(--transition-normal);
        }

        .step {
          text-align: center;
        }

        .step h1 {
          font-size: var(--text-3xl);
          margin-bottom: var(--space-4);
        }

        .step-description {
          color: var(--text-secondary);
          font-size: var(--text-lg);
          margin-bottom: var(--space-8);
        }

        /* Instrument options */
        .instrument-options {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }

        .instrument-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--space-6);
          background: var(--bg-tertiary);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .instrument-option:hover {
          border-color: var(--color-primary);
          transform: translateY(-4px);
        }

        .instrument-option.selected {
          border-color: var(--color-primary);
          background: var(--glass-bg);
          box-shadow: var(--shadow-glow);
        }

        .instrument-option .emoji {
          font-size: 4rem;
          margin-bottom: var(--space-3);
        }

        .instrument-option .name {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--text-primary);
        }

        .instrument-option .desc {
          font-size: var(--text-sm);
          color: var(--text-muted);
        }

        /* Level options */
        .level-options {
          display: flex;
          flex-direction: column;
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }

        .level-option {
          display: flex;
          align-items: center;
          gap: var(--space-4);
          padding: var(--space-5);
          background: var(--bg-tertiary);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
          text-align: left;
        }

        .level-option:hover {
          border-color: var(--color-primary);
        }

        .level-option.selected {
          border-color: var(--color-primary);
          background: var(--glass-bg);
        }

        .level-option .icon {
          font-size: 2.5rem;
        }

        .level-info {
          display: flex;
          flex-direction: column;
        }

        .level-info .title {
          font-size: var(--text-lg);
          font-weight: 600;
          color: var(--text-primary);
        }

        .level-info .desc {
          font-size: var(--text-sm);
          color: var(--text-secondary);
        }

        .level-info .desc-hi {
          font-size: var(--text-xs);
          color: var(--text-muted);
        }

        /* Language options */
        .language-options {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-4);
          margin-bottom: var(--space-8);
        }

        .language-option {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: var(--space-6);
          background: var(--bg-tertiary);
          border: 2px solid var(--glass-border);
          border-radius: var(--radius-xl);
          cursor: pointer;
          transition: all var(--transition-normal);
        }

        .language-option:hover {
          border-color: var(--color-primary);
        }

        .language-option.selected {
          border-color: var(--color-primary);
          background: var(--glass-bg);
        }

        .language-option .flag {
          font-size: 3rem;
          margin-bottom: var(--space-3);
        }

        .language-option .name {
          font-size: var(--text-xl);
          font-weight: 600;
          color: var(--text-primary);
        }

        /* Ready step */
        .ready-icon {
          font-size: 5rem;
          margin-bottom: var(--space-4);
        }

        .summary-card {
          max-width: 400px;
          margin: 0 auto var(--space-8);
          text-align: left;
        }

        .summary-item {
          display: flex;
          justify-content: space-between;
          padding: var(--space-3) 0;
          border-bottom: 1px solid var(--glass-border);
        }

        .summary-item:last-child {
          border-bottom: none;
        }

        .summary-item .label {
          color: var(--text-muted);
        }

        .summary-item .value {
          font-weight: 600;
          text-transform: capitalize;
        }

        /* Actions */
        .step-actions {
          display: flex;
          justify-content: center;
          gap: var(--space-4);
        }

        @media (max-width: 480px) {
          .instrument-options,
          .language-options {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
