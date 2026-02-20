/**
 * Lesson Content organized by instrument and skill level
 */

// Re-export types from lesson-types (for backward compatibility)
export type { LessonStep, Lesson, SkillLevel } from "./lesson-types";
import type { Lesson } from "./lesson-types";

// Import comprehensive harmonium curriculum
import { HARMONIUM_BEGINNER_LESSONS } from "./harmonium-lessons";
import { HARMONIUM_INTERMEDIATE_LESSONS } from "./harmonium-intermediate";
import { HARMONIUM_ADVANCED_LESSONS } from "./harmonium-advanced";

// Import comprehensive piano curriculum
import { PIANO_BEGINNER_LESSONS } from "./piano-lessons";
import { PIANO_INTERMEDIATE_LESSONS } from "./piano-intermediate";
import { PIANO_ADVANCED_LESSONS } from "./piano-advanced";

// Import saxophone curriculum
import { SAX_BEGINNER_LESSONS, SAX_INTERMEDIATE_LESSONS, SAX_ADVANCED_LESSONS } from "./saxophone-lessons";

// Import violin curriculum
import { VIOLIN_BEGINNER_LESSONS, VIOLIN_INTERMEDIATE_LESSONS, VIOLIN_ADVANCED_LESSONS } from "./violin-lessons";

// ===== HARMONIUM LESSONS =====

export const HARMONIUM_BEGINNER_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "beginner",
    titleEn: "Introduction to Sa Re Ga Ma",
    titleHi: "सा रे ग म का परिचय",
    steps: [
        {
            type: "intro",
            titleEn: "Welcome to Your First Lesson!",
            titleHi: "आपके पहले पाठ में आपका स्वागत है!",
            contentEn: "Today we'll learn the first four notes: Sa (सा), Re (रे), Ga (ग), Ma (म). These are the foundation of Indian classical music. Take your time!",
            contentHi: "आज हम पहले चार स्वर सीखेंगे: सा, रे, ग, म। ये भारतीय शास्त्रीय संगीत की नींव हैं।",
        },
        {
            type: "demo",
            titleEn: "Watch and Listen: Sa (सा)",
            titleHi: "देखें और सुनें: सा",
            note: "C4",
            indianNote: "Sa",
            highlightKey: "C4",
        },
        {
            type: "practice",
            titleEn: "Your Turn: Play Sa (सा)",
            titleHi: "आपकी बारी: सा बजाएं",
            expectedNote: "C4",
            indianNote: "Sa",
            highlightKey: "C4",
        },
        {
            type: "demo",
            titleEn: "Watch and Listen: Re (रे)",
            titleHi: "देखें और सुनें: रे",
            note: "D4",
            indianNote: "Re",
            highlightKey: "D4",
        },
        {
            type: "practice",
            titleEn: "Your Turn: Play Re (रे)",
            titleHi: "आपकी बारी: रे बजाएं",
            expectedNote: "D4",
            indianNote: "Re",
            highlightKey: "D4",
        },
        {
            type: "sequence",
            titleEn: "Play: Sa Re (सा रे)",
            titleHi: "बजाएं: सा रे",
            sequence: ["C4", "D4"],
            indianSequence: ["Sa", "Re"],
        },
        {
            type: "complete",
            titleEn: "Great Start! 🎉",
            titleHi: "शानदार शुरुआत! 🎉",
            contentEn: "You've learned Sa and Re! Come back for more notes.",
            contentHi: "आपने सा और रे सीख लिया! और नोट्स के लिए वापस आएं।",
        },
    ],
};

export const HARMONIUM_INTERMEDIATE_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "intermediate",
    titleEn: "Complete Saptak (Octave)",
    titleHi: "पूर्ण सप्तक",
    steps: [
        {
            type: "intro",
            titleEn: "Let's Master the Full Scale",
            titleHi: "आइए पूर्ण स्केल में महारत हासिल करें",
            contentEn: "Since you know the basics, we'll work on playing the complete Saptak: Sa Re Ga Ma Pa Dha Ni Sa. Focus on smooth transitions.",
            contentHi: "चूंकि आप मूल बातें जानते हैं, हम पूर्ण सप्तक पर काम करेंगे: सा रे ग म प ध नि सा।",
        },
        {
            type: "sequence",
            titleEn: "Play Ascending: Sa Re Ga Ma",
            titleHi: "आरोही बजाएं: सा रे ग म",
            sequence: ["C4", "D4", "E4", "F4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma"],
        },
        {
            type: "sequence",
            titleEn: "Continue: Pa Dha Ni Sa",
            titleHi: "जारी रखें: प ध नि सा",
            sequence: ["G4", "A4", "B4", "C5"],
            indianSequence: ["Pa", "Dha", "Ni", "Sa'"],
        },
        {
            type: "sequence",
            titleEn: "Full Ascending Scale",
            titleHi: "पूर्ण आरोही स्केल",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'"],
        },
        {
            type: "sequence",
            titleEn: "Descending Scale",
            titleHi: "अवरोही स्केल",
            sequence: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"],
        },
        {
            type: "complete",
            titleEn: "Excellent Work! 🎉",
            titleHi: "उत्कृष्ट कार्य! 🎉",
            contentEn: "You've mastered the complete Saptak! Practice both ascending and descending.",
            contentHi: "आपने पूर्ण सप्तक में महारत हासिल कर ली! आरोही और अवरोही दोनों का अभ्यास करें।",
        },
    ],
};

