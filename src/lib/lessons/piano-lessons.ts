/**
 * Comprehensive Piano Lessons - Beginner Level (20 Lessons)
 */

import { Lesson } from "./lesson-types";

export const PIANO_BEGINNER_1: Lesson = {
    id: "lesson-1", level: "beginner",
    titleEn: "Introduction to Piano & Middle C", titleHi: "पियानो और मिडल सी का परिचय",
    steps: [
        { type: "intro", titleEn: "Welcome to Piano!", titleHi: "पियानो में आपका स्वागत है!", contentEn: "The piano has 88 keys — white and black. We'll start with Middle C, the most important reference point.", contentHi: "पियानो में 88 कुंजियाँ हैं। हम मिडल सी से शुरू करेंगे।" },
        { type: "demo", titleEn: "Find Middle C", titleHi: "मिडल सी खोजें", note: "C4", highlightKey: "C4", contentEn: "Middle C is in the center of the keyboard. Find the group of two black keys and press the white key just to the left.", contentHi: "मिडल सी कीबोर्ड के केंद्र में है।" },
        { type: "practice", titleEn: "Play Middle C", titleHi: "मिडल सी बजाएं", expectedNote: "C4", highlightKey: "C4" },
        { type: "sequence", titleEn: "Play C Three Times", titleHi: "तीन बार सी बजाएं", sequence: ["C4", "C4", "C4"], indianSequence: ["C", "C", "C"] },
        { type: "complete", titleEn: "Great Start! 🎉", titleHi: "शानदार शुरुआत! 🎉", contentEn: "You've found Middle C — the foundation of piano playing!", contentHi: "आपने मिडल सी खोज ली!" }
    ]
};

export const PIANO_BEGINNER_2: Lesson = {
    id: "lesson-2", level: "beginner",
    titleEn: "Playing D and E", titleHi: "डी और ई बजाना",
    steps: [
        { type: "intro", titleEn: "Two New Notes", titleHi: "दो नए नोट्स", contentEn: "D is the next white key to the right of C, and E is one more step up. Use your index and middle fingers.", contentHi: "डी सी के दाएं और ई उसके दाएं है।" },
        { type: "demo", titleEn: "Watch: D", titleHi: "देखें: डी", note: "D4", highlightKey: "D4" },
        { type: "practice", titleEn: "Play D", titleHi: "डी बजाएं", expectedNote: "D4", highlightKey: "D4" },
        { type: "demo", titleEn: "Watch: E", titleHi: "देखें: ई", note: "E4", highlightKey: "E4" },
        { type: "practice", titleEn: "Play E", titleHi: "ई बजाएं", expectedNote: "E4", highlightKey: "E4" },
        { type: "sequence", titleEn: "Play: C D E", titleHi: "बजाएं: सी डी ई", sequence: ["C4", "D4", "E4"], indianSequence: ["C", "D", "E"] },
        { type: "complete", titleEn: "Excellent! 🎉", titleHi: "उत्कृष्ट! 🎉" }
    ]
};

export const PIANO_BEGINNER_3: Lesson = {
    id: "lesson-3", level: "beginner",
    titleEn: "Playing F and G", titleHi: "एफ और जी बजाना",
    steps: [
        { type: "intro", titleEn: "Two More Notes", titleHi: "दो और नोट्स", contentEn: "F and G complete the first five notes. Use your thumb on C, pinky on G for the 5-finger position.", contentHi: "एफ और जी पहले पांच नोट्स पूरे करते हैं।" },
        { type: "demo", titleEn: "Watch: F", titleHi: "देखें: एफ", note: "F4", highlightKey: "F4" },
        { type: "practice", titleEn: "Play F", titleHi: "एफ बजाएं", expectedNote: "F4", highlightKey: "F4" },
        { type: "demo", titleEn: "Watch: G", titleHi: "देखें: जी", note: "G4", highlightKey: "G4" },
        { type: "practice", titleEn: "Play G", titleHi: "जी बजाएं", expectedNote: "G4", highlightKey: "G4" },
        { type: "sequence", titleEn: "Play: C D E F G", titleHi: "बजाएं: सी डी ई एफ जी", sequence: ["C4", "D4", "E4", "F4", "G4"], indianSequence: ["C", "D", "E", "F", "G"] },
        { type: "complete", titleEn: "Well Done! 🎉", titleHi: "शाबाश! 🎉" }
    ]
};

