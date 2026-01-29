/**
 * Leading Questions to Encourage Active Learning
 * DIY approach to engage learners in music theory
 */

export interface LeadingQuestion {
    en: string;
    hi: string;
    type: "recall" | "prediction" | "reflection" | "challenge";
}

// Questions about notes
export const NOTE_QUESTIONS: LeadingQuestion[] = [
    {
        en: "Can you guess which note comes after Sa?",
        hi: "क्या आप बता सकते हैं सा के बाद कौन सा स्वर आता है?",
        type: "recall",
    },
    {
        en: "What do you think Pa sounds like compared to Sa?",
        hi: "आपको क्या लगता है पा, सा की तुलना में कैसा सुनाई देता है?",
        type: "prediction",
    },
    {
        en: "Which note felt easiest to play?",
        hi: "कौन सा स्वर बजाना सबसे आसान लगा?",
        type: "reflection",
    },
    {
        en: "Can you play the ascending scale without looking?",
        hi: "क्या आप बिना देखे आरोही सरगम बजा सकते हैं?",
        type: "challenge",
    },
];

// Questions about patterns
export const PATTERN_QUESTIONS: LeadingQuestion[] = [
    {
        en: "What pattern did you notice in that sequence?",
        hi: "उस क्रम में आपने क्या पैटर्न देखा?",
        type: "reflection",
    },
    {
        en: "Can you play that pattern backwards?",
        hi: "क्या आप उस पैटर्न को उल्टा बजा सकते हैं?",
        type: "challenge",
    },
    {
        en: "How would you describe the melody we just learned?",
        hi: "अभी जो धुन हमने सीखी, उसका आप कैसे वर्णन करेंगे?",
        type: "reflection",
    },
    {
        en: "What note do you think comes next in this pattern?",
        hi: "आपको क्या लगता है इस पैटर्न में अगला स्वर कौन सा आएगा?",
        type: "prediction",
    },
];

// Questions about rhythm
export const RHYTHM_QUESTIONS: LeadingQuestion[] = [
    {
        en: "Can you clap the rhythm before playing it?",
        hi: "क्या आप बजाने से पहले ताल को ताली बजाकर दिखा सकते हैं?",
        type: "challenge",
    },
    {
        en: "How does this tempo feel - too fast, too slow, or just right?",
        hi: "यह गति कैसी लगती है - बहुत तेज़, बहुत धीमी, या सही?",
        type: "reflection",
    },
    {
        en: "Can you count along while playing?",
        hi: "क्या आप बजाते समय गिनती साथ में कर सकते हैं?",
        type: "challenge",
    },
];

// Questions about listening
export const LISTENING_QUESTIONS: LeadingQuestion[] = [
    {
        en: "Did you hear the difference between those two notes?",
        hi: "क्या आपने उन दो स्वरों के बीच का अंतर सुना?",
        type: "recall",
    },
    {
        en: "Which note sounded higher to you?",
        hi: "आपको कौन सा स्वर ऊँचा सुनाई दिया?",
        type: "recall",
    },
    {
        en: "Can you hum the tune you just played?",
        hi: "क्या आप अभी जो बजाया उसे गुनगुना सकते हैं?",
        type: "challenge",
    },
];

// Questions for practice motivation
export const MOTIVATION_QUESTIONS: LeadingQuestion[] = [
    {
        en: "What song would you like to play once you master these basics?",
        hi: "जब आप इन मूल बातों में निपुण हो जाएंगे तो कौन सा गाना बजाना चाहेंगे?",
        type: "reflection",
    },
    {
        en: "How do you feel about your progress today?",
        hi: "आज की अपनी प्रगति के बारे में आप कैसा महसूस कर रहे हैं?",
        type: "reflection",
    },
    {
        en: "What's one thing you'd like to improve?",
        hi: "एक चीज़ जिसमें आप सुधार करना चाहेंगे?",
        type: "reflection",
    },
];

// All question categories
export const ALL_QUESTIONS: LeadingQuestion[] = [
    ...NOTE_QUESTIONS,
    ...PATTERN_QUESTIONS,
    ...RHYTHM_QUESTIONS,
    ...LISTENING_QUESTIONS,
    ...MOTIVATION_QUESTIONS,
];

/**
 * Get a random question from a specific category
 */
export function getRandomQuestion(
    questions: LeadingQuestion[] = ALL_QUESTIONS
): LeadingQuestion {
    return questions[Math.floor(Math.random() * questions.length)];
}

/**
 * Get questions by type
 */
export function getQuestionsByType(type: LeadingQuestion["type"]): LeadingQuestion[] {
    return ALL_QUESTIONS.filter((q) => q.type === type);
}

/**
 * Get a contextual question based on lesson progress
 */
export function getContextualQuestion(
    notesLearned: number,
    accuracy: number,
    isStruggling: boolean
): LeadingQuestion {
    if (isStruggling) {
        // Offer motivation or easier reflection
        return getRandomQuestion(MOTIVATION_QUESTIONS);
    }

    if (accuracy > 80) {
        // Challenge the student
        return getRandomQuestion(getQuestionsByType("challenge"));
    }

    if (notesLearned < 4) {
        // Focus on basic recall
        return getRandomQuestion(getQuestionsByType("recall"));
    }

    // Mix of prediction and reflection
    const mixed = [...getQuestionsByType("prediction"), ...getQuestionsByType("reflection")];
    return getRandomQuestion(mixed);
}