export const HARMONIUM_ADVANCED_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "advanced",
    titleEn: "Raag Yaman Introduction",
    titleHi: "राग यमन परिचय",
    steps: [
        {
            type: "intro",
            titleEn: "Welcome to Raag Yaman",
            titleHi: "राग यमन में आपका स्वागत है",
            contentEn: "Raag Yaman uses tivra (sharp) Ma. Aaroh: Ni Re Ga Ma(#) Dha Ni Sa'. Avaroh: Sa' Ni Dha Pa Ma(#) Ga Re Sa. This is an evening raag.",
            contentHi: "राग यमन में तीव्र म का प्रयोग होता है। यह संध्या का राग है।",
        },
        {
            type: "sequence",
            titleEn: "Aaroh (Ascending)",
            titleHi: "आरोह",
            sequence: ["B3", "D4", "E4", "F#4", "A4", "B4", "C5"],
            indianSequence: ["Ni", "Re", "Ga", "Ma#", "Dha", "Ni", "Sa'"],
        },
        {
            type: "sequence",
            titleEn: "Avaroh (Descending)",
            titleHi: "अवरोह",
            sequence: ["C5", "B4", "A4", "G4", "F#4", "E4", "D4", "C4"],
            indianSequence: ["Sa'", "Ni", "Dha", "Pa", "Ma#", "Ga", "Re", "Sa"],
        },
        {
            type: "sequence",
            titleEn: "Pakad (Signature Phrase)",
            titleHi: "पकड़",
            sequence: ["B3", "D4", "E4", "F#4", "E4", "D4", "C4"],
            indianSequence: ["Ni", "Re", "Ga", "Ma#", "Ga", "Re", "Sa"],
        },
        {
            type: "sequence",
            titleEn: "Basic Alankar",
            titleHi: "मूल अलंकार",
            sequence: ["C4", "D4", "E4", "D4", "E4", "F#4", "E4", "F#4", "A4"],
            indianSequence: ["Sa", "Re", "Ga", "Re", "Ga", "Ma#", "Ga", "Ma#", "Dha"],
        },
        {
            type: "complete",
            titleEn: "Impressive! 🎉",
            titleHi: "प्रभावशाली! 🎉",
            contentEn: "You've started learning Raag Yaman. Practice the Pakad to internalize the raag's mood.",
            contentHi: "आपने राग यमन सीखना शुरू कर दिया है। राग के भाव को आत्मसात करने के लिए पकड़ का अभ्यास करें।",
        },
    ],
};

// ===== PIANO LESSONS =====

export const PIANO_BEGINNER_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "beginner",
    titleEn: "First Steps on the Piano",
    titleHi: "पियानो पर पहले कदम",
    steps: [
        {
            type: "intro",
            titleEn: "Welcome to Piano!",
            titleHi: "पियानो में आपका स्वागत है!",
            contentEn: "Let's start with finding Middle C and playing simple notes. The piano has white and black keys - we'll focus on white keys first.",
            contentHi: "आइए मिडल सी खोजने और सरल नोट्स बजाने से शुरू करें।",
        },
        {
            type: "demo",
            titleEn: "Find Middle C",
            titleHi: "मिडल सी खोजें",
            note: "C4",
            highlightKey: "C4",
        },
        {
            type: "practice",
            titleEn: "Play Middle C",
            titleHi: "मिडल सी बजाएं",
            expectedNote: "C4",
            highlightKey: "C4",
        },
        {
            type: "demo",
            titleEn: "Next Note: D",
            titleHi: "अगला नोट: डी",
            note: "D4",
            highlightKey: "D4",
        },
        {
            type: "practice",
            titleEn: "Play D",
            titleHi: "डी बजाएं",
            expectedNote: "D4",
            highlightKey: "D4",
        },
        {
            type: "sequence",
            titleEn: "Play C D E",
            titleHi: "सी डी ई बजाएं",
            sequence: ["C4", "D4", "E4"],
            indianSequence: ["C", "D", "E"],
        },
        {
            type: "complete",
            titleEn: "Well Done! 🎉",
            titleHi: "शाबाश! 🎉",
            contentEn: "You've played your first notes! Keep practicing.",
            contentHi: "आपने अपने पहले नोट्स बजाए! अभ्यास जारी रखें।",
        },
    ],
};

export const PIANO_INTERMEDIATE_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "intermediate",
    titleEn: "C Major Scale & Chords",
    titleHi: "सी मेजर स्केल और कॉर्ड्स",
    steps: [
        {
            type: "intro",
            titleEn: "Scales and Chords",
            titleHi: "स्केल और कॉर्ड्स",
            contentEn: "Let's work on the C Major scale and basic chord shapes. This builds the foundation for playing songs.",
            contentHi: "आइए सी मेजर स्केल और बेसिक कॉर्ड शेप पर काम करें।",
        },
        {
            type: "sequence",
            titleEn: "C Major Scale Up",
            titleHi: "सी मेजर स्केल ऊपर",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
            indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C"],
        },
        {
            type: "sequence",
            titleEn: "C Major Scale Down",
            titleHi: "सी मेजर स्केल नीचे",
            sequence: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["C", "B", "A", "G", "F", "E", "D", "C"],
        },
        {
            type: "sequence",
            titleEn: "C Major Chord (C-E-G)",
            titleHi: "सी मेजर कॉर्ड",
            sequence: ["C4", "E4", "G4"],
            indianSequence: ["C", "E", "G"],
        },
        {
            type: "complete",
            titleEn: "Great Progress! 🎉",
            titleHi: "शानदार प्रगति! 🎉",
            contentEn: "You're developing good technique. Practice the scale smoothly.",
            contentHi: "आप अच्छी तकनीक विकसित कर रहे हैं।",
        },
    ],
};

export const PIANO_ADVANCED_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "advanced",
    titleEn: "Jazz Voicings & Progressions",
    titleHi: "जैज़ वॉइसिंग और प्रोग्रेशन",
    steps: [
        {
            type: "intro",
            titleEn: "Jazz Piano Fundamentals",
            titleHi: "जैज़ पियानो की बुनियादी बातें",
            contentEn: "We'll explore ii-V-I progressions and chord extensions. These are essential for jazz and modern music.",
            contentHi: "हम ii-V-I प्रोग्रेशन और कॉर्ड एक्सटेंशन का अन्वेषण करेंगे।",
        },
        {
            type: "sequence",
            titleEn: "Dm7 Chord",
            titleHi: "डीएम7 कॉर्ड",
            sequence: ["D4", "F4", "A4", "C5"],
            indianSequence: ["D", "F", "A", "C"],
        },
        {
            type: "sequence",
            titleEn: "G7 Chord",
            titleHi: "जी7 कॉर्ड",
            sequence: ["G3", "B3", "D4", "F4"],
            indianSequence: ["G", "B", "D", "F"],
        },
        {
            type: "sequence",
            titleEn: "CMaj7 Chord",
            titleHi: "सीमेज7 कॉर्ड",
            sequence: ["C4", "E4", "G4", "B4"],
            indianSequence: ["C", "E", "G", "B"],
        },
        {
            type: "sequence",
            titleEn: "ii-V-I Progression",
            titleHi: "ii-V-I प्रोग्रेशन",
            sequence: ["D4", "F4", "A4", "C5", "G3", "B3", "D4", "F4", "C4", "E4", "G4", "B4"],
            indianSequence: ["Dm7", "→", "G7", "→", "CMaj7"],
        },
        {
            type: "complete",
            titleEn: "Excellent! 🎉",
            titleHi: "उत्कृष्ट! 🎉",
            contentEn: "You're on your way to jazz mastery. Practice voice leading between chords.",
            contentHi: "आप जैज़ में महारत की राह पर हैं।",
        },
    ],
};