export const PIANO_BEGINNER_4: Lesson = {
    id: "lesson-4", level: "beginner",
    titleEn: "Playing A and B", titleHi: "ए और बी बजाना",
    steps: [
        { type: "intro", titleEn: "Upper Notes", titleHi: "ऊपर के नोट्स", contentEn: "A and B complete all the white keys before the next C. These seven notes form the C Major scale.", contentHi: "ए और बी अगले सी से पहले सभी सफेद कुंजियाँ पूर्ण करते हैं।" },
        { type: "demo", titleEn: "Watch: A", titleHi: "देखें: ए", note: "A4", highlightKey: "A4" },
        { type: "practice", titleEn: "Play A", titleHi: "ए बजाएं", expectedNote: "A4", highlightKey: "A4" },
        { type: "demo", titleEn: "Watch: B", titleHi: "देखें: बी", note: "B4", highlightKey: "B4" },
        { type: "practice", titleEn: "Play B", titleHi: "बी बजाएं", expectedNote: "B4", highlightKey: "B4" },
        { type: "sequence", titleEn: "Play: A B C (High)", titleHi: "बजाएं: ए बी सी", sequence: ["A4", "B4", "C5"], indianSequence: ["A", "B", "C'"] },
        { type: "complete", titleEn: "Wonderful! 🎉", titleHi: "अद्भुत! 🎉" }
    ]
};

