/**
 * Comprehensive Harmonium Lessons - Beginner Level (20 Lessons)
 */

import { Lesson } from "./lesson-types";

export const HARMONIUM_BEGINNER_1: Lesson = {
    id: "lesson-1", level: "beginner",
    titleEn: "Introduction to Harmonium", titleHi: "हारमोनियम का परिचय",
    steps: [
        { type: "intro", titleEn: "Welcome!", titleHi: "स्वागत है!", contentEn: "Learn about harmonium parts and posture.", contentHi: "हारमोनियम के भागों और मुद्रा के बारे में जानें।" },
        { type: "demo", titleEn: "Finding Sa", titleHi: "सा खोजें", note: "C4", indianNote: "Sa", highlightKey: "C4" },
        { type: "practice", titleEn: "Play Sa", titleHi: "सा बजाएं", expectedNote: "C4", indianNote: "Sa", highlightKey: "C4" },
        { type: "complete", titleEn: "Great Start! 🎉", titleHi: "शानदार शुरुआत! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_2: Lesson = {
    id: "lesson-2", level: "beginner",
    titleEn: "Mastering Sa", titleHi: "सा में महारत",
    steps: [
        { type: "intro", titleEn: "Deepening Sa Practice", titleHi: "सा अभ्यास", contentEn: "Sa is the foundation of Indian music.", contentHi: "सा भारतीय संगीत की नींव है।" },
        { type: "sequence", titleEn: "Play Sa Three Times", titleHi: "तीन बार सा", sequence: ["C4", "C4", "C4"], indianSequence: ["Sa", "Sa", "Sa"] },
        { type: "complete", titleEn: "Excellent! 🎉", titleHi: "उत्कृष्ट! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_3: Lesson = {
    id: "lesson-3", level: "beginner",
    titleEn: "Introduction to Re", titleHi: "रे का परिचय",
    steps: [
        { type: "intro", titleEn: "The Second Note", titleHi: "दूसरा स्वर", contentEn: "Re is one step higher than Sa.", contentHi: "रे सा से एक कदम ऊपर है।" },
        { type: "demo", titleEn: "Watch: Re", titleHi: "देखें: रे", note: "D4", indianNote: "Re", highlightKey: "D4" },
        { type: "practice", titleEn: "Play Re", titleHi: "रे बजाएं", expectedNote: "D4", indianNote: "Re", highlightKey: "D4" },
        { type: "sequence", titleEn: "Play: Sa Re Sa", titleHi: "बजाएं: सा रे सा", sequence: ["C4", "D4", "C4"], indianSequence: ["Sa", "Re", "Sa"] },
        { type: "complete", titleEn: "Wonderful! 🎉", titleHi: "अद्भुत! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_4: Lesson = {
    id: "lesson-4", level: "beginner",
    titleEn: "Introduction to Ga", titleHi: "ग का परिचय",
    steps: [
        { type: "intro", titleEn: "The Third Note", titleHi: "तीसरा स्वर", contentEn: "Ga creates a sweet sound.", contentHi: "ग मधुर ध्वनि बनाता है।" },
        { type: "demo", titleEn: "Watch: Ga", titleHi: "देखें: ग", note: "E4", indianNote: "Ga", highlightKey: "E4" },
        { type: "practice", titleEn: "Play Ga", titleHi: "ग बजाएं", expectedNote: "E4", indianNote: "Ga", highlightKey: "E4" },
        { type: "sequence", titleEn: "Play: Sa Re Ga", titleHi: "बजाएं: सा रे ग", sequence: ["C4", "D4", "E4"], indianSequence: ["Sa", "Re", "Ga"] },
        { type: "complete", titleEn: "Excellent! 🎉", titleHi: "उत्कृष्ट! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_5: Lesson = {
    id: "lesson-5", level: "beginner",
    titleEn: "Introduction to Ma", titleHi: "म का परिचय",
    steps: [
        { type: "intro", titleEn: "The Fourth Note", titleHi: "चौथा स्वर", contentEn: "Complete the first tetrachord.", contentHi: "पहला चतुर्थांश पूर्ण करें।" },
        { type: "demo", titleEn: "Watch: Ma", titleHi: "देखें: म", note: "F4", indianNote: "Ma", highlightKey: "F4" },
        { type: "practice", titleEn: "Play Ma", titleHi: "म बजाएं", expectedNote: "F4", indianNote: "Ma", highlightKey: "F4" },
        { type: "sequence", titleEn: "Play: Sa Re Ga Ma", titleHi: "बजाएं: सा रे ग म", sequence: ["C4", "D4", "E4", "F4"], indianSequence: ["Sa", "Re", "Ga", "Ma"] },
        { type: "complete", titleEn: "Milestone! 🎉", titleHi: "मील का पत्थर! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_6: Lesson = {
    id: "lesson-6", level: "beginner",
    titleEn: "Introduction to Pa", titleHi: "प का परिचय",
    steps: [
        { type: "intro", titleEn: "The Fifth Note", titleHi: "पांचवां स्वर", contentEn: "Pa is the most stable note after Sa.", contentHi: "प सा के बाद सबसे स्थिर स्वर है।" },
        { type: "demo", titleEn: "Watch: Pa", titleHi: "देखें: प", note: "G4", indianNote: "Pa", highlightKey: "G4" },
        { type: "practice", titleEn: "Play Pa", titleHi: "प बजाएं", expectedNote: "G4", indianNote: "Pa", highlightKey: "G4" },
        { type: "sequence", titleEn: "Play: Sa Re Ga Ma Pa", titleHi: "बजाएं: सा रे ग म प", sequence: ["C4", "D4", "E4", "F4", "G4"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa"] },
        { type: "complete", titleEn: "Great! 🎉", titleHi: "शानदार! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_7: Lesson = {
    id: "lesson-7", level: "beginner",
    titleEn: "Introduction to Dha", titleHi: "ध का परिचय",
    steps: [
        { type: "intro", titleEn: "The Sixth Note", titleHi: "छठा स्वर", contentEn: "Dha adds emotional depth.", contentHi: "ध भावनात्मक गहराई जोड़ता है।" },
        { type: "demo", titleEn: "Watch: Dha", titleHi: "देखें: ध", note: "A4", indianNote: "Dha", highlightKey: "A4" },
        { type: "practice", titleEn: "Play Dha", titleHi: "ध बजाएं", expectedNote: "A4", indianNote: "Dha", highlightKey: "A4" },
        { type: "sequence", titleEn: "Play Six Notes", titleHi: "छह स्वर बजाएं", sequence: ["C4", "D4", "E4", "F4", "G4", "A4"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha"] },
        { type: "complete", titleEn: "Excellent! 🎉", titleHi: "उत्कृष्ट! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_8: Lesson = {
    id: "lesson-8", level: "beginner",
    titleEn: "Introduction to Ni", titleHi: "नि का परिचय",
    steps: [
        { type: "intro", titleEn: "The Seventh Note", titleHi: "सातवां स्वर", contentEn: "Ni creates tension before upper Sa.", contentHi: "नि ऊपरी सा से पहले तनाव बनाता है।" },
        { type: "demo", titleEn: "Watch: Ni", titleHi: "देखें: नि", note: "B4", indianNote: "Ni", highlightKey: "B4" },
        { type: "practice", titleEn: "Play Ni", titleHi: "नि बजाएं", expectedNote: "B4", indianNote: "Ni", highlightKey: "B4" },
        { type: "sequence", titleEn: "Play Seven Notes", titleHi: "सात स्वर", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni"] },
        { type: "complete", titleEn: "Almost There! 🎉", titleHi: "लगभग पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_9: Lesson = {
    id: "lesson-9", level: "beginner",
    titleEn: "Upper Sa - Completing Octave", titleHi: "ऊपर का सा - सप्तक पूर्ण",
    steps: [
        { type: "intro", titleEn: "The Upper Tonic", titleHi: "तार सप्तक का सा", contentEn: "Complete the octave with upper Sa.", contentHi: "ऊपरी सा से सप्तक पूर्ण करें।" },
        { type: "demo", titleEn: "Watch: Upper Sa", titleHi: "देखें: ऊपर का सा", note: "C5", indianNote: "Sa'", highlightKey: "C5" },
        { type: "practice", titleEn: "Play Upper Sa", titleHi: "ऊपर का सा बजाएं", expectedNote: "C5", indianNote: "Sa'", highlightKey: "C5" },
        { type: "sequence", titleEn: "Full Scale", titleHi: "पूर्ण स्केल", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'"] },
        { type: "complete", titleEn: "Saptak Complete! 🎉", titleHi: "सप्तक पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_10: Lesson = {
    id: "lesson-10", level: "beginner",
    titleEn: "Complete Saptak Practice", titleHi: "पूर्ण सप्तक अभ्यास",
    steps: [
        { type: "intro", titleEn: "Mastering Full Octave", titleHi: "पूर्ण सप्तक में महारत", contentEn: "Practice ascending and descending.", contentHi: "आरोह और अवरोह का अभ्यास करें।" },
        { type: "sequence", titleEn: "Aaroh (Ascending)", titleHi: "आरोह", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'"] },
        { type: "sequence", titleEn: "Avroh (Descending)", titleHi: "अवरोह", sequence: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"] },
        { type: "complete", titleEn: "Foundation Complete! 🎉", titleHi: "नींव पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_11: Lesson = {
    id: "lesson-11", level: "beginner",
    titleEn: "Alankar 1: Double Notes", titleHi: "अलंकार 1: दोहरे स्वर",
    steps: [
        { type: "intro", titleEn: "Introduction to Alankars", titleHi: "अलंकारों का परिचय", contentEn: "Each note played twice.", contentHi: "प्रत्येक स्वर दो बार बजाएं।" },
        { type: "sequence", titleEn: "Double Notes", titleHi: "दोहरे स्वर", sequence: ["C4", "C4", "D4", "D4", "E4", "E4", "F4", "F4"], indianSequence: ["Sa", "Sa", "Re", "Re", "Ga", "Ga", "Ma", "Ma"] },
        { type: "complete", titleEn: "First Alankar Done! 🎉", titleHi: "पहला अलंकार! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_12: Lesson = {
    id: "lesson-12", level: "beginner",
    titleEn: "Alankar 2: Two-Note Groups", titleHi: "अलंकार 2: दो स्वर समूह",
    steps: [
        { type: "intro", titleEn: "Moving in Pairs", titleHi: "जोड़ों में चलना", contentEn: "Sa Re, Re Ga, Ga Ma pattern.", contentHi: "सा रे, रे ग, ग म पैटर्न।" },
        { type: "sequence", titleEn: "Two-Note Groups", titleHi: "दो स्वर समूह", sequence: ["C4", "D4", "D4", "E4", "E4", "F4", "F4", "G4"], indianSequence: ["Sa", "Re", "Re", "Ga", "Ga", "Ma", "Ma", "Pa"] },
        { type: "complete", titleEn: "Excellent! 🎉", titleHi: "उत्कृष्ट! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_13: Lesson = {
    id: "lesson-13", level: "beginner",
    titleEn: "Alankar 3: Three-Note Groups", titleHi: "अलंकार 3: तीन स्वर समूह",
    steps: [
        { type: "intro", titleEn: "Sa Re Ga Pattern", titleHi: "सा रे ग पैटर्न", contentEn: "Most common alankar pattern.", contentHi: "सबसे आम अलंकार पैटर्न।" },
        { type: "sequence", titleEn: "Three-Note Ascending", titleHi: "तीन स्वर आरोह", sequence: ["C4", "D4", "E4", "D4", "E4", "F4", "E4", "F4", "G4"], indianSequence: ["Sa", "Re", "Ga", "Re", "Ga", "Ma", "Ga", "Ma", "Pa"] },
        { type: "complete", titleEn: "Great Progress! 🎉", titleHi: "शानदार प्रगति! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_14: Lesson = {
    id: "lesson-14", level: "beginner",
    titleEn: "Alankar 4: Four-Note Groups", titleHi: "अलंकार 4: चार स्वर समूह",
    steps: [
        { type: "intro", titleEn: "Sa Re Ga Ma Pattern", titleHi: "सा रे ग म पैटर्न", contentEn: "Requires more finger control.", contentHi: "अधिक उंगली नियंत्रण चाहिए।" },
        { type: "sequence", titleEn: "Four-Note Pattern", titleHi: "चार स्वर पैटर्न", sequence: ["C4", "D4", "E4", "F4", "D4", "E4", "F4", "G4", "E4", "F4", "G4", "A4"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Re", "Ga", "Ma", "Pa", "Ga", "Ma", "Pa", "Dha"] },
        { type: "complete", titleEn: "Excellent Work! 🎉", titleHi: "उत्कृष्ट! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_15: Lesson = {
    id: "lesson-15", level: "beginner",
    titleEn: "Alankar 5: Wave Pattern", titleHi: "अलंकार 5: लहर पैटर्न",
    steps: [
        { type: "intro", titleEn: "Up-Down-Up Pattern", titleHi: "ऊपर-नीचे-ऊपर", contentEn: "Wave-like motion.", contentHi: "लहर जैसी गति।" },
        { type: "sequence", titleEn: "Wave Pattern", titleHi: "लहर पैटर्न", sequence: ["C4", "D4", "C4", "D4", "E4", "D4", "E4", "F4", "E4", "F4", "G4", "F4"], indianSequence: ["Sa", "Re", "Sa", "Re", "Ga", "Re", "Ga", "Ma", "Ga", "Ma", "Pa", "Ma"] },
        { type: "complete", titleEn: "Wave Mastered! 🎉", titleHi: "लहर सीखी! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_16: Lesson = {
    id: "lesson-16", level: "beginner",
    titleEn: "Introduction to Taal", titleHi: "ताल का परिचय",
    steps: [
        { type: "intro", titleEn: "Understanding Rhythm", titleHi: "लय को समझना", contentEn: "Taal is the heartbeat of music.", contentHi: "ताल संगीत की धड़कन है।" },
        { type: "sequence", titleEn: "Playing with Counts", titleHi: "गिनती के साथ", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], indianSequence: ["1", "2", "3", "4", "5", "6", "7", "8"] },
        { type: "complete", titleEn: "Rhythm Basics! 🎉", titleHi: "लय मूल! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_17: Lesson = {
    id: "lesson-17", level: "beginner",
    titleEn: "Dadra Taal (6 beats)", titleHi: "दादरा ताल (6 मात्रा)",
    steps: [
        { type: "intro", titleEn: "6-Beat Cycle", titleHi: "6 मात्रा चक्र", contentEn: "Dadra: Dha Dhin Na | Dha Tin Na", contentHi: "दादरा: धा धिं ना | धा तिं ना" },
        { type: "sequence", titleEn: "6-Note Pattern", titleHi: "6 स्वर पैटर्न", sequence: ["C4", "D4", "E4", "F4", "G4", "A4"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha"] },
        { type: "complete", titleEn: "Dadra Learned! 🎉", titleHi: "दादरा सीखा! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_18: Lesson = {
    id: "lesson-18", level: "beginner",
    titleEn: "Keharwa Taal (8 beats)", titleHi: "कहरवा ताल (8 मात्रा)",
    steps: [
        { type: "intro", titleEn: "8-Beat Cycle", titleHi: "8 मात्रा चक्र", contentEn: "Most common taal for bhajans.", contentHi: "भजनों के लिए सबसे आम ताल।" },
        { type: "sequence", titleEn: "8-Note Pattern", titleHi: "8 स्वर पैटर्न", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'"] },
        { type: "complete", titleEn: "Keharwa Done! 🎉", titleHi: "कहरवा पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_19: Lesson = {
    id: "lesson-19", level: "beginner",
    titleEn: "Scales with Rhythm", titleHi: "लय के साथ स्केल",
    steps: [
        { type: "intro", titleEn: "Combining Skills", titleHi: "कौशल मिलाना", contentEn: "Play scales with steady timing.", contentHi: "समान समय के साथ स्केल बजाएं।" },
        { type: "sequence", titleEn: "Rhythmic Scale", titleHi: "लयबद्ध स्केल", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'", "Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"] },
        { type: "complete", titleEn: "Rhythmic Playing! 🎉", titleHi: "लयबद्ध वादन! 🎉" }
    ]
};

export const HARMONIUM_BEGINNER_20: Lesson = {
    id: "lesson-20", level: "beginner",
    titleEn: "Beginner Assessment", titleHi: "शुरुआती मूल्यांकन",
    steps: [
        { type: "intro", titleEn: "Congratulations!", titleHi: "बधाई!", contentEn: "You've learned all notes, 5 alankars, and rhythm basics!", contentHi: "आपने सभी स्वर, 5 अलंकार और लय की मूल बातें सीखीं!" },
        { type: "sequence", titleEn: "Final Review", titleHi: "अंतिम समीक्षा", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'", "Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"] },
        { type: "complete", titleEn: "Beginner Complete! 🎉🏆", titleHi: "शुरुआती पूर्ण! 🎉🏆", contentEn: "Ready for Intermediate level!", contentHi: "मध्यवर्ती स्तर के लिए तैयार!" }
    ]
};

export const HARMONIUM_BEGINNER_LESSONS: Lesson[] = [
    HARMONIUM_BEGINNER_1, HARMONIUM_BEGINNER_2, HARMONIUM_BEGINNER_3, HARMONIUM_BEGINNER_4, HARMONIUM_BEGINNER_5,
    HARMONIUM_BEGINNER_6, HARMONIUM_BEGINNER_7, HARMONIUM_BEGINNER_8, HARMONIUM_BEGINNER_9, HARMONIUM_BEGINNER_10,
    HARMONIUM_BEGINNER_11, HARMONIUM_BEGINNER_12, HARMONIUM_BEGINNER_13, HARMONIUM_BEGINNER_14, HARMONIUM_BEGINNER_15,
    HARMONIUM_BEGINNER_16, HARMONIUM_BEGINNER_17, HARMONIUM_BEGINNER_18, HARMONIUM_BEGINNER_19, HARMONIUM_BEGINNER_20
];