// ===== GUITAR LESSONS =====

export const GUITAR_BEGINNER_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "beginner",
    titleEn: "Your First Guitar Notes",
    titleHi: "आपके पहले गिटार नोट्स",
    steps: [
        {
            type: "intro",
            titleEn: "Welcome to Guitar!",
            titleHi: "गिटार में आपका स्वागत है!",
            contentEn: "We'll learn to play the open strings and a few fretted notes. The guitar has 6 strings: E-A-D-G-B-e.",
            contentHi: "हम खुली तारों और कुछ फ्रेटेड नोट्स बजाना सीखेंगे।",
        },
        {
            type: "demo",
            titleEn: "Open E String (thickest)",
            titleHi: "खुली ई स्ट्रिंग",
            note: "E2",
            highlightKey: "E2",
        },
        {
            type: "practice",
            titleEn: "Play Open E",
            titleHi: "खुली ई बजाएं",
            expectedNote: "E2",
            highlightKey: "E2",
        },
        {
            type: "sequence",
            titleEn: "Play Open Strings Down",
            titleHi: "खुली तारें नीचे बजाएं",
            sequence: ["E2", "A2", "D3", "G3", "B3", "E4"],
            indianSequence: ["E", "A", "D", "G", "B", "e"],
        },
        {
            type: "complete",
            titleEn: "Great Start! 🎉",
            titleHi: "शानदार शुरुआत! 🎉",
            contentEn: "You've learned the open strings! Next we'll learn chords.",
            contentHi: "आपने खुली तारें सीख लीं! अगला हम कॉर्ड्स सीखेंगे।",
        },
    ],
};

export const GUITAR_INTERMEDIATE_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "intermediate",
    titleEn: "Essential Chord Shapes",
    titleHi: "आवश्यक कॉर्ड शेप्स",
    steps: [
        {
            type: "intro",
            titleEn: "Let's Learn Chords",
            titleHi: "आइए कॉर्ड्स सीखें",
            contentEn: "We'll practice G, C, and D chords - the foundation for countless songs.",
            contentHi: "हम G, C, और D कॉर्ड्स का अभ्यास करेंगे।",
        },
        {
            type: "sequence",
            titleEn: "G Major Chord",
            titleHi: "जी मेजर कॉर्ड",
            sequence: ["G2", "B2", "D3", "G3", "B3", "G4"],
            indianSequence: ["G", "B", "D", "G", "B", "G"],
        },
        {
            type: "sequence",
            titleEn: "C Major Chord",
            titleHi: "सी मेजर कॉर्ड",
            sequence: ["C3", "E3", "G3", "C4", "E4"],
            indianSequence: ["C", "E", "G", "C", "E"],
        },
        {
            type: "sequence",
            titleEn: "D Major Chord",
            titleHi: "डी मेजर कॉर्ड",
            sequence: ["D3", "A3", "D4", "F#4"],
            indianSequence: ["D", "A", "D", "F#"],
        },
        {
            type: "complete",
            titleEn: "Excellent! 🎉",
            titleHi: "उत्कृष्ट! 🎉",
            contentEn: "Practice switching between these chords smoothly!",
            contentHi: "इन कॉर्ड्स के बीच स्मूथली स्विच करने का अभ्यास करें!",
        },
    ],
};

export const GUITAR_ADVANCED_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "advanced",
    titleEn: "Fingerstyle Patterns",
    titleHi: "फिंगरस्टाइल पैटर्न",
    steps: [
        {
            type: "intro",
            titleEn: "Fingerstyle Technique",
            titleHi: "फिंगरस्टाइल तकनीक",
            contentEn: "We'll work on Travis picking and arpeggiated patterns. Use your thumb (p), index (i), middle (m), and ring (a) fingers.",
            contentHi: "हम ट्रैविस पिकिंग और आर्पेजिएटेड पैटर्न पर काम करेंगे।",
        },
        {
            type: "sequence",
            titleEn: "Basic Arpeggio on Em",
            titleHi: "Em पर बेसिक अर्पेजियो",
            sequence: ["E2", "B3", "G3", "E4", "G3", "B3"],
            indianSequence: ["p", "i", "m", "a", "m", "i"],
        },
        {
            type: "sequence",
            titleEn: "Travis Pattern Base",
            titleHi: "ट्रैविस पैटर्न बेस",
            sequence: ["E2", "G3", "B2", "B3", "E2", "E4", "B2", "B3"],
            indianSequence: ["p", "m", "p", "i", "p", "a", "p", "i"],
        },
        {
            type: "complete",
            titleEn: "Impressive! 🎉",
            titleHi: "प्रभावशाली! 🎉",
            contentEn: "Keep practicing slowly, then build speed gradually.",
            contentHi: "धीरे-धीरे अभ्यास करते रहें, फिर गति बढ़ाएं।",
        },
    ],
};

// ===== UKULELE LESSONS =====

export const UKULELE_BEGINNER_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "beginner",
    titleEn: "Ukulele Basics",
    titleHi: "यूकुलेले की मूल बातें",
    steps: [
        {
            type: "intro",
            titleEn: "Welcome to Ukulele!",
            titleHi: "यूकुलेले में आपका स्वागत है!",
            contentEn: "The ukulele has 4 strings tuned G-C-E-A. Let's start with the open strings.",
            contentHi: "यूकुलेले में 4 तारें होती हैं: G-C-E-A।",
        },
        {
            type: "sequence",
            titleEn: "Play Open Strings",
            titleHi: "खुली तारें बजाएं",
            sequence: ["G4", "C4", "E4", "A4"],
            indianSequence: ["G", "C", "E", "A"],
        },
        {
            type: "demo",
            titleEn: "C Note on A String",
            titleHi: "A स्ट्रिंग पर C नोट",
            note: "C5",
            highlightKey: "C5",
        },
        {
            type: "complete",
            titleEn: "Great! 🎉",
            titleHi: "शानदार! 🎉",
            contentEn: "You know the open strings. Next we'll learn the C chord!",
            contentHi: "आप खुली तारें जानते हैं। अगला हम C कॉर्ड सीखेंगे!",
        },
    ],
};

