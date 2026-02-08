/**
 * Intermediate Harmonium Lessons (20 lessons)
 */

import { Lesson } from "./lesson-types";

// ===== INTERMEDIATE LEVEL: 20 LESSONS =====

export const HARMONIUM_INTERMEDIATE_1: Lesson = {
    id: "lesson-1", level: "intermediate",
    titleEn: "Alankar 6: Skip Patterns", titleHi: "अलंकार 6: छलांग पैटर्न",
    steps: [
        {
            type: "intro", titleEn: "Interval Jumps", titleHi: "अंतराल छलांग",
            contentEn: "Skip patterns jump over notes: Sa Ga, Re Ma, Ga Pa. This builds finger independence.", contentHi: "छलांग पैटर्न स्वरों को छोड़कर चलते हैं।"
        },
        {
            type: "sequence", titleEn: "Skip Ascending", titleHi: "छलांग आरोह",
            sequence: ["C4", "E4", "D4", "F4", "E4", "G4", "F4", "A4", "G4", "B4", "A4", "C5"],
            indianSequence: ["Sa", "Ga", "Re", "Ma", "Ga", "Pa", "Ma", "Dha", "Pa", "Ni", "Dha", "Sa'"]
        },
        {
            type: "sequence", titleEn: "Skip Descending", titleHi: "छलांग अवरोह",
            sequence: ["C5", "A4", "B4", "G4", "A4", "F4", "G4", "E4", "F4", "D4", "E4", "C4"],
            indianSequence: ["Sa'", "Dha", "Ni", "Pa", "Dha", "Ma", "Pa", "Ga", "Ma", "Re", "Ga", "Sa"]
        },
        { type: "complete", titleEn: "Skip Mastered! 🎉", titleHi: "छलांग सीखी! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_2: Lesson = {
    id: "lesson-2", level: "intermediate",
    titleEn: "Alankar 7: Zigzag Patterns", titleHi: "अलंकार 7: टेढ़ा-मेढ़ा पैटर्न",
    steps: [
        {
            type: "intro", titleEn: "Complex Movement", titleHi: "जटिल गति",
            contentEn: "Zigzag alankars move in complex patterns: Sa Ga Re Ma, Re Ma Ga Pa.", contentHi: "टेढ़े-मेढ़े अलंकार जटिल पैटर्न में चलते हैं।"
        },
        {
            type: "sequence", titleEn: "Zigzag Pattern", titleHi: "टेढ़ा-मेढ़ा पैटर्न",
            sequence: ["C4", "E4", "D4", "F4", "E4", "G4", "F4", "A4", "G4", "B4", "A4", "C5"],
            indianSequence: ["Sa", "Ga", "Re", "Ma", "Ga", "Pa", "Ma", "Dha", "Pa", "Ni", "Dha", "Sa'"]
        },
        { type: "complete", titleEn: "Zigzag Done! 🎉", titleHi: "टेढ़ा-मेढ़ा पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_3: Lesson = {
    id: "lesson-3", level: "intermediate",
    titleEn: "Alankar 8: Five-Note Groups", titleHi: "अलंकार 8: पांच स्वर समूह",
    steps: [
        {
            type: "intro", titleEn: "Extended Patterns", titleHi: "विस्तारित पैटर्न",
            contentEn: "Five-note groups build longer melodic phrases and prepare you for raga practice.", contentHi: "पांच-स्वर समूह लंबे स्वर वाक्य बनाते हैं।"
        },
        {
            type: "sequence", titleEn: "Five-Note Ascending", titleHi: "पांच स्वर आरोह",
            sequence: ["C4", "D4", "E4", "F4", "G4", "D4", "E4", "F4", "G4", "A4", "E4", "F4", "G4", "A4", "B4", "F4", "G4", "A4", "B4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Re", "Ga", "Ma", "Pa", "Dha", "Ga", "Ma", "Pa", "Dha", "Ni", "Ma", "Pa", "Dha", "Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Five-Note Done! 🎉", titleHi: "पांच स्वर पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_4: Lesson = {
    id: "lesson-4", level: "intermediate",
    titleEn: "Speed Building Exercises", titleHi: "गति बढ़ाने के अभ्यास",
    steps: [
        {
            type: "intro", titleEn: "Increasing Tempo", titleHi: "गति बढ़ाना",
            contentEn: "Practice scales and alankars at increasing speeds. Start slow, then build up gradually.", contentHi: "स्केल और अलंकार बढ़ती गति से अभ्यास करें।"
        },
        {
            type: "sequence", titleEn: "Quick Scale", titleHi: "तेज़ स्केल",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'", "Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Speed Improved! 🎉", titleHi: "गति बढ़ी! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_5: Lesson = {
    id: "lesson-5", level: "intermediate",
    titleEn: "Mixed Alankar Practice", titleHi: "मिश्रित अलंकार अभ्यास",
    steps: [
        {
            type: "intro", titleEn: "Combining Patterns", titleHi: "पैटर्न मिलाना",
            contentEn: "Mix different alankar types in one practice session for comprehensive skill building.", contentHi: "एक सत्र में विभिन्न अलंकार प्रकारों को मिलाएं।"
        },
        {
            type: "sequence", titleEn: "Mixed Pattern 1", titleHi: "मिश्रित पैटर्न 1",
            sequence: ["C4", "D4", "E4", "E4", "D4", "C4", "D4", "E4", "F4", "F4", "E4", "D4"],
            indianSequence: ["Sa", "Re", "Ga", "Ga", "Re", "Sa", "Re", "Ga", "Ma", "Ma", "Ga", "Re"]
        },
        { type: "complete", titleEn: "Mixed Practice Done! 🎉", titleHi: "मिश्रित अभ्यास पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_6: Lesson = {
    id: "lesson-6", level: "intermediate",
    titleEn: "Introduction to Kan Swar", titleHi: "कण स्वर का परिचय",
    steps: [
        {
            type: "intro", titleEn: "Grace Notes", titleHi: "अलंकृत स्वर",
            contentEn: "Kan Swar are grace notes - brief touches of adjacent notes that embellish the main note.", contentHi: "कण स्वर अलंकृत स्वर हैं - मुख्य स्वर को सजाने वाले हल्के स्पर्श।"
        },
        {
            type: "demo", titleEn: "Kan Swar Example", titleHi: "कण स्वर उदाहरण",
            note: "E4", indianNote: "Ga", highlightKey: "E4",
            contentEn: "Touch Re lightly before landing on Ga. The Re is barely heard.", contentHi: "ग पर आने से पहले रे को हल्के से छुएं।"
        },
        {
            type: "sequence", titleEn: "Kan Swar Practice", titleHi: "कण स्वर अभ्यास",
            sequence: ["D4", "E4", "E4", "F4", "G4", "G4", "A4", "B4", "C5"],
            indianSequence: ["re-Ga", "Ga", "ma-Pa", "Pa", "dha-Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Kan Swar Learned! 🎉", titleHi: "कण स्वर सीखा! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_7: Lesson = {
    id: "lesson-7", level: "intermediate",
    titleEn: "Introduction to Meend", titleHi: "मींड का परिचय",
    steps: [
        {
            type: "intro", titleEn: "Gliding Between Notes", titleHi: "स्वरों के बीच फिसलना",
            contentEn: "Meend is a smooth glide from one note to another. On harmonium, we simulate it with quick transitions.", contentHi: "मींड एक स्वर से दूसरे तक चिकनी गति है।"
        },
        {
            type: "sequence", titleEn: "Meend Practice", titleHi: "मींड अभ्यास",
            sequence: ["C4", "D4", "E4", "E4", "F4", "G4", "G4", "A4", "B4", "C5"],
            indianSequence: ["Sa", "~Re", "~Ga", "Ga", "~Ma", "~Pa", "Pa", "~Dha", "~Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Meend Practiced! 🎉", titleHi: "मींड अभ्यास हुआ! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_8: Lesson = {
    id: "lesson-8", level: "intermediate",
    titleEn: "Komal (Flat) Notes", titleHi: "कोमल स्वर",
    steps: [
        {
            type: "intro", titleEn: "Understanding Komal Notes", titleHi: "कोमल स्वरों को समझना",
            contentEn: "Komal (flat) notes are Re, Ga, Dha, Ni played on black keys. They're essential for many ragas.", contentHi: "कोमल स्वर काली कुंजियों पर बजाए जाते हैं। कई रागों में आवश्यक हैं।"
        },
        {
            type: "demo", titleEn: "Komal Re (रे)", titleHi: "कोमल रे",
            note: "C#4", indianNote: "re (komal)", highlightKey: "C#4"
        },
        {
            type: "practice", titleEn: "Play Komal Re", titleHi: "कोमल रे बजाएं",
            expectedNote: "C#4", indianNote: "re", highlightKey: "C#4"
        },
        {
            type: "sequence", titleEn: "Scale with Komal Re", titleHi: "कोमल रे के साथ स्केल",
            sequence: ["C4", "C#4", "E4", "F4", "G4", "G#4", "B4", "C5"],
            indianSequence: ["Sa", "re", "Ga", "Ma", "Pa", "dha", "Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Komal Notes Learned! 🎉", titleHi: "कोमल स्वर सीखे! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_9: Lesson = {
    id: "lesson-9", level: "intermediate",
    titleEn: "Tivra Ma (Sharp Ma)", titleHi: "तीव्र म",
    steps: [
        {
            type: "intro", titleEn: "The Sharp Fourth", titleHi: "तीव्र चतुर्थ",
            contentEn: "Tivra Ma (sharp Ma) is crucial for ragas like Yaman. It's the black key between Ma and Pa.", contentHi: "तीव्र म यमन जैसे रागों के लिए महत्वपूर्ण है।"
        },
        {
            type: "demo", titleEn: "Tivra Ma", titleHi: "तीव्र म",
            note: "F#4", indianNote: "Ma#", highlightKey: "F#4"
        },
        {
            type: "practice", titleEn: "Play Tivra Ma", titleHi: "तीव्र म बजाएं",
            expectedNote: "F#4", indianNote: "Ma#", highlightKey: "F#4"
        },
        {
            type: "sequence", titleEn: "Scale with Tivra Ma", titleHi: "तीव्र म के साथ स्केल",
            sequence: ["C4", "D4", "E4", "F#4", "G4", "A4", "B4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Ma#", "Pa", "Dha", "Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Tivra Ma Mastered! 🎉", titleHi: "तीव्र म सीखा! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_10: Lesson = {
    id: "lesson-10", level: "intermediate",
    titleEn: "Chromatic Scale Practice", titleHi: "क्रोमैटिक स्केल अभ्यास",
    steps: [
        {
            type: "intro", titleEn: "All 12 Notes", titleHi: "सभी 12 स्वर",
            contentEn: "The chromatic scale includes all 12 notes - 7 shuddha and 5 vikrit (altered) notes.", contentHi: "क्रोमैटिक स्केल में सभी 12 स्वर शामिल हैं।"
        },
        {
            type: "sequence", titleEn: "Chromatic Ascending", titleHi: "क्रोमैटिक आरोह",
            sequence: ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5"],
            indianSequence: ["Sa", "re", "Re", "ga", "Ga", "Ma", "Ma#", "Pa", "dha", "Dha", "ni", "Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Chromatic Done! 🎉", titleHi: "क्रोमैटिक पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_11: Lesson = {
    id: "lesson-11", level: "intermediate",
    titleEn: "Raag Bhupali: Introduction", titleHi: "राग भूपाली: परिचय",
    steps: [
        {
            type: "intro", titleEn: "Your First Raga", titleHi: "आपका पहला राग",
            contentEn: "Raag Bhupali is a pentatonic raga using Sa Re Ga Pa Dha (no Ma, no Ni). It's peaceful and beginner-friendly.", contentHi: "राग भूपाली पांच स्वरों का राग है: सा रे ग प ध (म और नि नहीं)।"
        },
        {
            type: "sequence", titleEn: "Bhupali Aaroh", titleHi: "भूपाली आरोह",
            sequence: ["C4", "D4", "E4", "G4", "A4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Pa", "Dha", "Sa'"]
        },
        {
            type: "sequence", titleEn: "Bhupali Avroh", titleHi: "भूपाली अवरोह",
            sequence: ["C5", "A4", "G4", "E4", "D4", "C4"],
            indianSequence: ["Sa'", "Dha", "Pa", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Bhupali Started! 🎉", titleHi: "भूपाली शुरू! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_12: Lesson = {
    id: "lesson-12", level: "intermediate",
    titleEn: "Raag Bhupali: Pakad", titleHi: "राग भूपाली: पकड़",
    steps: [
        {
            type: "intro", titleEn: "Signature Phrase", titleHi: "विशिष्ट वाक्य",
            contentEn: "Pakad is the signature phrase of a raga. Bhupali's pakad: Ga Re Sa, Dha Pa Ga Re Sa.", contentHi: "पकड़ राग का विशिष्ट वाक्य है। भूपाली: ग रे सा, ध प ग रे सा।"
        },
        {
            type: "sequence", titleEn: "Bhupali Pakad", titleHi: "भूपाली पकड़",
            sequence: ["E4", "D4", "C4", "A4", "G4", "E4", "D4", "C4"],
            indianSequence: ["Ga", "Re", "Sa", "Dha", "Pa", "Ga", "Re", "Sa"]
        },
        {
            type: "sequence", titleEn: "Bhupali Phrase", titleHi: "भूपाली वाक्य",
            sequence: ["C4", "D4", "E4", "G4", "E4", "D4", "C4", "A4", "G4", "A4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Pa", "Ga", "Re", "Sa", "Dha", "Pa", "Dha", "Sa'"]
        },
        { type: "complete", titleEn: "Pakad Mastered! 🎉", titleHi: "पकड़ सीखी! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_13: Lesson = {
    id: "lesson-13", level: "intermediate",
    titleEn: "Raag Bhupali: Alankars", titleHi: "राग भूपाली: अलंकार",
    steps: [
        {
            type: "intro", titleEn: "Raga-Based Exercises", titleHi: "राग-आधारित अभ्यास",
            contentEn: "Practice alankars using only the notes of Bhupali (Sa Re Ga Pa Dha).", contentHi: "केवल भूपाली के स्वरों (सा रे ग प ध) का उपयोग करके अलंकार अभ्यास करें।"
        },
        {
            type: "sequence", titleEn: "Bhupali Alankar 1", titleHi: "भूपाली अलंकार 1",
            sequence: ["C4", "D4", "E4", "D4", "E4", "G4", "E4", "G4", "A4", "G4", "A4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Re", "Ga", "Pa", "Ga", "Pa", "Dha", "Pa", "Dha", "Sa'"]
        },
        { type: "complete", titleEn: "Bhupali Alankar Done! 🎉", titleHi: "भूपाली अलंकार पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_14: Lesson = {
    id: "lesson-14", level: "intermediate",
    titleEn: "Raag Bhupali: Simple Bandish", titleHi: "राग भूपाली: सरल बंदिश",
    steps: [
        {
            type: "intro", titleEn: "Playing a Composition", titleHi: "रचना बजाना",
            contentEn: "A bandish is a fixed composition. Let's learn a simple Bhupali phrase.", contentHi: "बंदिश एक निश्चित रचना है। आइए एक सरल भूपाली वाक्य सीखें।"
        },
        {
            type: "sequence", titleEn: "Bhupali Melody", titleHi: "भूपाली धुन",
            sequence: ["C4", "D4", "E4", "G4", "G4", "A4", "G4", "E4", "D4", "C4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Pa", "Pa", "Dha", "Pa", "Ga", "Re", "Sa", "Sa"]
        },
        { type: "complete", titleEn: "Bandish Learned! 🎉", titleHi: "बंदिश सीखी! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_15: Lesson = {
    id: "lesson-15", level: "intermediate",
    titleEn: "Raag Bhupali: Complete Practice", titleHi: "राग भूपाली: पूर्ण अभ्यास",
    steps: [
        {
            type: "intro", titleEn: "Putting It Together", titleHi: "सब एक साथ",
            contentEn: "Combine aaroh, avroh, pakad, and bandish for complete Bhupali practice.", contentHi: "आरोह, अवरोह, पकड़ और बंदिश को मिलाकर पूर्ण भूपाली अभ्यास करें।"
        },
        {
            type: "sequence", titleEn: "Full Bhupali", titleHi: "पूर्ण भूपाली",
            sequence: ["C4", "D4", "E4", "G4", "A4", "C5", "C5", "A4", "G4", "E4", "D4", "C4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Pa", "Dha", "Sa'", "Sa'", "Dha", "Pa", "Ga", "Re", "Sa", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Bhupali Complete! 🎉", titleHi: "भूपाली पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_16: Lesson = {
    id: "lesson-16", level: "intermediate",
    titleEn: "Teentaal Fundamentals", titleHi: "तीनताल की मूल बातें",
    steps: [
        {
            type: "intro", titleEn: "16-Beat Cycle", titleHi: "16 मात्रा का चक्र",
            contentEn: "Teentaal is the most important taal with 16 beats: 4+4+4+4. Sam falls on beat 1.", contentHi: "तीनताल सबसे महत्वपूर्ण ताल है: 16 मात्रा, 4+4+4+4।"
        },
        {
            type: "sequence", titleEn: "16-Note Scale", titleHi: "16 स्वर स्केल",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"]
        },
        { type: "complete", titleEn: "Teentaal Basics Done! 🎉", titleHi: "तीनताल मूल पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_17: Lesson = {
    id: "lesson-17", level: "intermediate",
    titleEn: "Playing Lehras", titleHi: "लहरा बजाना",
    steps: [
        {
            type: "intro", titleEn: "Melodic Accompaniment", titleHi: "स्वर संगत",
            contentEn: "A lehra is a melodic pattern that repeats for one taal cycle. It's used to accompany tabla.", contentHi: "लहरा एक स्वर पैटर्न है जो ताल चक्र में दोहराता है।"
        },
        {
            type: "sequence", titleEn: "Simple Lehra", titleHi: "सरल लहरा",
            sequence: ["C4", "D4", "E4", "F4", "E4", "D4", "C4", "D4", "E4", "F4", "G4", "F4", "E4", "D4", "E4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Ga", "Re", "Sa", "Re", "Ga", "Ma", "Pa", "Ma", "Ga", "Re", "Ga", "Sa"]
        },
        { type: "complete", titleEn: "Lehra Learned! 🎉", titleHi: "लहरा सीखा! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_18: Lesson = {
    id: "lesson-18", level: "intermediate",
    titleEn: "Roopak Taal (7 beats)", titleHi: "रूपक ताल (7 मात्रा)",
    steps: [
        {
            type: "intro", titleEn: "Asymmetric Rhythm", titleHi: "विषम लय",
            contentEn: "Roopak has 7 beats divided as 3+2+2. It's used in ghazals and many film songs.", contentHi: "रूपक में 7 मात्राएं हैं: 3+2+2। गज़लों और फिल्मी गानों में उपयोग होता है।"
        },
        {
            type: "sequence", titleEn: "7-Note Pattern", titleHi: "7 स्वर पैटर्न",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni"]
        },
        { type: "complete", titleEn: "Roopak Practiced! 🎉", titleHi: "रूपक अभ्यास हुआ! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_19: Lesson = {
    id: "lesson-19", level: "intermediate",
    titleEn: "Melody and Rhythm Integration", titleHi: "स्वर और लय का एकीकरण",
    steps: [
        {
            type: "intro", titleEn: "Coordinated Playing", titleHi: "समन्वित वादन",
            contentEn: "Combine melodic patterns with rhythmic awareness for musical expression.", contentHi: "संगीतमय अभिव्यक्ति के लिए स्वर पैटर्न को लय जागरूकता के साथ मिलाएं।"
        },
        {
            type: "sequence", titleEn: "Rhythmic Melody", titleHi: "लयबद्ध धुन",
            sequence: ["C4", "E4", "C4", "E4", "G4", "E4", "G4", "C5", "G4", "E4", "C4"],
            indianSequence: ["Sa", "Ga", "Sa", "Ga", "Pa", "Ga", "Pa", "Sa'", "Pa", "Ga", "Sa"]
        },
        { type: "complete", titleEn: "Integration Complete! 🎉", titleHi: "एकीकरण पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_INTERMEDIATE_20: Lesson = {
    id: "lesson-20", level: "intermediate",
    titleEn: "Intermediate Assessment", titleHi: "मध्यवर्ती मूल्यांकन",
    steps: [
        {
            type: "intro", titleEn: "Congratulations!", titleHi: "बधाई!",
            contentEn: "You've completed intermediate level! You know advanced alankars, techniques, Raag Bhupali, and multiple taals.", contentHi: "आपने मध्यवर्ती स्तर पूर्ण किया! उन्नत अलंकार, तकनीकें, राग भूपाली और ताल सीखे।"
        },
        {
            type: "sequence", titleEn: "Final Review", titleHi: "अंतिम समीक्षा",
            sequence: ["C4", "D4", "E4", "G4", "A4", "C5", "A4", "G4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Pa", "Dha", "Sa'", "Dha", "Pa", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Intermediate Complete! 🎉🏆", titleHi: "मध्यवर्ती पूर्ण! 🎉🏆" }
    ]
};

export const HARMONIUM_INTERMEDIATE_LESSONS: Lesson[] = [
    HARMONIUM_INTERMEDIATE_1, HARMONIUM_INTERMEDIATE_2, HARMONIUM_INTERMEDIATE_3,
    HARMONIUM_INTERMEDIATE_4, HARMONIUM_INTERMEDIATE_5, HARMONIUM_INTERMEDIATE_6,
    HARMONIUM_INTERMEDIATE_7, HARMONIUM_INTERMEDIATE_8, HARMONIUM_INTERMEDIATE_9,
    HARMONIUM_INTERMEDIATE_10, HARMONIUM_INTERMEDIATE_11, HARMONIUM_INTERMEDIATE_12,
    HARMONIUM_INTERMEDIATE_13, HARMONIUM_INTERMEDIATE_14, HARMONIUM_INTERMEDIATE_15,
    HARMONIUM_INTERMEDIATE_16, HARMONIUM_INTERMEDIATE_17, HARMONIUM_INTERMEDIATE_18,
    HARMONIUM_INTERMEDIATE_19, HARMONIUM_INTERMEDIATE_20
];