export const PIANO_BEGINNER_5: Lesson = {
    id: "lesson-5", level: "beginner",
    titleEn: "C Major Five-Finger Position", titleHi: "सी मेजर पांच-उंगली स्थिति",
    steps: [
        { type: "intro", titleEn: "5-Finger Position", titleHi: "5-उंगली स्थिति", contentEn: "Place your right hand thumb on C, each finger on the next white key up to G. This is the C position.", contentHi: "अपने दाएं हाथ का अंगूठा सी पर रखें, हर उंगली अगली सफेद कुंजी पर जी तक।" },
        { type: "sequence", titleEn: "5-Finger Ascending", titleHi: "5-उंगली आरोह", sequence: ["C4", "D4", "E4", "F4", "G4"], indianSequence: ["1", "2", "3", "4", "5"] },
        { type: "sequence", titleEn: "5-Finger Descending", titleHi: "5-उंगली अवरोह", sequence: ["G4", "F4", "E4", "D4", "C4"], indianSequence: ["5", "4", "3", "2", "1"] },
        { type: "sequence", titleEn: "Up and Down", titleHi: "ऊपर और नीचे", sequence: ["C4", "D4", "E4", "F4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["1", "2", "3", "4", "5", "4", "3", "2", "1"] },
        { type: "complete", titleEn: "Position Mastered! 🎉", titleHi: "स्थिति सीखी! 🎉" }
    ]
};

export const PIANO_BEGINNER_6: Lesson = {
    id: "lesson-6", level: "beginner",
    titleEn: "Complete C Major Scale Up", titleHi: "पूर्ण सी मेजर स्केल आरोह",
    steps: [
        { type: "intro", titleEn: "Full Scale Ascending", titleHi: "पूर्ण स्केल आरोह", contentEn: "The C Major scale has 8 notes: C D E F G A B C. When you reach G with your pinky, cross your thumb under to play A.", contentHi: "सी मेजर स्केल में 8 नोट्स हैं: सी डी ई एफ जी ए बी सी।" },
        { type: "sequence", titleEn: "C Major Scale Up", titleHi: "सी मेजर स्केल ऊपर", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C'"] },
        { type: "complete", titleEn: "Scale Up Done! 🎉", titleHi: "स्केल आरोह पूर्ण! 🎉" }
    ]
};

export const PIANO_BEGINNER_7: Lesson = {
    id: "lesson-7", level: "beginner",
    titleEn: "C Major Scale Down", titleHi: "सी मेजर स्केल अवरोह",
    steps: [
        { type: "intro", titleEn: "Full Scale Descending", titleHi: "पूर्ण स्केल अवरोह", contentEn: "Now play the scale coming back down. Start from high C and walk back to Middle C.", contentHi: "अब स्केल नीचे की ओर बजाएं।" },
        { type: "sequence", titleEn: "C Major Scale Down", titleHi: "सी मेजर स्केल नीचे", sequence: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["C'", "B", "A", "G", "F", "E", "D", "C"] },
        { type: "complete", titleEn: "Scale Down Done! 🎉", titleHi: "स्केल अवरोह पूर्ण! 🎉" }
    ]
};

export const PIANO_BEGINNER_8: Lesson = {
    id: "lesson-8", level: "beginner",
    titleEn: "C Major Scale Up & Down", titleHi: "सी मेजर स्केल ऊपर और नीचे",
    steps: [
        { type: "intro", titleEn: "Full Round Trip", titleHi: "पूर्ण चक्र", contentEn: "Combine ascending and descending in one smooth motion. Focus on even tempo.", contentHi: "आरोह और अवरोह को एक चिकनी गति में मिलाएं।" },
        { type: "sequence", titleEn: "Scale Up & Down", titleHi: "स्केल ऊपर और नीचे", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C'", "B", "A", "G", "F", "E", "D", "C"] },
        { type: "complete", titleEn: "Full Scale Mastered! 🎉", titleHi: "पूर्ण स्केल सीखा! 🎉" }
    ]
};

export const PIANO_BEGINNER_9: Lesson = {
    id: "lesson-9", level: "beginner",
    titleEn: "Two-Note Patterns (Seconds)", titleHi: "दो-नोट पैटर्न (सेकंड)",
    steps: [
        { type: "intro", titleEn: "Step-wise Intervals", titleHi: "क्रमिक अंतराल", contentEn: "Seconds are notes right next to each other. Practice moving up in pairs: C-D, D-E, E-F, etc.", contentHi: "सेकंड एक-दूसरे के बगल वाले नोट्स हैं।" },
        { type: "sequence", titleEn: "Ascending Seconds", titleHi: "आरोही सेकंड", sequence: ["C4", "D4", "D4", "E4", "E4", "F4", "F4", "G4", "G4", "A4", "A4", "B4", "B4", "C5"], indianSequence: ["C-D", "D-E", "E-F", "F-G", "G-A", "A-B", "B-C'"] },
        { type: "sequence", titleEn: "Descending Seconds", titleHi: "अवरोही सेकंड", sequence: ["C5", "B4", "B4", "A4", "A4", "G4", "G4", "F4", "F4", "E4", "E4", "D4", "D4", "C4"], indianSequence: ["C'-B", "B-A", "A-G", "G-F", "F-E", "E-D", "D-C"] },
        { type: "complete", titleEn: "Seconds Done! 🎉", titleHi: "सेकंड पूर्ण! 🎉" }
    ]
};

export const PIANO_BEGINNER_10: Lesson = {
    id: "lesson-10", level: "beginner",
    titleEn: "Three-Note Patterns (Thirds)", titleHi: "तीन-नोट पैटर्न (थर्ड)",
    steps: [
        { type: "intro", titleEn: "Skip-Note Intervals", titleHi: "छलांग अंतराल", contentEn: "Thirds skip one note: C-E, D-F, E-G. This interval is the building block of chords.", contentHi: "थर्ड एक नोट छोड़ते हैं: सी-ई, डी-एफ। यह कॉर्ड की नींव है।" },
        { type: "sequence", titleEn: "Ascending Thirds", titleHi: "आरोही थर्ड", sequence: ["C4", "E4", "D4", "F4", "E4", "G4", "F4", "A4", "G4", "B4", "A4", "C5"], indianSequence: ["C-E", "D-F", "E-G", "F-A", "G-B", "A-C'"] },
        { type: "sequence", titleEn: "Descending Thirds", titleHi: "अवरोही थर्ड", sequence: ["C5", "A4", "B4", "G4", "A4", "F4", "G4", "E4", "F4", "D4", "E4", "C4"], indianSequence: ["C'-A", "B-G", "A-F", "G-E", "F-D", "E-C"] },
        { type: "complete", titleEn: "Thirds Mastered! 🎉", titleHi: "थर्ड सीखे! 🎉" }
    ]
};

export const PIANO_BEGINNER_11: Lesson = {
    id: "lesson-11", level: "beginner",
    titleEn: "Four-Note Group Patterns", titleHi: "चार-नोट समूह पैटर्न",
    steps: [
        { type: "intro", titleEn: "Building Longer Phrases", titleHi: "लंबे वाक्य बनाना", contentEn: "Play groups of four notes moving up the scale. This builds finger independence and speed.", contentHi: "स्केल पर चार-चार नोट्स के समूह बजाएं।" },
        { type: "sequence", titleEn: "Four-Note Groups Up", titleHi: "चार-नोट समूह ऊपर", sequence: ["C4", "D4", "E4", "F4", "D4", "E4", "F4", "G4", "E4", "F4", "G4", "A4", "F4", "G4", "A4", "B4", "G4", "A4", "B4", "C5"], indianSequence: ["C-D-E-F", "D-E-F-G", "E-F-G-A", "F-G-A-B", "G-A-B-C'"] },
        { type: "complete", titleEn: "Patterns Done! 🎉", titleHi: "पैटर्न पूर्ण! 🎉" }
    ]
};

export const PIANO_BEGINNER_12: Lesson = {
    id: "lesson-12", level: "beginner",
    titleEn: "Simple Rhythm Exercises", titleHi: "सरल ताल अभ्यास",
    steps: [
        { type: "intro", titleEn: "Quarter & Half Notes", titleHi: "चौथाई और आधे नोट्स", contentEn: "Music has rhythm! Quarter notes get 1 beat, half notes get 2 beats. Practice holding some notes longer.", contentHi: "संगीत में ताल है! चौथाई नोट्स 1 बीट, आधे नोट्स 2 बीट।" },
        { type: "sequence", titleEn: "Rhythmic Scale", titleHi: "लयबद्ध स्केल", sequence: ["C4", "C4", "D4", "D4", "E4", "E4", "F4", "F4", "G4", "G4", "A4", "A4", "B4", "B4", "C5"], indianSequence: ["C", "C", "D", "D", "E", "E", "F", "F", "G", "G", "A", "A", "B", "B", "C'"] },
        { type: "sequence", titleEn: "March Rhythm", titleHi: "मार्च ताल", sequence: ["C4", "E4", "C4", "E4", "G4", "G4", "C4", "E4", "C4", "E4", "G4", "G4"], indianSequence: ["C", "E", "C", "E", "G", "G", "C", "E", "C", "E", "G", "G"] },
        { type: "complete", titleEn: "Rhythm Learned! 🎉", titleHi: "ताल सीखी! 🎉" }
    ]
};

export const PIANO_BEGINNER_13: Lesson = {
    id: "lesson-13", level: "beginner",
    titleEn: "C Major Chord", titleHi: "सी मेजर कॉर्ड",
    steps: [
        { type: "intro", titleEn: "Your First Chord", titleHi: "आपका पहला कॉर्ड", contentEn: "A chord is three or more notes played together. C Major = C + E + G. Play them one at a time first.", contentHi: "कॉर्ड तीन या अधिक नोट्स एक साथ बजाना है। सी मेजर = सी + ई + जी।" },
        { type: "demo", titleEn: "C Major Chord", titleHi: "सी मेजर कॉर्ड", note: "C4", highlightKey: "C4", contentEn: "Play C, E, and G one after another, then try pressing them at the same time.", contentHi: "सी, ई और जी एक के बाद एक बजाएं।" },
        { type: "sequence", titleEn: "C Chord Notes", titleHi: "सी कॉर्ड नोट्स", sequence: ["C4", "E4", "G4"], indianSequence: ["C", "E", "G"] },
        { type: "sequence", titleEn: "C Chord Pattern", titleHi: "सी कॉर्ड पैटर्न", sequence: ["C4", "E4", "G4", "G4", "E4", "C4"], indianSequence: ["C", "E", "G", "G", "E", "C"] },
        { type: "complete", titleEn: "First Chord Learned! 🎉", titleHi: "पहला कॉर्ड सीखा! 🎉" }
    ]
};

export const PIANO_BEGINNER_14: Lesson = {
    id: "lesson-14", level: "beginner",
    titleEn: "G Major Chord", titleHi: "जी मेजर कॉर्ड",
    steps: [
        { type: "intro", titleEn: "Second Chord", titleHi: "दूसरा कॉर्ड", contentEn: "G Major = G + B + D. This chord naturally follows C major in many songs.", contentHi: "जी मेजर = जी + बी + डी। यह कॉर्ड कई गानों में सी मेजर के बाद आता है।" },
        { type: "sequence", titleEn: "G Chord Notes", titleHi: "जी कॉर्ड नोट्स", sequence: ["G4", "B4", "D5"], indianSequence: ["G", "B", "D'"] },
        { type: "sequence", titleEn: "C to G Chord", titleHi: "सी से जी कॉर्ड", sequence: ["C4", "E4", "G4", "G4", "B4", "D5"], indianSequence: ["C chord", "→", "→", "G chord", "→", "→"] },
        { type: "complete", titleEn: "G Chord Done! 🎉", titleHi: "जी कॉर्ड पूर्ण! 🎉" }
    ]
};

export const PIANO_BEGINNER_15: Lesson = {
    id: "lesson-15", level: "beginner",
    titleEn: "F Major Chord", titleHi: "एफ मेजर कॉर्ड",
    steps: [
        { type: "intro", titleEn: "Third Essential Chord", titleHi: "तीसरा आवश्यक कॉर्ड", contentEn: "F Major = F + A + C. Together C, F, and G are the I-IV-V chords — the backbone of Western music.", contentHi: "एफ मेजर = एफ + ए + सी। सी, एफ, जी मिलकर I-IV-V कॉर्ड बनाते हैं।" },
        { type: "sequence", titleEn: "F Chord Notes", titleHi: "एफ कॉर्ड नोट्स", sequence: ["F4", "A4", "C5"], indianSequence: ["F", "A", "C'"] },
        { type: "sequence", titleEn: "C to F Chord", titleHi: "सी से एफ कॉर्ड", sequence: ["C4", "E4", "G4", "F4", "A4", "C5"], indianSequence: ["C chord", "→", "→", "F chord", "→", "→"] },
        { type: "complete", titleEn: "F Chord Learned! 🎉", titleHi: "एफ कॉर्ड सीखा! 🎉" }
    ]
};

export const PIANO_BEGINNER_16: Lesson = {
    id: "lesson-16", level: "beginner",
    titleEn: "Chord Progression: C-F-G-C", titleHi: "कॉर्ड प्रोग्रेशन: सी-एफ-जी-सी",
    steps: [
        { type: "intro", titleEn: "Your First Progression", titleHi: "आपकी पहली प्रोग्रेशन", contentEn: "A chord progression is a sequence of chords. C → F → G → C is used in thousands of songs!", contentHi: "कॉर्ड प्रोग्रेशन कॉर्ड्स का क्रम है। सी → एफ → जी → सी हज़ारों गानों में है!" },
        { type: "sequence", titleEn: "I-IV-V-I Progression", titleHi: "I-IV-V-I प्रोग्रेशन", sequence: ["C4", "E4", "G4", "F4", "A4", "C5", "G4", "B4", "D5", "C4", "E4", "G4"], indianSequence: ["C", "→", "→", "F", "→", "→", "G", "→", "→", "C", "→", "→"] },
        { type: "complete", titleEn: "Progression Mastered! 🎉", titleHi: "प्रोग्रेशन सीखी! 🎉" }
    ]
};

export const PIANO_BEGINNER_17: Lesson = {
    id: "lesson-17", level: "beginner",
    titleEn: "Melody: Twinkle Twinkle", titleHi: "धुन: ट्विंकल ट्विंकल",
    steps: [
        { type: "intro", titleEn: "Your First Song!", titleHi: "आपका पहला गाना!", contentEn: "Let's play 'Twinkle Twinkle Little Star' — one of the most famous melodies in the world.", contentHi: "आइए 'ट्विंकल ट्विंकल लिटल स्टार' बजाएं!" },
        { type: "sequence", titleEn: "Twinkle Twinkle (Line 1)", titleHi: "ट्विंकल (पंक्ति 1)", sequence: ["C4", "C4", "G4", "G4", "A4", "A4", "G4"], indianSequence: ["Twin-", "kle", "twin-", "kle", "lit-", "tle", "star"] },
        { type: "sequence", titleEn: "Twinkle Twinkle (Line 2)", titleHi: "ट्विंकल (पंक्ति 2)", sequence: ["F4", "F4", "E4", "E4", "D4", "D4", "C4"], indianSequence: ["How", "I", "won-", "der", "what", "you", "are"] },
        { type: "sequence", titleEn: "Full First Verse", titleHi: "पूर्ण पहला छंद", sequence: ["C4", "C4", "G4", "G4", "A4", "A4", "G4", "F4", "F4", "E4", "E4", "D4", "D4", "C4"], indianSequence: ["C", "C", "G", "G", "A", "A", "G", "F", "F", "E", "E", "D", "D", "C"] },
        { type: "complete", titleEn: "Song Learned! 🎉🌟", titleHi: "गाना सीखा! 🎉🌟" }
    ]
};

export const PIANO_BEGINNER_18: Lesson = {
    id: "lesson-18", level: "beginner",
    titleEn: "Melody: Ode to Joy", titleHi: "धुन: ओड टू जॉय",
    steps: [
        { type: "intro", titleEn: "Beethoven's Classic", titleHi: "बीथोवन का क्लासिक", contentEn: "Ode to Joy by Beethoven uses only 5 notes (C-G) and is perfect for beginners.", contentHi: "बीथोवन का 'ओड टू जॉय' केवल 5 नोट्स का उपयोग करता है।" },
        { type: "sequence", titleEn: "Ode to Joy (Line 1)", titleHi: "ओड टू जॉय (पंक्ति 1)", sequence: ["E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4"], indianSequence: ["E", "E", "F", "G", "G", "F", "E", "D"] },
        { type: "sequence", titleEn: "Ode to Joy (Line 2)", titleHi: "ओड टू जॉय (पंक्ति 2)", sequence: ["C4", "C4", "D4", "E4", "E4", "D4", "D4"], indianSequence: ["C", "C", "D", "E", "E", "D", "D"] },
        { type: "sequence", titleEn: "Full Melody", titleHi: "पूर्ण धुन", sequence: ["E4", "E4", "F4", "G4", "G4", "F4", "E4", "D4", "C4", "C4", "D4", "E4", "E4", "D4", "D4"], indianSequence: ["E", "E", "F", "G", "G", "F", "E", "D", "C", "C", "D", "E", "E", "D", "D"] },
        { type: "complete", titleEn: "Beethoven Played! 🎉🎶", titleHi: "बीथोवन बजाया! 🎉🎶" }
    ]
};

export const PIANO_BEGINNER_19: Lesson = {
    id: "lesson-19", level: "beginner",
    titleEn: "Left Hand Bass Notes", titleHi: "बाएं हाथ के बेस नोट्स",
    steps: [
        { type: "intro", titleEn: "Using Both Hands", titleHi: "दोनों हाथों का उपयोग", contentEn: "Your left hand plays lower notes for bass support. Start with low C, F, and G — the root notes of our chords.", contentHi: "बायां हाथ बेस सपोर्ट के लिए निचले नोट्स बजाता है।" },
        { type: "demo", titleEn: "Low C", titleHi: "निचला सी", note: "C3", highlightKey: "C3" },
        { type: "practice", titleEn: "Play Low C", titleHi: "निचला सी बजाएं", expectedNote: "C3", highlightKey: "C3" },
        { type: "sequence", titleEn: "Bass Notes: C F G C", titleHi: "बेस नोट्स: सी एफ जी सी", sequence: ["C3", "F3", "G3", "C3"], indianSequence: ["C", "F", "G", "C"] },
        { type: "sequence", titleEn: "Bass Walking", titleHi: "बेस वॉकिंग", sequence: ["C3", "D3", "E3", "F3", "G3", "F3", "E3", "D3", "C3"], indianSequence: ["C", "D", "E", "F", "G", "F", "E", "D", "C"] },
        { type: "complete", titleEn: "Left Hand Started! 🎉", titleHi: "बायां हाथ शुरू! 🎉" }
    ]
};

export const PIANO_BEGINNER_20: Lesson = {
    id: "lesson-20", level: "beginner",
    titleEn: "Beginner Assessment", titleHi: "शुरुआती मूल्यांकन",
    steps: [
        { type: "intro", titleEn: "Congratulations!", titleHi: "बधाई!", contentEn: "You've completed the beginner level! Let's review everything: C Major scale, chords, and a melody.", contentHi: "आपने शुरुआती स्तर पूर्ण किया! सभी कुछ दोहराएं।" },
        { type: "sequence", titleEn: "Full C Major Scale", titleHi: "पूर्ण सी मेजर स्केल", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C'", "B", "A", "G", "F", "E", "D", "C"] },
        { type: "sequence", titleEn: "Chord Review: C-F-G", titleHi: "कॉर्ड समीक्षा: सी-एफ-जी", sequence: ["C4", "E4", "G4", "F4", "A4", "C5", "G4", "B4", "D5", "C4", "E4", "G4"], indianSequence: ["C", "E", "G", "F", "A", "C'", "G", "B", "D'", "C", "E", "G"] },
        { type: "sequence", titleEn: "Twinkle Melody Recap", titleHi: "ट्विंकल धुन दोहराएं", sequence: ["C4", "C4", "G4", "G4", "A4", "A4", "G4", "F4", "F4", "E4", "E4", "D4", "D4", "C4"], indianSequence: ["C", "C", "G", "G", "A", "A", "G", "F", "F", "E", "E", "D", "D", "C"] },
        { type: "complete", titleEn: "Beginner Complete! 🎉🏆", titleHi: "शुरुआती पूर्ण! 🎉🏆", contentEn: "You know the C Major scale, three chords, and two melodies. You're ready for intermediate!", contentHi: "आप सी मेजर स्केल, तीन कॉर्ड और दो धुनें जानते हैं!" }
    ]
};

export const PIANO_BEGINNER_LESSONS: Lesson[] = [
    PIANO_BEGINNER_1, PIANO_BEGINNER_2, PIANO_BEGINNER_3,
    PIANO_BEGINNER_4, PIANO_BEGINNER_5, PIANO_BEGINNER_6,
    PIANO_BEGINNER_7, PIANO_BEGINNER_8, PIANO_BEGINNER_9,
    PIANO_BEGINNER_10, PIANO_BEGINNER_11, PIANO_BEGINNER_12,
    PIANO_BEGINNER_13, PIANO_BEGINNER_14, PIANO_BEGINNER_15,
    PIANO_BEGINNER_16, PIANO_BEGINNER_17, PIANO_BEGINNER_18,
    PIANO_BEGINNER_19, PIANO_BEGINNER_20
];