export const UKULELE_INTERMEDIATE_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "intermediate",
    titleEn: "Essential Ukulele Chords",
    titleHi: "आवश्यक यूकुलेले कॉर्ड्स",
    steps: [
        {
            type: "intro",
            titleEn: "Four Essential Chords",
            titleHi: "चार आवश्यक कॉर्ड्स",
            contentEn: "C, G, Am, and F - with these four chords you can play hundreds of songs!",
            contentHi: "C, G, Am, और F - इन चार कॉर्ड्स से आप सैकड़ों गाने बजा सकते हैं!",
        },
        {
            type: "sequence",
            titleEn: "C Major Chord",
            titleHi: "सी मेजर कॉर्ड",
            sequence: ["G4", "C4", "E4", "C5"],
            indianSequence: ["G", "C", "E", "C"],
        },
        {
            type: "sequence",
            titleEn: "G Major Chord",
            titleHi: "जी मेजर कॉर्ड",
            sequence: ["G4", "D4", "G4", "B4"],
            indianSequence: ["G", "D", "G", "B"],
        },
        {
            type: "sequence",
            titleEn: "Am Chord",
            titleHi: "Am कॉर्ड",
            sequence: ["G4", "C4", "E4", "A4"],
            indianSequence: ["G", "C", "E", "A"],
        },
        {
            type: "complete",
            titleEn: "Excellent! 🎉",
            titleHi: "उत्कृष्ट! 🎉",
            contentEn: "Practice switching between these chords.",
            contentHi: "इन कॉर्ड्स के बीच स्विच करने का अभ्यास करें।",
        },
    ],
};

export const UKULELE_ADVANCED_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "advanced",
    titleEn: "Advanced Strumming & Fingerpicking",
    titleHi: "एडवांस्ड स्ट्रमिंग और फिंगरपिकिंग",
    steps: [
        {
            type: "intro",
            titleEn: "Beyond Basic Strums",
            titleHi: "बेसिक स्ट्रम्स से आगे",
            contentEn: "Let's work on island strum patterns and fingerpicking arpeggios.",
            contentHi: "आइए आइलैंड स्ट्रम पैटर्न और फिंगरपिकिंग अर्पेजियो पर काम करें।",
        },
        {
            type: "sequence",
            titleEn: "Fingerpicking Pattern on C",
            titleHi: "C पर फिंगरपिकिंग पैटर्न",
            sequence: ["C4", "E4", "G4", "C5", "G4", "E4"],
            indianSequence: ["C", "E", "G", "C", "G", "E"],
        },
        {
            type: "sequence",
            titleEn: "Clawhammer Style",
            titleHi: "क्लॉहैमर स्टाइल",
            sequence: ["C5", "G4", "C4", "E4", "C5", "G4", "C4", "E4"],
            indianSequence: ["strike", "pluck", "brush", "pluck"],
        },
        {
            type: "complete",
            titleEn: "Amazing! 🎉",
            titleHi: "अद्भुत! 🎉",
            contentEn: "Your ukulele skills are really developing!",
            contentHi: "आपके यूकुलेले कौशल वास्तव में विकसित हो रहे हैं!",
        },
    ],
};

// ===== FLUTE LESSONS =====

export const FLUTE_BEGINNER_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "beginner",
    titleEn: "First Flute Sounds",
    titleHi: "पहली बांसुरी ध्वनियां",
    steps: [
        {
            type: "intro",
            titleEn: "Making Your First Sound",
            titleHi: "अपनी पहली ध्वनि बनाना",
            contentEn: "The flute requires a specific embouchure to produce sound. We'll start with simple fingerings.",
            contentHi: "बांसुरी को ध्वनि उत्पन्न करने के लिए एक विशिष्ट एम्बोशूर की आवश्यकता होती है।",
        },
        {
            type: "demo",
            titleEn: "D Note (All Holes Covered)",
            titleHi: "D नोट (सभी छेद बंद)",
            note: "D4",
            highlightKey: "D4",
        },
        {
            type: "practice",
            titleEn: "Play D Note",
            titleHi: "D नोट बजाएं",
            expectedNote: "D4",
            highlightKey: "D4",
        },
        {
            type: "demo",
            titleEn: "E Note",
            titleHi: "E नोट",
            note: "E4",
            highlightKey: "E4",
        },
        {
            type: "practice",
            titleEn: "Play E Note",
            titleHi: "E नोट बजाएं",
            expectedNote: "E4",
            highlightKey: "E4",
        },
        {
            type: "complete",
            titleEn: "Great Start! 🎉",
            titleHi: "शानदार शुरुआत! 🎉",
            contentEn: "You've produced your first flute notes!",
            contentHi: "आपने अपने पहले बांसुरी नोट्स बनाए!",
        },
    ],
};

export const FLUTE_INTERMEDIATE_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "intermediate",
    titleEn: "Complete First Octave",
    titleHi: "पूर्ण पहला ऑक्टेव",
    steps: [
        {
            type: "intro",
            titleEn: "First Octave Mastery",
            titleHi: "पहला ऑक्टेव महारत",
            contentEn: "Let's work on the complete first octave: D E F# G A B C# D.",
            contentHi: "आइए पूर्ण पहले ऑक्टेव पर काम करें।",
        },
        {
            type: "sequence",
            titleEn: "D Major Scale",
            titleHi: "डी मेजर स्केल",
            sequence: ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5"],
            indianSequence: ["D", "E", "F#", "G", "A", "B", "C#", "D"],
        },
        {
            type: "sequence",
            titleEn: "Descending",
            titleHi: "अवरोही",
            sequence: ["D5", "C#5", "B4", "A4", "G4", "F#4", "E4", "D4"],
            indianSequence: ["D", "C#", "B", "A", "G", "F#", "E", "D"],
        },
        {
            type: "complete",
            titleEn: "Excellent! 🎉",
            titleHi: "उत्कृष्ट! 🎉",
            contentEn: "You've mastered the first octave!",
            contentHi: "आपने पहला ऑक्टेव मास्टर कर लिया!",
        },
    ],
};

