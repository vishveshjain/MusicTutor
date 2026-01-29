export { getFeedbackEngine } from './feedback-engine';
export type { Feedback, FeedbackType } from './feedback-engine';

export {
    getRandomMessage,
    getStreakMessage,
    getAccuracyEncouragement,
    CORRECT_NOTE_MESSAGES,
    WRONG_NOTE_MESSAGES,
    STREAK_MESSAGES,
    SESSION_START_MESSAGES,
    COMPLETION_MESSAGES,
} from './encouragement';
export type { EncouragementMessage } from './encouragement';

export {
    getRandomQuestion,
    getQuestionsByType,
    getContextualQuestion,
    NOTE_QUESTIONS,
    PATTERN_QUESTIONS,
    RHYTHM_QUESTIONS,
} from './leading-questions';
export type { LeadingQuestion } from './leading-questions';
