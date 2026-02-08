/**
 * Advanced Harmonium Lessons (20 lessons)
 */

import { Lesson } from "./lesson-types";

// ===== ADVANCED LEVEL: 20 LESSONS =====

export const HARMONIUM_ADVANCED_1: Lesson = {
    id: "lesson-1", level: "advanced",
    titleEn: "Gamak Technique", titleHi: "गमक तकनीक",
    steps: [
        {
            type: "intro", titleEn: "Vibrato Oscillation", titleHi: "कंपन दोलन",
            contentEn: "Gamak is a rapid oscillation between notes, adding weight and emotion. It's fundamental to Indian classical expression.", contentHi: "गमक स्वरों के बीच तीव्र दोलन है, जो भार और भावना जोड़ता है।"
        },
        {
            type: "sequence", titleEn: "Gamak Practice", titleHi: "गमक अभ्यास",
            sequence: ["C4", "D4", "C4", "D4", "C4", "D4", "E4", "D4", "E4", "D4", "E4"],
            indianSequence: ["Sa~", "Re~", "Sa~", "Re~", "Sa~", "Re~", "Ga~", "Re~", "Ga~", "Re~", "Ga~"]
        },
        { type: "complete", titleEn: "Gamak Learned! 🎉", titleHi: "गमक सीखा! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_2: Lesson = {
    id: "lesson-2", level: "advanced",
    titleEn: "Murki Technique", titleHi: "मुर्की तकनीक",
    steps: [
        {
            type: "intro", titleEn: "Rapid Turns", titleHi: "तीव्र मोड़",
            contentEn: "Murki is a quick ornamental turn between 2-3 notes, adding sparkle to phrases.", contentHi: "मुर्की 2-3 स्वरों के बीच तीव्र अलंकृत मोड़ है।"
        },
        {
            type: "sequence", titleEn: "Murki Practice", titleHi: "मुर्की अभ्यास",
            sequence: ["C4", "D4", "C4", "E4", "D4", "E4", "F4", "E4", "G4"],
            indianSequence: ["Sa", "Re-Sa", "Ga", "Re-Ga", "Ma", "Ga-Ma", "Pa"]
        },
        { type: "complete", titleEn: "Murki Mastered! 🎉", titleHi: "मुर्की सीखी! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_3: Lesson = {
    id: "lesson-3", level: "advanced",
    titleEn: "Khatka Technique", titleHi: "खटका तकनीक",
    steps: [
        {
            type: "intro", titleEn: "Grace Note Clusters", titleHi: "अलंकृत स्वर समूह",
            contentEn: "Khatka is a sudden, forceful cluster of notes at high speed, creating emphasis.", contentHi: "खटका तीव्र गति से अचानक स्वर समूह है, जो जोर देता है।"
        },
        {
            type: "sequence", titleEn: "Khatka Practice", titleHi: "खटका अभ्यास",
            sequence: ["E4", "F4", "E4", "D4", "E4", "G4", "A4", "G4", "F4", "G4"],
            indianSequence: ["Ga", "Ma-Ga-Re-Ga", "Pa", "Dha-Pa-Ma-Pa"]
        },
        { type: "complete", titleEn: "Khatka Done! 🎉", titleHi: "खटका पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_4: Lesson = {
    id: "lesson-4", level: "advanced",
    titleEn: "Combined Ornamentations", titleHi: "संयुक्त अलंकरण",
    steps: [
        {
            type: "intro", titleEn: "Using Multiple Techniques", titleHi: "एकाधिक तकनीकों का उपयोग",
            contentEn: "Combine Kan Swar, Meend, Gamak, Murki, and Khatka for expressive playing.", contentHi: "अभिव्यंजक वादन के लिए सभी तकनीकों को मिलाएं।"
        },
        {
            type: "sequence", titleEn: "Combined Practice", titleHi: "संयुक्त अभ्यास",
            sequence: ["C4", "D4", "E4", "D4", "E4", "F4", "E4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "~Re", "Ga~", "Re", "Ga", "Ma-Ga", "~Pa", "Ma", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Ornaments Combined! 🎉", titleHi: "अलंकरण संयुक्त! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_5: Lesson = {
    id: "lesson-5", level: "advanced",
    titleEn: "Speed with Ornamentation", titleHi: "अलंकरण के साथ गति",
    steps: [
        {
            type: "intro", titleEn: "Fast Embellished Phrases", titleHi: "तेज़ अलंकृत वाक्य",
            contentEn: "Practice ornamentations at increasing speeds while maintaining clarity.", contentHi: "स्पष्टता बनाए रखते हुए बढ़ती गति से अलंकरण अभ्यास करें।"
        },
        {
            type: "sequence", titleEn: "Fast Ornaments", titleHi: "तेज़ अलंकार",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Speed Achieved! 🎉", titleHi: "गति प्राप्त! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_6: Lesson = {
    id: "lesson-6", level: "advanced",
    titleEn: "Raag Yaman: Complete Study", titleHi: "राग यमन: पूर्ण अध्ययन",
    steps: [
        {
            type: "intro", titleEn: "The Evening Raga", titleHi: "संध्या का राग",
            contentEn: "Raag Yaman uses Tivra Ma. Aaroh: Ni Re Ga Ma# Dha Ni Sa'. It evokes peace and devotion.", contentHi: "राग यमन में तीव्र म है। आरोह: नि रे ग म# ध नि सां।"
        },
        {
            type: "sequence", titleEn: "Yaman Aaroh", titleHi: "यमन आरोह",
            sequence: ["B3", "D4", "E4", "F#4", "A4", "B4", "C5"],
            indianSequence: ["Ni", "Re", "Ga", "Ma#", "Dha", "Ni", "Sa'"]
        },
        {
            type: "sequence", titleEn: "Yaman Avroh", titleHi: "यमन अवरोह",
            sequence: ["C5", "B4", "A4", "G4", "F#4", "E4", "D4", "C4"],
            indianSequence: ["Sa'", "Ni", "Dha", "Pa", "Ma#", "Ga", "Re", "Sa"]
        },
        {
            type: "sequence", titleEn: "Yaman Pakad", titleHi: "यमन पकड़",
            sequence: ["B3", "D4", "E4", "F#4", "E4", "D4", "C4"],
            indianSequence: ["Ni", "Re", "Ga", "Ma#", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Yaman Learned! 🎉", titleHi: "यमन सीखा! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_7: Lesson = {
    id: "lesson-7", level: "advanced",
    titleEn: "Raag Yaman: Alankars", titleHi: "राग यमन: अलंकार",
    steps: [
        {
            type: "intro", titleEn: "Yaman-Based Exercises", titleHi: "यमन-आधारित अभ्यास",
            contentEn: "Practice alankars using Yaman's notes with Tivra Ma.", contentHi: "तीव्र म के साथ यमन के स्वरों का अलंकार अभ्यास करें।"
        },
        {
            type: "sequence", titleEn: "Yaman Alankar 1", titleHi: "यमन अलंकार 1",
            sequence: ["C4", "D4", "E4", "D4", "E4", "F#4", "E4", "F#4", "A4", "F#4", "A4", "B4", "A4", "B4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Re", "Ga", "Ma#", "Ga", "Ma#", "Dha", "Ma#", "Dha", "Ni", "Dha", "Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Yaman Alankar Done! 🎉", titleHi: "यमन अलंकार पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_8: Lesson = {
    id: "lesson-8", level: "advanced",
    titleEn: "Raag Bhairav: Introduction", titleHi: "राग भैरव: परिचय",
    steps: [
        {
            type: "intro", titleEn: "The Morning Raga", titleHi: "प्रातःकालीन राग",
            contentEn: "Raag Bhairav uses Komal Re and Komal Dha. It's a profound, serious morning raga.", contentHi: "राग भैरव में कोमल रे और कोमल ध हैं। यह गंभीर प्रातःकालीन राग है।"
        },
        {
            type: "sequence", titleEn: "Bhairav Aaroh", titleHi: "भैरव आरोह",
            sequence: ["C4", "C#4", "E4", "F4", "G4", "G#4", "B4", "C5"],
            indianSequence: ["Sa", "re", "Ga", "Ma", "Pa", "dha", "Ni", "Sa'"]
        },
        {
            type: "sequence", titleEn: "Bhairav Avroh", titleHi: "भैरव अवरोह",
            sequence: ["C5", "B4", "G#4", "G4", "F4", "E4", "C#4", "C4"],
            indianSequence: ["Sa'", "Ni", "dha", "Pa", "Ma", "Ga", "re", "Sa"]
        },
        { type: "complete", titleEn: "Bhairav Started! 🎉", titleHi: "भैरव शुरू! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_9: Lesson = {
    id: "lesson-9", level: "advanced",
    titleEn: "Raag Bhairav: Phrases", titleHi: "राग भैरव: वाक्य",
    steps: [
        {
            type: "intro", titleEn: "Characteristic Movements", titleHi: "विशिष्ट चलन",
            contentEn: "Learn Bhairav's unique melodic movements and Pakad.", contentHi: "भैरव के अनूठे स्वर चलन और पकड़ सीखें।"
        },
        {
            type: "sequence", titleEn: "Bhairav Pakad", titleHi: "भैरव पकड़",
            sequence: ["G4", "F4", "E4", "C#4", "C4", "C#4", "E4", "G4", "G#4", "G4"],
            indianSequence: ["Pa", "Ma", "Ga", "re", "Sa", "re", "Ga", "Pa", "dha", "Pa"]
        },
        { type: "complete", titleEn: "Bhairav Phrases Done! 🎉", titleHi: "भैरव वाक्य पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_10: Lesson = {
    id: "lesson-10", level: "advanced",
    titleEn: "Raag Kafi: Introduction", titleHi: "राग काफी: परिचय",
    steps: [
        {
            type: "intro", titleEn: "Folk-Influenced Raga", titleHi: "लोक-प्रभावित राग",
            contentEn: "Raag Kafi uses Komal Ga and Komal Ni. It's cheerful and used in many folk songs.", contentHi: "राग काफी में कोमल ग और कोमल नि हैं। यह खुशमिजाज़ और लोक गीतों में प्रयुक्त है।"
        },
        {
            type: "sequence", titleEn: "Kafi Aaroh", titleHi: "काफी आरोह",
            sequence: ["C4", "D4", "D#4", "F4", "G4", "A4", "A#4", "C5"],
            indianSequence: ["Sa", "Re", "ga", "Ma", "Pa", "Dha", "ni", "Sa'"]
        },
        {
            type: "sequence", titleEn: "Kafi Avroh", titleHi: "काफी अवरोह",
            sequence: ["C5", "A#4", "A4", "G4", "F4", "D#4", "D4", "C4"],
            indianSequence: ["Sa'", "ni", "Dha", "Pa", "Ma", "ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Kafi Introduced! 🎉", titleHi: "काफी परिचय पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_11: Lesson = {
    id: "lesson-11", level: "advanced",
    titleEn: "Raag Bhairavi: Complete", titleHi: "राग भैरवी: पूर्ण",
    steps: [
        {
            type: "intro", titleEn: "The Universal Raga", titleHi: "सार्वभौमिक राग",
            contentEn: "Bhairavi uses Komal Re, Ga, Dha, Ni. It's versatile and often concludes concerts.", contentHi: "भैरवी में कोमल रे, ग, ध, नि हैं। बहुमुखी और प्रायः कार्यक्रम समापन में प्रयुक्त।"
        },
        {
            type: "sequence", titleEn: "Bhairavi Aaroh", titleHi: "भैरवी आरोह",
            sequence: ["C4", "C#4", "D#4", "F4", "G4", "G#4", "A#4", "C5"],
            indianSequence: ["Sa", "re", "ga", "Ma", "Pa", "dha", "ni", "Sa'"]
        },
        {
            type: "sequence", titleEn: "Bhairavi Avroh", titleHi: "भैरवी अवरोह",
            sequence: ["C5", "A#4", "G#4", "G4", "F4", "D#4", "C#4", "C4"],
            indianSequence: ["Sa'", "ni", "dha", "Pa", "Ma", "ga", "re", "Sa"]
        },
        { type: "complete", titleEn: "Bhairavi Learned! 🎉", titleHi: "भैरवी सीखी! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_12: Lesson = {
    id: "lesson-12", level: "advanced",
    titleEn: "Raag Khamaj: Introduction", titleHi: "राग खमाज: परिचय",
    steps: [
        {
            type: "intro", titleEn: "Light Classical Raga", titleHi: "उप-शास्त्रीय राग",
            contentEn: "Khamaj uses Komal Ni in descent. It's graceful and used in thumri and light music.", contentHi: "खमाज में अवरोह में कोमल नि है। सुंदर और ठुमरी में प्रयुक्त।"
        },
        {
            type: "sequence", titleEn: "Khamaj Aaroh", titleHi: "खमाज आरोह",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'"]
        },
        {
            type: "sequence", titleEn: "Khamaj Avroh", titleHi: "खमाज अवरोह",
            sequence: ["C5", "A#4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["Sa'", "ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Khamaj Introduced! 🎉", titleHi: "खमाज परिचय पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_13: Lesson = {
    id: "lesson-13", level: "advanced",
    titleEn: "Shuddha Taan", titleHi: "शुद्ध तान",
    steps: [
        {
            type: "intro", titleEn: "Pure Fast Runs", titleHi: "शुद्ध तीव्र स्वर",
            contentEn: "Shuddha Taan uses pure ascending/descending patterns at high speed.", contentHi: "शुद्ध तान में उच्च गति पर शुद्ध आरोह/अवरोह पैटर्न हैं।"
        },
        {
            type: "sequence", titleEn: "Shuddha Taan Practice", titleHi: "शुद्ध तान अभ्यास",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'", "Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Shuddha Taan Done! 🎉", titleHi: "शुद्ध तान पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_14: Lesson = {
    id: "lesson-14", level: "advanced",
    titleEn: "Vakra Taan", titleHi: "वक्र तान",
    steps: [
        {
            type: "intro", titleEn: "Curved Fast Runs", titleHi: "वक्र तीव्र स्वर",
            contentEn: "Vakra Taan has curved, zigzag movements at fast tempo.", contentHi: "वक्र तान में तीव्र गति पर टेढ़े-मेढ़े पैटर्न हैं।"
        },
        {
            type: "sequence", titleEn: "Vakra Taan Practice", titleHi: "वक्र तान अभ्यास",
            sequence: ["C4", "D4", "E4", "D4", "E4", "F4", "E4", "F4", "G4", "F4", "G4", "A4", "G4", "A4", "B4", "A4", "B4", "C5"],
            indianSequence: ["Sa", "Re", "Ga", "Re", "Ga", "Ma", "Ga", "Ma", "Pa", "Ma", "Pa", "Dha", "Pa", "Dha", "Ni", "Dha", "Ni", "Sa'"]
        },
        { type: "complete", titleEn: "Vakra Taan Done! 🎉", titleHi: "वक्र तान पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_15: Lesson = {
    id: "lesson-15", level: "advanced",
    titleEn: "Koot Taan", titleHi: "कूट तान",
    steps: [
        {
            type: "intro", titleEn: "Complex Mixed Patterns", titleHi: "जटिल मिश्रित पैटर्न",
            contentEn: "Koot Taan involves complex permutations of notes at high speed.", contentHi: "कूट तान में उच्च गति पर जटिल स्वर क्रमबद्ध हैं।"
        },
        {
            type: "sequence", titleEn: "Koot Taan Practice", titleHi: "कूट तान अभ्यास",
            sequence: ["C4", "E4", "D4", "F4", "E4", "G4", "F4", "A4", "G4", "B4", "A4", "C5"],
            indianSequence: ["Sa", "Ga", "Re", "Ma", "Ga", "Pa", "Ma", "Dha", "Pa", "Ni", "Dha", "Sa'"]
        },
        { type: "complete", titleEn: "Koot Taan Done! 🎉", titleHi: "कूट तान पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_16: Lesson = {
    id: "lesson-16", level: "advanced",
    titleEn: "Taan in Raga Context", titleHi: "राग में तान",
    steps: [
        {
            type: "intro", titleEn: "Raag-Based Taans", titleHi: "राग-आधारित तान",
            contentEn: "Practice taans within the framework of a raga, following its rules.", contentHi: "राग के नियमों के अनुसार तान का अभ्यास करें।"
        },
        {
            type: "sequence", titleEn: "Yaman Taan", titleHi: "यमन तान",
            sequence: ["C4", "D4", "E4", "F#4", "G4", "A4", "B4", "C5", "B4", "A4", "G4", "F#4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma#", "Pa", "Dha", "Ni", "Sa'", "Ni", "Dha", "Pa", "Ma#", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Raga Taan Done! 🎉", titleHi: "राग तान पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_17: Lesson = {
    id: "lesson-17", level: "advanced",
    titleEn: "Jhaptaal Integration", titleHi: "झपताल एकीकरण",
    steps: [
        {
            type: "intro", titleEn: "10-Beat Complex Cycle", titleHi: "10 मात्रा का जटिल चक्र",
            contentEn: "Jhaptaal has 10 beats (2+3+2+3). It's challenging and used in classical performances.", contentHi: "झपताल में 10 मात्राएं हैं (2+3+2+3)। शास्त्रीय प्रदर्शनों में प्रयुक्त।"
        },
        {
            type: "sequence", titleEn: "10-Beat Pattern", titleHi: "10 मात्रा पैटर्न",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "B4", "A4"],
            indianSequence: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
        { type: "complete", titleEn: "Jhaptaal Done! 🎉", titleHi: "झपताल पूर्ण! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_18: Lesson = {
    id: "lesson-18", level: "advanced",
    titleEn: "Improvisation Basics", titleHi: "आशुरचना की मूल बातें",
    steps: [
        {
            type: "intro", titleEn: "Creative Exploration", titleHi: "रचनात्मक अन्वेषण",
            contentEn: "Learn to improvise within raga rules, creating your own melodic phrases.", contentHi: "राग नियमों के भीतर आशुरचना करना सीखें।"
        },
        {
            type: "sequence", titleEn: "Free Exploration", titleHi: "स्वतंत्र अन्वेषण",
            sequence: ["C4", "E4", "G4", "E4", "C5", "G4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Ga", "Pa", "Ga", "Sa'", "Pa", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Improvisation Started! 🎉", titleHi: "आशुरचना शुरू! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_19: Lesson = {
    id: "lesson-19", level: "advanced",
    titleEn: "Performance Preparation", titleHi: "प्रदर्शन तैयारी",
    steps: [
        {
            type: "intro", titleEn: "Stage Readiness", titleHi: "मंच तैयारी",
            contentEn: "Prepare for extended performances with stamina and repertoire building.", contentHi: "सहनशक्ति और प्रदर्शनों के लिए तैयार हों।"
        },
        {
            type: "sequence", titleEn: "Performance Piece", titleHi: "प्रदर्शन टुकड़ा",
            sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"],
            indianSequence: ["Sa", "Re", "Ga", "Ma", "Pa", "Dha", "Ni", "Sa'", "Ni", "Dha", "Pa", "Ma", "Ga", "Re", "Sa"]
        },
        { type: "complete", titleEn: "Performance Ready! 🎉", titleHi: "प्रदर्शन तैयार! 🎉" }
    ]
};

export const HARMONIUM_ADVANCED_20: Lesson = {
    id: "lesson-20", level: "advanced",
    titleEn: "Advanced Assessment - Mastery", titleHi: "उन्नत मूल्यांकन - महारत",
    steps: [
        {
            type: "intro", titleEn: "Congratulations, Master!", titleHi: "बधाई, उस्ताद!",
            contentEn: "You've completed the advanced curriculum! You know ornamentations, multiple ragas, taans, and complex taals.", contentHi: "आपने उन्नत पाठ्यक्रम पूर्ण किया! अलंकरण, कई राग, तान और जटिल ताल सीखे।"
        },
        {
            type: "sequence", titleEn: "Final Demonstration", titleHi: "अंतिम प्रदर्शन",
            sequence: ["B3", "D4", "E4", "F#4", "A4", "B4", "C5", "B4", "A4", "F#4", "E4", "D4", "C4"],
            indianSequence: ["Ni", "Re", "Ga", "Ma#", "Dha", "Ni", "Sa'", "Ni", "Dha", "Ma#", "Ga", "Re", "Sa"]
        },
        {
            type: "complete", titleEn: "MASTERY ACHIEVED! 🎉🏆🎹", titleHi: "महारत प्राप्त! 🎉🏆🎹",
            contentEn: "You are now a skilled harmonium player! Continue practicing and exploring new ragas.", contentHi: "अब आप कुशल हारमोनियम वादक हैं! अभ्यास और नए रागों का अन्वेषण जारी रखें।"
        }
    ]
};

export const HARMONIUM_ADVANCED_LESSONS: Lesson[] = [
    HARMONIUM_ADVANCED_1, HARMONIUM_ADVANCED_2, HARMONIUM_ADVANCED_3,
    HARMONIUM_ADVANCED_4, HARMONIUM_ADVANCED_5, HARMONIUM_ADVANCED_6,
    HARMONIUM_ADVANCED_7, HARMONIUM_ADVANCED_8, HARMONIUM_ADVANCED_9,
    HARMONIUM_ADVANCED_10, HARMONIUM_ADVANCED_11, HARMONIUM_ADVANCED_12,
    HARMONIUM_ADVANCED_13, HARMONIUM_ADVANCED_14, HARMONIUM_ADVANCED_15,
    HARMONIUM_ADVANCED_16, HARMONIUM_ADVANCED_17, HARMONIUM_ADVANCED_18,
    HARMONIUM_ADVANCED_19, HARMONIUM_ADVANCED_20
];