export const FLUTE_ADVANCED_LESSON_1: Lesson = {
    id: "lesson-1",
    level: "advanced",
    titleEn: "Raag Bhairav on Flute",
    titleHi: "बांसुरी पर राग भैरव",
    steps: [
        {
            type: "intro",
            titleEn: "Morning Raag: Bhairav",
            titleHi: "प्रातःकालीन राग: भैरव",
            contentEn: "Raag Bhairav uses komal Re and komal Dha. It's a profound morning raag.",
            contentHi: "राग भैरव में कोमल रे और कोमल ध का प्रयोग होता है।",
        },
        {
            type: "sequence",
            titleEn: "Aaroh",
            titleHi: "आरोह",
            sequence: ["D4", "D#4", "E4", "F4", "G4", "G#4", "A4", "B4", "D5"],
            indianSequence: ["Sa", "re", "Ga", "Ma", "Pa", "dha", "Ni", "Sa'"],
        },
        {
            type: "sequence",
            titleEn: "Avaroh",
            titleHi: "अवरोह",
            sequence: ["D5", "B4", "G#4", "G4", "F4", "E4", "D#4", "D4"],
            indianSequence: ["Sa'", "Ni", "dha", "Pa", "Ma", "Ga", "re", "Sa"],
        },
        {
            type: "complete",
            titleEn: "Beautiful! 🎉",
            titleHi: "खूबसूरत! 🎉",
            contentEn: "Practice this in the early morning for the full experience.",
            contentHi: "पूर्ण अनुभव के लिए इसे सुबह जल्दी अभ्यास करें।",
        },
    ],
};

// ===== LESSON GETTER FUNCTIONS =====

type SkillLevel = "beginner" | "intermediate" | "advanced";

