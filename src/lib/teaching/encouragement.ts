/**
 * Encouragement Messages for Music Learning
 * Bilingual support (English and Hindi)
 */

export interface EncouragementMessage {
    en: string;
    hi: string;
}

// Encouragement for correct notes
export const CORRECT_NOTE_MESSAGES: EncouragementMessage[] = [
    { en: "Perfect! 🎵", hi: "बिल्कुल सही! 🎵" },
    { en: "Excellent!", hi: "उत्कृष्ट!" },
    { en: "Well done!", hi: "शाबाश!" },
    { en: "Great job!", hi: "बहुत बढ़िया!" },
    { en: "You got it!", hi: "आपने कर दिखाया!" },
    { en: "Wonderful!", hi: "अद्भुत!" },
    { en: "Beautiful note!", hi: "सुंदर स्वर!" },
    { en: "Keep it up!", hi: "ऐसे ही चलते रहो!" },
];

// Encouragement for streaks
export const STREAK_MESSAGES: Record<number, EncouragementMessage> = {
    3: {
        en: "3 in a row! You're on fire! 🔥",
        hi: "लगातार 3! आप शानदार हैं! 🔥",
    },
    5: {
        en: "5 perfect notes! Amazing! ⭐",
        hi: "5 सही स्वर! कमाल है! ⭐",
    },
    10: {
        en: "10 note streak! You're a natural! 🌟",
        hi: "10 स्वरों की श्रृंखला! आप प्राकृतिक प्रतिभा हैं! 🌟",
    },
    15: {
        en: "15 notes perfect! Incredible talent! 💫",
        hi: "15 स्वर सही! अविश्वसनीय प्रतिभा! 💫",
    },
    20: {
        en: "20 perfect notes! You're a master! 🏆",
        hi: "20 सही स्वर! आप उस्ताद हैं! 🏆",
    },
};

// Messages for wrong notes
export const WRONG_NOTE_MESSAGES: EncouragementMessage[] = [
    { en: "Almost there! Try again.", hi: "लगभग सही! फिर कोशिश करें।" },
    { en: "Not quite, but you're learning!", hi: "पूरी तरह नहीं, पर आप सीख रहे हैं!" },
    { en: "Keep practicing, you'll get it!", hi: "अभ्यास जारी रखें, आप कर लेंगे!" },
    { en: "Good effort! Try once more.", hi: "अच्छा प्रयास! एक बार और कोशिश करें।" },
    { en: "Close! Listen carefully and try again.", hi: "करीब! ध्यान से सुनें और फिर कोशिश करें।" },
];

// Messages when user is struggling
export const STRUGGLE_MESSAGES: EncouragementMessage[] = [
    {
        en: "Learning takes time. Let's slow down.",
        hi: "सीखने में समय लगता है। धीरे चलते हैं।",
    },
    {
        en: "Would you like to see the demonstration again?",
        hi: "क्या आप फिर से प्रदर्शन देखना चाहेंगे?",
    },
    {
        en: "Let's practice this note by itself first.",
        hi: "पहले इस स्वर का अलग से अभ्यास करते हैं।",
    },
    {
        en: "Remember, every expert was once a beginner!",
        hi: "याद रखें, हर विशेषज्ञ कभी शुरुआती था!",
    },
];

// Completion messages
export const COMPLETION_MESSAGES: EncouragementMessage[] = [
    {
        en: "Congratulations! You completed this lesson! 🎉",
        hi: "बधाई हो! आपने यह पाठ पूरा किया! 🎉",
    },
    {
        en: "Wonderful! You've mastered this section! 🌟",
        hi: "शानदार! आपने इस खंड में महारत हासिल कर ली! 🌟",
    },
    {
        en: "Great work! Ready for the next challenge? 🚀",
        hi: "बढ़िया काम! अगली चुनौती के लिए तैयार? 🚀",
    },
];

// Session start messages
export const SESSION_START_MESSAGES: EncouragementMessage[] = [
    { en: "Let's make some beautiful music today! 🎶", hi: "आज कुछ सुंदर संगीत बनाते हैं! 🎶" },
    { en: "Ready to learn? Let's begin! 🎵", hi: "सीखने के लिए तैयार? शुरू करते हैं! 🎵" },
    { en: "Welcome back! Practice makes perfect! 🎹", hi: "वापस स्वागत है! अभ्यास से पूर्णता आती है! 🎹" },
];

/**
 * Get a random message from a category
 */
export function getRandomMessage(messages: EncouragementMessage[]): EncouragementMessage {
    return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Get streak message if applicable
 */
export function getStreakMessage(streak: number): EncouragementMessage | null {
    const streakLevels = Object.keys(STREAK_MESSAGES)
        .map(Number)
        .sort((a, b) => b - a);

    for (const level of streakLevels) {
        if (streak >= level) {
            return STREAK_MESSAGES[level];
        }
    }
    return null;
}

/**
 * Get encouragement based on accuracy
 */
export function getAccuracyEncouragement(accuracy: number): EncouragementMessage {
    if (accuracy >= 90) {
        return { en: "Outstanding! Near perfect accuracy! 🏆", hi: "उत्कृष्ट! लगभग पूर्ण सटीकता! 🏆" };
    } else if (accuracy >= 75) {
        return { en: "Great job! You're doing really well! ⭐", hi: "बढ़िया! आप बहुत अच्छा कर रहे हैं! ⭐" };
    } else if (accuracy >= 50) {
        return { en: "Good progress! Keep practicing! 💪", hi: "अच्छी प्रगति! अभ्यास जारी रखें! 💪" };
    } else {
        return { en: "Every practice session makes you better! 🌱", hi: "हर अभ्यास सत्र आपको बेहतर बनाता है! 🌱" };
    }
}