// Generate unlimited lessons with varied patterns based on lesson number AND instrument
function createContinuedLesson(lessonNum: number, level: SkillLevel, instrument: string = "harmonium"): Lesson {

    // TABLA-specific patterns (bols and taals)
    const tablaBeginnerPatterns = [
        { seq: ["Dha", "Ge", "Na", "Ti"], labels: ["धा", "गे", "ना", "ती"], name: "Basic Bol" },
        { seq: ["Ta", "Dhin", "Dhin", "Na"], labels: ["ता", "धिं", "धिं", "ना"], name: "Theka Fragment" },
        { seq: ["Dha", "Dha", "Ti", "Ti"], labels: ["धा", "धा", "ती", "ती"], name: "Double Strokes" },
        { seq: ["Ge", "Na", "Ge", "Na"], labels: ["गे", "ना", "गे", "ना"], name: "Alternating" },
        { seq: ["Dha", "Tun", "Na", "Kat"], labels: ["धा", "तुं", "ना", "कट"], name: "Mixed Bols" },
    ];
    const tablaIntermediatePatterns = [
        { seq: ["Dha", "Dhin", "Dhin", "Dha", "Dha", "Dhin", "Dhin", "Dha"], labels: ["धा", "धिं", "धिं", "धा", "धा", "धिं", "धिं", "धा"], name: "Teentaal Theka" },
        { seq: ["Dha", "Ge", "Dhin", "Na", "Dha", "Ge", "Tun", "Na"], labels: ["धा", "गे", "धिं", "ना", "धा", "गे", "तुं", "ना"], name: "Dadra Theka" },
        { seq: ["Ti", "Na", "Dhin", "Dha", "Ge", "Na", "Dhin", "Dha"], labels: ["ती", "ना", "धिं", "धा", "गे", "ना", "धिं", "धा"], name: "Kaherwa" },
    ];
    const tablaAdvancedPatterns = [
        { seq: ["Dhi", "Na", "Dhi", "Dhi", "Na", "Ti", "Na", "Dhi", "Dhi", "Na"], labels: ["धी", "ना", "धी", "धी", "ना", "ती", "ना", "धी", "धी", "ना"], name: "Jhaptaal" },
        { seq: ["Dha", "Dhin", "Ta", "Tite", "Kata", "Gadi", "Gana"], labels: ["धा", "धिं", "ता", "तिटे", "कता", "गदि", "गन"], name: "Tihai" },
        { seq: ["Dha", "Ti", "Dha", "Ge", "Na", "Dhi", "Dhi", "Na", "Ge", "Na"], labels: ["धा", "ती", "धा", "गे", "ना", "धी", "धी", "ना", "गे", "ना"], name: "Rupak" },
    ];

    // DRUMS-specific patterns (drum kit)
    const drumsBeginnerPatterns = [
        { seq: ["kick", "hihat", "snare", "hihat"], labels: ["किक", "हाई-हैट", "स्नेयर", "हाई-हैट"], name: "Rock Basic" },
        { seq: ["kick", "kick", "snare", "kick"], labels: ["1", "2", "3", "4"], name: "Four on Floor" },
        { seq: ["hihat", "hihat", "hihat", "hihat"], labels: ["1", "2", "3", "4"], name: "Hi-Hat Steady" },
        { seq: ["snare", "snare", "kick", "snare"], labels: ["स्नेयर", "स्नेयर", "किक", "स्नेयर"], name: "Snare Pattern" },
    ];
    const drumsIntermediatePatterns = [
        { seq: ["kick", "hihat", "snare", "hihat", "kick", "kick", "snare", "hihat"], labels: ["1", "&", "2", "&", "3", "&", "4", "&"], name: "8th Note Rock" },
        { seq: ["tom1", "tom2", "floortom", "crash"], labels: ["टॉम1", "टॉम2", "फ्लोर", "क्रैश"], name: "Tom Fill" },
        { seq: ["kick", "snare", "kick", "snare", "tom1", "tom2", "crash", "kick"], labels: ["1", "2", "3", "4", "5", "6", "7", "8"], name: "Fill Ending" },
    ];
    const drumsAdvancedPatterns = [
        { seq: ["kick", "hihat", "kick", "snare", "hihat", "kick", "snare", "hihat"], labels: ["1", "e", "&", "a", "2", "e", "&", "a"], name: "Syncopated" },
        { seq: ["ride", "kick", "ride", "snare", "ride", "kick", "kick", "snare"], labels: ["1", "2", "3", "4", "5", "6", "7", "8"], name: "Jazz Pattern" },
        { seq: ["crash", "kick", "hihat", "snare", "tom1", "tom2", "floortom", "kick"], labels: ["क्रैश", "किक", "हाई-हैट", "स्नेयर", "टॉम", "टॉम", "फ्लोर", "किक"], name: "Complex Fill" },
    ];

    // MELODIC instrument patterns (for harmonium, piano, guitar, violin, flute, saxophone, ukulele)
    const melodicBeginnerPatterns = [
        { seq: ["C4", "D4", "E4", "F4"], labels: ["Sa", "Re", "Ga", "Ma"], name: "First Four Notes" },
        { seq: ["G4", "A4", "B4", "C5"], labels: ["Pa", "Dha", "Ni", "Sa'"], name: "Upper Notes" },
        { seq: ["C4", "D4", "E4", "D4", "C4"], labels: ["Sa", "Re", "Ga", "Re", "Sa"], name: "Up and Down" },
        { seq: ["C4", "E4", "G4", "C5"], labels: ["Sa", "Ga", "Pa", "Sa'"], name: "Skip Pattern" },
        { seq: ["D4", "E4", "F4", "G4"], labels: ["Re", "Ga", "Ma", "Pa"], name: "Middle Notes" },
        { seq: ["E4", "D4", "C4", "D4", "E4"], labels: ["Ga", "Re", "Sa", "Re", "Ga"], name: "Wave Pattern" },
    ];
    const melodicIntermediatePatterns = [
        { seq: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], labels: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'"], name: "Full Scale" },
        { seq: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], labels: ["Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"], name: "Descending" },
        { seq: ["C4", "E4", "G4", "B4", "C5"], labels: ["I", "III", "V", "VII", "I'"], name: "Arpeggio" },
        { seq: ["C4", "D4", "E4", "C4", "F4", "E4", "D4", "C4"], labels: ["1", "2", "3", "1", "4", "3", "2", "1"], name: "Solfege" },
    ];
    const melodicAdvancedPatterns = [
        { seq: ["B3", "D4", "E4", "F#4", "A4", "B4", "C5"], labels: ["Ni", "Re", "Ga", "Ma#", "Dha", "Ni", "Sa'"], name: "Yaman Aaroh" },
        { seq: ["C5", "B4", "A4", "G4", "F#4", "E4", "D4", "C4"], labels: ["Sa'", "Ni", "Dha", "Pa", "Ma#", "Ga", "Re", "Sa"], name: "Yaman Avaroh" },
        { seq: ["C4", "D#4", "E4", "F4", "G4", "G#4", "B4", "C5"], labels: ["Sa", "re", "Ga", "Ma", "Pa", "dha", "Ni", "Sa'"], name: "Bhairav" },
        { seq: ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5"], labels: ["Re", "Ga", "Ma#", "Pa", "Dha", "Ni", "Sa#", "Re'"], name: "D Major" },
    ];

    // Select patterns based on instrument type
    let beginnerPatterns, intermediatePatterns, advancedPatterns;

    if (instrument === "tabla") {
        beginnerPatterns = tablaBeginnerPatterns;
        intermediatePatterns = tablaIntermediatePatterns;
        advancedPatterns = tablaAdvancedPatterns;
    } else if (instrument === "drums") {
        beginnerPatterns = drumsBeginnerPatterns;
        intermediatePatterns = drumsIntermediatePatterns;
        advancedPatterns = drumsAdvancedPatterns;
    } else {
        // All melodic instruments
        beginnerPatterns = melodicBeginnerPatterns;
        intermediatePatterns = melodicIntermediatePatterns;
        advancedPatterns = melodicAdvancedPatterns;
    }

    const patterns = level === "beginner" ? beginnerPatterns
        : level === "intermediate" ? intermediatePatterns
            : advancedPatterns;

    const patternIndex = (lessonNum - 2) % patterns.length;
    const pattern = patterns[patternIndex];
    const reverseSeq = [...pattern.seq].reverse();
    const reverseLabels = [...pattern.labels].reverse();

    // Instrument-specific titles
    const instrumentTitles: Record<string, { en: string; hi: string }> = {
        tabla: { en: "Tabla", hi: "तबला" },
        drums: { en: "Drums", hi: "ड्रम्स" },
        harmonium: { en: "Harmonium", hi: "हारमोनियम" },
        piano: { en: "Piano", hi: "पियानो" },
        guitar: { en: "Guitar", hi: "गिटार" },
        violin: { en: "Violin", hi: "वायलिन" },
        flute: { en: "Flute", hi: "बांसुरी" },
        saxophone: { en: "Saxophone", hi: "सैक्सोफोन" },
        ukulele: { en: "Ukulele", hi: "यूकुलेले" },
    };

    const instrumentTitle = instrumentTitles[instrument] || { en: instrument, hi: instrument };

    return {
        id: `lesson-${lessonNum}`,
        level,
        titleEn: `${instrumentTitle.en} Lesson ${lessonNum}: ${pattern.name}`,
        titleHi: `${instrumentTitle.hi} पाठ ${lessonNum}: ${pattern.name}`,
        steps: [
            {
                type: "intro",
                titleEn: `${instrumentTitle.en}: ${pattern.name}`,
                titleHi: `${instrumentTitle.hi}: ${pattern.name}`,
                contentEn: `Practice the "${pattern.name}" pattern. Focus on accuracy and timing.`,
                contentHi: `"${pattern.name}" पैटर्न का अभ्यास करें।`,
            },
            {
                type: "sequence",
                titleEn: `Play: ${pattern.name}`,
                titleHi: `बजाएं: ${pattern.name}`,
                sequence: pattern.seq,
                indianSequence: pattern.labels,
            },
            {
                type: "sequence",
                titleEn: "Reverse Pattern",
                titleHi: "उलटा पैटर्न",
                sequence: reverseSeq,
                indianSequence: reverseLabels,
            },
            {
                type: "sequence",
                titleEn: "Play Twice",
                titleHi: "दो बार बजाएं",
                sequence: [...pattern.seq, ...pattern.seq],
                indianSequence: [...pattern.labels, ...pattern.labels],
            },
            {
                type: "complete",
                titleEn: "Excellent! 🎉",
                titleHi: "उत्कृष्ट! 🎉",
                contentEn: `Lesson ${lessonNum} complete! Keep practicing to build muscle memory.`,
                contentHi: `पाठ ${lessonNum} पूर्ण! अभ्यास जारी रखें।`,
            },
        ],
    };
}

export function getLesson(instrument: string, level: SkillLevel, lessonId: string): Lesson {
    // Primary lessons map (lesson-1 for each instrument/level)
    const primaryLessons: Record<string, Record<SkillLevel, Lesson>> = {
        harmonium: {
            beginner: HARMONIUM_BEGINNER_LESSON_1,
            intermediate: HARMONIUM_INTERMEDIATE_LESSON_1,
            advanced: HARMONIUM_ADVANCED_LESSON_1,
        },
        piano: {
            beginner: PIANO_BEGINNER_LESSON_1,
            intermediate: PIANO_INTERMEDIATE_LESSON_1,
            advanced: PIANO_ADVANCED_LESSON_1,
        },
        guitar: {
            beginner: GUITAR_BEGINNER_LESSON_1,
            intermediate: GUITAR_INTERMEDIATE_LESSON_1,
            advanced: GUITAR_ADVANCED_LESSON_1,
        },
        ukulele: {
            beginner: UKULELE_BEGINNER_LESSON_1,
            intermediate: UKULELE_INTERMEDIATE_LESSON_1,
            advanced: UKULELE_ADVANCED_LESSON_1,
        },
        flute: {
            beginner: FLUTE_BEGINNER_LESSON_1,
            intermediate: FLUTE_INTERMEDIATE_LESSON_1,
            advanced: FLUTE_ADVANCED_LESSON_1,
        },
        // New instruments - use similar lessons to existing ones
        violin: {
            beginner: VIOLIN_BEGINNER_LESSONS[0],
            intermediate: VIOLIN_INTERMEDIATE_LESSONS[0],
            advanced: VIOLIN_ADVANCED_LESSONS[0],
        },
        tabla: {
            beginner: {
                id: "lesson-1", level: "beginner", titleEn: "Tabla: Basic Bols", titleHi: "तबला: बुनियादी बोल",
                steps: [
                    { type: "intro", titleEn: "Welcome to Tabla!", titleHi: "तबला में आपका स्वागत है!", contentEn: "Learn the foundation strokes: Dha, Ge, Na, Ti", contentHi: "बुनियादी बोल सीखें: धा, गे, ना, ती" },
                    { type: "sequence", titleEn: "Play: Dha Ge Na Ti", titleHi: "बजाएं: धा गे ना ती", sequence: ["Dha", "Ge", "Na", "Ti"], indianSequence: ["धा", "गे", "ना", "ती"] },
                    { type: "sequence", titleEn: "Repeat Pattern", titleHi: "पैटर्न दोहराएं", sequence: ["Dha", "Ge", "Na", "Ti", "Dha", "Ge", "Na", "Ti"], indianSequence: ["धा", "गे", "ना", "ती", "धा", "गे", "ना", "ती"] },
                    { type: "complete", titleEn: "Great work! 🎉", titleHi: "बहुत बढ़िया! 🎉" }
                ]
            },
            intermediate: {
                id: "lesson-1", level: "intermediate", titleEn: "Tabla: Teentaal", titleHi: "तबला: तीनताल",
                steps: [
                    { type: "intro", titleEn: "Learn Teentaal", titleHi: "तीनताल सीखें", contentEn: "The most common 16-beat cycle", contentHi: "सबसे आम 16 मात्रा का ताल" },
                    { type: "sequence", titleEn: "Teentaal Theka", titleHi: "तीनताल ठेका", sequence: ["Dha", "Dhin", "Dhin", "Dha", "Dha", "Dhin", "Dhin", "Dha"], indianSequence: ["धा", "धिं", "धिं", "धा", "धा", "धिं", "धिं", "धा"] },
                    { type: "complete", titleEn: "Excellent! 🎉", titleHi: "उत्कृष्ट! 🎉" }
                ]
            },
            advanced: {
                id: "lesson-1", level: "advanced", titleEn: "Tabla: Jhaptaal", titleHi: "तबला: झपताल",
                steps: [
                    { type: "intro", titleEn: "Master Jhaptaal", titleHi: "झपताल में महारत", contentEn: "A complex 10-beat cycle", contentHi: "10 मात्रा का जटिल ताल" },
                    { type: "sequence", titleEn: "Jhaptaal Theka", titleHi: "झपताल ठेका", sequence: ["Dhi", "Na", "Dhi", "Dhi", "Na", "Ti", "Na", "Dhi", "Dhi", "Na"], indianSequence: ["धी", "ना", "धी", "धी", "ना", "ती", "ना", "धी", "धी", "ना"] },
                    { type: "complete", titleEn: "Beautiful! 🎉", titleHi: "खूबसूरत! 🎉" }
                ]
            },
        },
        drums: {
            beginner: {
                id: "lesson-1", level: "beginner", titleEn: "Drums: Basic Beat", titleHi: "ड्रम्स: बुनियादी बीट",
                steps: [
                    { type: "intro", titleEn: "Welcome to Drums!", titleHi: "ड्रम्स में आपका स्वागत है!", contentEn: "Learn kick, snare, and hi-hat basics", contentHi: "किक, स्नेयर और हाई-हैट की मूल बातें सीखें" },
                    { type: "sequence", titleEn: "Basic Rock Beat", titleHi: "बेसिक रॉक बीट", sequence: ["kick", "hihat", "snare", "hihat"], indianSequence: ["किक", "हाई-हैट", "स्नेयर", "हाई-हैट"] },
                    { type: "sequence", titleEn: "Repeat Pattern", titleHi: "पैटर्न दोहराएं", sequence: ["kick", "hihat", "snare", "hihat", "kick", "hihat", "snare", "hihat"], indianSequence: ["किक", "हाई-हैट", "स्नेयर", "हाई-हैट", "किक", "हाई-हैट", "स्नेयर", "हाई-हैट"] },
                    { type: "complete", titleEn: "Rock on! 🎉", titleHi: "शानदार! 🎉" }
                ]
            },
            intermediate: {
                id: "lesson-1", level: "intermediate", titleEn: "Drums: Fills", titleHi: "ड्रम्स: फिल्स",
                steps: [
                    { type: "intro", titleEn: "Learn Drum Fills", titleHi: "ड्रम फिल्स सीखें", contentEn: "Add excitement with tom patterns", contentHi: "टॉम पैटर्न से रोमांच जोड़ें" },
                    { type: "sequence", titleEn: "Simple Fill", titleHi: "सिंपल फिल", sequence: ["tom1", "tom2", "floortom", "crash"], indianSequence: ["टॉम1", "टॉम2", "फ्लोर", "क्रैश"] },
                    { type: "complete", titleEn: "Excellent! 🎉", titleHi: "उत्कृष्ट! 🎉" }
                ]
            },
            advanced: {
                id: "lesson-1", level: "advanced", titleEn: "Drums: Complex Patterns", titleHi: "ड्रम्स: जटिल पैटर्न",
                steps: [
                    { type: "intro", titleEn: "Advanced Drumming", titleHi: "एडवांस्ड ड्रमिंग", contentEn: "Master syncopated rhythms", contentHi: "सिंकोपेटेड ताल में महारत हासिल करें" },
                    { type: "sequence", titleEn: "Syncopated Beat", titleHi: "सिंकोपेटेड बीट", sequence: ["kick", "hihat", "kick", "snare", "kick", "hihat", "snare", "kick"], indianSequence: ["1", "2", "3", "4", "5", "6", "7", "8"] },
                    { type: "complete", titleEn: "Amazing! 🎉", titleHi: "अद्भुत! 🎉" }
                ]
            },
        },
        saxophone: {
            beginner: SAX_BEGINNER_LESSONS[0],
            intermediate: SAX_INTERMEDIATE_LESSONS[0],
            advanced: SAX_ADVANCED_LESSONS[0],
        },
    };

    // Extract lesson number
    const lessonNum = parseInt(lessonId.replace("lesson-", "")) || 1;

    // Special handling for harmonium - use comprehensive curriculum
    if (instrument === "harmonium") {
        const lessonIndex = lessonNum - 1; // Arrays are 0-indexed
        if (level === "beginner" && lessonIndex < HARMONIUM_BEGINNER_LESSONS.length) {
            return HARMONIUM_BEGINNER_LESSONS[lessonIndex];
        }
        if (level === "intermediate" && lessonIndex < HARMONIUM_INTERMEDIATE_LESSONS.length) {
            return HARMONIUM_INTERMEDIATE_LESSONS[lessonIndex];
        }
        if (level === "advanced" && lessonIndex < HARMONIUM_ADVANCED_LESSONS.length) {
            return HARMONIUM_ADVANCED_LESSONS[lessonIndex];
        }
        // If beyond available lessons, return the last lesson
        if (level === "beginner") return HARMONIUM_BEGINNER_LESSONS[HARMONIUM_BEGINNER_LESSONS.length - 1];
        if (level === "intermediate") return HARMONIUM_INTERMEDIATE_LESSONS[HARMONIUM_INTERMEDIATE_LESSONS.length - 1];
        if (level === "advanced") return HARMONIUM_ADVANCED_LESSONS[HARMONIUM_ADVANCED_LESSONS.length - 1];
    }

    // Special handling for piano - use comprehensive curriculum
    if (instrument === "piano") {
        const lessonIndex = lessonNum - 1;
        if (level === "beginner" && lessonIndex < PIANO_BEGINNER_LESSONS.length) {
            return PIANO_BEGINNER_LESSONS[lessonIndex];
        }
        if (level === "intermediate" && lessonIndex < PIANO_INTERMEDIATE_LESSONS.length) {
            return PIANO_INTERMEDIATE_LESSONS[lessonIndex];
        }
        if (level === "advanced" && lessonIndex < PIANO_ADVANCED_LESSONS.length) {
            return PIANO_ADVANCED_LESSONS[lessonIndex];
        }
        if (level === "beginner") return PIANO_BEGINNER_LESSONS[PIANO_BEGINNER_LESSONS.length - 1];
        if (level === "intermediate") return PIANO_INTERMEDIATE_LESSONS[PIANO_INTERMEDIATE_LESSONS.length - 1];
        if (level === "advanced") return PIANO_ADVANCED_LESSONS[PIANO_ADVANCED_LESSONS.length - 1];
    }

    // Special handling for saxophone - use comprehensive curriculum
    if (instrument === "saxophone") {
        const lessonIndex = lessonNum - 1;
        if (level === "beginner" && lessonIndex < SAX_BEGINNER_LESSONS.length) {
            return SAX_BEGINNER_LESSONS[lessonIndex];
        }
        if (level === "intermediate" && lessonIndex < SAX_INTERMEDIATE_LESSONS.length) {
            return SAX_INTERMEDIATE_LESSONS[lessonIndex];
        }
        if (level === "advanced" && lessonIndex < SAX_ADVANCED_LESSONS.length) {
            return SAX_ADVANCED_LESSONS[lessonIndex];
        }
        if (level === "beginner") return SAX_BEGINNER_LESSONS[SAX_BEGINNER_LESSONS.length - 1];
        if (level === "intermediate") return SAX_INTERMEDIATE_LESSONS[SAX_INTERMEDIATE_LESSONS.length - 1];
        if (level === "advanced") return SAX_ADVANCED_LESSONS[SAX_ADVANCED_LESSONS.length - 1];
    }

    // Special handling for violin - use comprehensive curriculum
    if (instrument === "violin") {
        const lessonIndex = lessonNum - 1;
        if (level === "beginner" && lessonIndex < VIOLIN_BEGINNER_LESSONS.length) {
            return VIOLIN_BEGINNER_LESSONS[lessonIndex];
        }
        if (level === "intermediate" && lessonIndex < VIOLIN_INTERMEDIATE_LESSONS.length) {
            return VIOLIN_INTERMEDIATE_LESSONS[lessonIndex];
        }
        if (level === "advanced" && lessonIndex < VIOLIN_ADVANCED_LESSONS.length) {
            return VIOLIN_ADVANCED_LESSONS[lessonIndex];
        }
        if (level === "beginner") return VIOLIN_BEGINNER_LESSONS[VIOLIN_BEGINNER_LESSONS.length - 1];
        if (level === "intermediate") return VIOLIN_INTERMEDIATE_LESSONS[VIOLIN_INTERMEDIATE_LESSONS.length - 1];
        if (level === "advanced") return VIOLIN_ADVANCED_LESSONS[VIOLIN_ADVANCED_LESSONS.length - 1];
    }

    // Get the instrument lessons
    const instrumentLessons = primaryLessons[instrument];
    if (!instrumentLessons) {
        return createContinuedLesson(lessonNum, level, instrument);
    }

    // For lesson-1, return the specific lesson
    if (lessonNum === 1) {
        return instrumentLessons[level] || instrumentLessons.beginner;
    }

    // For lesson-2, lesson-3, etc., generate a practice lesson with instrument-specific patterns
    return createContinuedLesson(lessonNum, level, instrument);
}

export function getLevelDescription(level: SkillLevel): { en: string; hi: string } {
    const descriptions: Record<SkillLevel, { en: string; hi: string }> = {
        beginner: {
            en: "Learning the fundamentals step by step",
            hi: "कदम दर कदम मूल बातें सीखना",
        },
        intermediate: {
            en: "Building on the basics with more complex patterns",
            hi: "अधिक जटिल पैटर्न के साथ बुनियादी बातों पर निर्माण",
        },
        advanced: {
            en: "Mastering advanced techniques and musical concepts",
            hi: "उन्नत तकनीकों और संगीत अवधारणाओं में महारत",
        },
    };

    return descriptions[level] || descriptions.beginner;
}

// Lessons are unlimited - they generate dynamically!
export const TOTAL_LESSONS = Infinity;

