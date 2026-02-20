/**
 * Comprehensive Piano Lessons - Intermediate Level (20 Lessons)
 */

import { Lesson } from "./lesson-types";

// ===== INTERMEDIATE LEVEL: 20 LESSONS =====

export const PIANO_INTERMEDIATE_1: Lesson = {
    id: "lesson-1", level: "intermediate",
    titleEn: "G Major Scale", titleHi: "जी मेजर स्केल",
    steps: [
        { type: "intro", titleEn: "Your Second Scale", titleHi: "आपका दूसरा स्केल", contentEn: "G Major has one sharp: F#. The scale is G-A-B-C-D-E-F#-G. Watch for the black key!", contentHi: "जी मेजर में एक शार्प है: एफ#। स्केल: जी-ए-बी-सी-डी-ई-एफ#-जी।" },
        { type: "sequence", titleEn: "G Major Scale Up", titleHi: "जी मेजर स्केल ऊपर", sequence: ["G3", "A3", "B3", "C4", "D4", "E4", "F#4", "G4"], indianSequence: ["G", "A", "B", "C", "D", "E", "F#", "G'"] },
        { type: "sequence", titleEn: "G Major Scale Down", titleHi: "जी मेजर स्केल नीचे", sequence: ["G4", "F#4", "E4", "D4", "C4", "B3", "A3", "G3"], indianSequence: ["G'", "F#", "E", "D", "C", "B", "A", "G"] },
        { type: "complete", titleEn: "G Major Done! 🎉", titleHi: "जी मेजर पूर्ण! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_2: Lesson = {
    id: "lesson-2", level: "intermediate",
    titleEn: "F Major Scale", titleHi: "एफ मेजर स्केल",
    steps: [
        { type: "intro", titleEn: "Scale with a Flat", titleHi: "फ्लैट वाला स्केल", contentEn: "F Major has one flat: Bb. The scale is F-G-A-Bb-C-D-E-F. Bb is the black key between A and B.", contentHi: "एफ मेजर में एक फ्लैट है: बीb।" },
        { type: "sequence", titleEn: "F Major Scale Up", titleHi: "एफ मेजर स्केल ऊपर", sequence: ["F3", "G3", "A3", "A#3", "C4", "D4", "E4", "F4"], indianSequence: ["F", "G", "A", "Bb", "C", "D", "E", "F'"] },
        { type: "sequence", titleEn: "F Major Scale Down", titleHi: "एफ मेजर स्केल नीचे", sequence: ["F4", "E4", "D4", "C4", "A#3", "A3", "G3", "F3"], indianSequence: ["F'", "E", "D", "C", "Bb", "A", "G", "F"] },
        { type: "complete", titleEn: "F Major Done! 🎉", titleHi: "एफ मेजर पूर्ण! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_3: Lesson = {
    id: "lesson-3", level: "intermediate",
    titleEn: "D Minor Scale (Natural)", titleHi: "डी माइनर स्केल (नैचुरल)",
    steps: [
        { type: "intro", titleEn: "Minor Scales", titleHi: "माइनर स्केल", contentEn: "Minor scales have a sadder, more dramatic sound. D natural minor: D-E-F-G-A-Bb-C-D.", contentHi: "माइनर स्केल में उदास, नाटकीय ध्वनि है। डी नैचुरल माइनर: डी-ई-एफ-जी-ए-बीb-सी-डी।" },
        { type: "sequence", titleEn: "D Minor Scale Up", titleHi: "डी माइनर स्केल ऊपर", sequence: ["D4", "E4", "F4", "G4", "A4", "A#4", "C5", "D5"], indianSequence: ["D", "E", "F", "G", "A", "Bb", "C", "D'"] },
        { type: "sequence", titleEn: "D Minor Scale Down", titleHi: "डी माइनर स्केल नीचे", sequence: ["D5", "C5", "A#4", "A4", "G4", "F4", "E4", "D4"], indianSequence: ["D'", "C", "Bb", "A", "G", "F", "E", "D"] },
        { type: "complete", titleEn: "D Minor Learned! 🎉", titleHi: "डी माइनर सीखा! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_4: Lesson = {
    id: "lesson-4", level: "intermediate",
    titleEn: "A Minor Scale (Natural)", titleHi: "ए माइनर स्केल (नैचुरल)",
    steps: [
        { type: "intro", titleEn: "Relative Minor of C", titleHi: "सी का सापेक्ष माइनर", contentEn: "A minor is the relative minor of C major — same notes, different starting point: A-B-C-D-E-F-G-A.", contentHi: "ए माइनर सी मेजर का सापेक्ष माइनर है — वही नोट्स, अलग शुरुआत।" },
        { type: "sequence", titleEn: "A Minor Scale Up", titleHi: "ए माइनर स्केल ऊपर", sequence: ["A3", "B3", "C4", "D4", "E4", "F4", "G4", "A4"], indianSequence: ["A", "B", "C", "D", "E", "F", "G", "A'"] },
        { type: "sequence", titleEn: "A Minor Scale Down", titleHi: "ए माइनर स्केल नीचे", sequence: ["A4", "G4", "F4", "E4", "D4", "C4", "B3", "A3"], indianSequence: ["A'", "G", "F", "E", "D", "C", "B", "A"] },
        { type: "complete", titleEn: "A Minor Mastered! 🎉", titleHi: "ए माइनर सीखा! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_5: Lesson = {
    id: "lesson-5", level: "intermediate",
    titleEn: "Minor Chords: Am, Dm, Em", titleHi: "माइनर कॉर्ड: ए-एम, डी-एम, ई-एम",
    steps: [
        { type: "intro", titleEn: "Sad-Sounding Chords", titleHi: "उदास ध्वनि कॉर्ड", contentEn: "Minor chords lower the middle note. Am = A-C-E, Dm = D-F-A, Em = E-G-B.", contentHi: "माइनर कॉर्ड बीच का नोट नीचे करते हैं।" },
        { type: "sequence", titleEn: "A Minor Chord", titleHi: "ए माइनर कॉर्ड", sequence: ["A3", "C4", "E4"], indianSequence: ["A", "C", "E"] },
        { type: "sequence", titleEn: "D Minor Chord", titleHi: "डी माइनर कॉर्ड", sequence: ["D4", "F4", "A4"], indianSequence: ["D", "F", "A"] },
        { type: "sequence", titleEn: "E Minor Chord", titleHi: "ई माइनर कॉर्ड", sequence: ["E4", "G4", "B4"], indianSequence: ["E", "G", "B"] },
        { type: "sequence", titleEn: "Minor Progression: Am-Dm-Em-Am", titleHi: "माइनर प्रोग्रेशन", sequence: ["A3", "C4", "E4", "D4", "F4", "A4", "E4", "G4", "B4", "A3", "C4", "E4"], indianSequence: ["Am", "→", "→", "Dm", "→", "→", "Em", "→", "→", "Am", "→", "→"] },
        { type: "complete", titleEn: "Minor Chords Done! 🎉", titleHi: "माइनर कॉर्ड पूर्ण! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_6: Lesson = {
    id: "lesson-6", level: "intermediate",
    titleEn: "Chord Inversions: C Major", titleHi: "कॉर्ड इनवर्शन: सी मेजर",
    steps: [
        { type: "intro", titleEn: "Same Chord, Different Shape", titleHi: "वही कॉर्ड, अलग आकार", contentEn: "Inversions rearrange chord notes. C Major: Root (C-E-G), 1st inversion (E-G-C), 2nd inversion (G-C-E).", contentHi: "इनवर्शन कॉर्ड नोट्स को पुनर्व्यवस्थित करते हैं।" },
        { type: "sequence", titleEn: "Root Position", titleHi: "मूल स्थिति", sequence: ["C4", "E4", "G4"], indianSequence: ["C", "E", "G"] },
        { type: "sequence", titleEn: "1st Inversion", titleHi: "पहला इनवर्शन", sequence: ["E4", "G4", "C5"], indianSequence: ["E", "G", "C'"] },
        { type: "sequence", titleEn: "2nd Inversion", titleHi: "दूसरा इनवर्शन", sequence: ["G4", "C5", "E5"], indianSequence: ["G", "C'", "E'"] },
        { type: "sequence", titleEn: "All Inversions", titleHi: "सभी इनवर्शन", sequence: ["C4", "E4", "G4", "E4", "G4", "C5", "G4", "C5", "E5"], indianSequence: ["Root", "→", "→", "1st", "→", "→", "2nd", "→", "→"] },
        { type: "complete", titleEn: "Inversions Learned! 🎉", titleHi: "इनवर्शन सीखे! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_7: Lesson = {
    id: "lesson-7", level: "intermediate",
    titleEn: "Chord Inversions: G & F Major", titleHi: "कॉर्ड इनवर्शन: जी और एफ मेजर",
    steps: [
        { type: "intro", titleEn: "More Inversions", titleHi: "और इनवर्शन", contentEn: "Practice inversions on G Major (G-B-D) and F Major (F-A-C) to build smooth voice leading.", contentHi: "जी मेजर और एफ मेजर पर इनवर्शन अभ्यास करें।" },
        { type: "sequence", titleEn: "G Major Inversions", titleHi: "जी मेजर इनवर्शन", sequence: ["G3", "B3", "D4", "B3", "D4", "G4", "D4", "G4", "B4"], indianSequence: ["G-root", "→", "→", "G-1st", "→", "→", "G-2nd", "→", "→"] },
        { type: "sequence", titleEn: "F Major Inversions", titleHi: "एफ मेजर इनवर्शन", sequence: ["F3", "A3", "C4", "A3", "C4", "F4", "C4", "F4", "A4"], indianSequence: ["F-root", "→", "→", "F-1st", "→", "→", "F-2nd", "→", "→"] },
        { type: "complete", titleEn: "More Inversions Done! 🎉", titleHi: "और इनवर्शन पूर्ण! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_8: Lesson = {
    id: "lesson-8", level: "intermediate",
    titleEn: "Arpeggios in C Major", titleHi: "सी मेजर में अर्पेजियो",
    steps: [
        { type: "intro", titleEn: "Broken Chords", titleHi: "टूटे हुए कॉर्ड", contentEn: "Arpeggios play chord notes one at a time across the keyboard. C Major arpeggio: C-E-G-C-E-G...", contentHi: "अर्पेजियो कॉर्ड नोट्स एक-एक करके बजाते हैं।" },
        { type: "sequence", titleEn: "C Arpeggio Up", titleHi: "सी अर्पेजियो ऊपर", sequence: ["C4", "E4", "G4", "C5", "E5"], indianSequence: ["C", "E", "G", "C'", "E'"] },
        { type: "sequence", titleEn: "C Arpeggio Down", titleHi: "सी अर्पेजियो नीचे", sequence: ["E5", "C5", "G4", "E4", "C4"], indianSequence: ["E'", "C'", "G", "E", "C"] },
        { type: "sequence", titleEn: "Full Arpeggio Cycle", titleHi: "पूर्ण अर्पेजियो चक्र", sequence: ["C4", "E4", "G4", "C5", "E5", "C5", "G4", "E4", "C4"], indianSequence: ["C", "E", "G", "C'", "E'", "C'", "G", "E", "C"] },
        { type: "complete", titleEn: "Arpeggios Mastered! 🎉", titleHi: "अर्पेजियो सीखे! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_9: Lesson = {
    id: "lesson-9", level: "intermediate",
    titleEn: "Arpeggios in G & F Major", titleHi: "जी और एफ मेजर में अर्पेजियो",
    steps: [
        { type: "intro", titleEn: "More Arpeggios", titleHi: "और अर्पेजियो", contentEn: "Practice arpeggios in G Major (G-B-D) and F Major (F-A-C) for key fluency.", contentHi: "जी मेजर और एफ मेजर में अर्पेजियो अभ्यास करें।" },
        { type: "sequence", titleEn: "G Major Arpeggio", titleHi: "जी मेजर अर्पेजियो", sequence: ["G3", "B3", "D4", "G4", "D4", "B3", "G3"], indianSequence: ["G", "B", "D", "G'", "D", "B", "G"] },
        { type: "sequence", titleEn: "F Major Arpeggio", titleHi: "एफ मेजर अर्पेजियो", sequence: ["F3", "A3", "C4", "F4", "C4", "A3", "F3"], indianSequence: ["F", "A", "C", "F'", "C", "A", "F"] },
        { type: "complete", titleEn: "More Arpeggios Done! 🎉", titleHi: "और अर्पेजियो पूर्ण! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_10: Lesson = {
    id: "lesson-10", level: "intermediate",
    titleEn: "Introduction to Sharps & Flats", titleHi: "शार्प और फ्लैट का परिचय",
    steps: [
        { type: "intro", titleEn: "Black Keys", titleHi: "काली कुंजियाँ", contentEn: "Sharps (#) raise a note by a half step; flats (b) lower it. Black keys are the sharps/flats between white keys.", contentHi: "शार्प (#) नोट को आधा कदम ऊपर करता है; फ्लैट (b) नीचे करता है।" },
        { type: "demo", titleEn: "C Sharp / D Flat", titleHi: "सी शार्प / डी फ्लैट", note: "C#4", highlightKey: "C#4" },
        { type: "practice", titleEn: "Play C#", titleHi: "सी शार्प बजाएं", expectedNote: "C#4", highlightKey: "C#4" },
        { type: "sequence", titleEn: "All Black Keys (One Octave)", titleHi: "सभी काली कुंजियाँ", sequence: ["C#4", "D#4", "F#4", "G#4", "A#4"], indianSequence: ["C#", "D#", "F#", "G#", "A#"] },
        { type: "complete", titleEn: "Sharps & Flats Learned! 🎉", titleHi: "शार्प और फ्लैट सीखे! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_11: Lesson = {
    id: "lesson-11", level: "intermediate",
    titleEn: "Chromatic Scale", titleHi: "क्रोमैटिक स्केल",
    steps: [
        { type: "intro", titleEn: "All 12 Notes", titleHi: "सभी 12 नोट्स", contentEn: "The chromatic scale plays every note — all white and black keys in order. There are 12 unique notes.", contentHi: "क्रोमैटिक स्केल हर नोट बजाता है — सभी सफेद और काली कुंजियाँ।" },
        { type: "sequence", titleEn: "Chromatic Up", titleHi: "क्रोमैटिक ऊपर", sequence: ["C4", "C#4", "D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5"], indianSequence: ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C'"] },
        { type: "sequence", titleEn: "Chromatic Down", titleHi: "क्रोमैटिक नीचे", sequence: ["C5", "B4", "A#4", "A4", "G#4", "G4", "F#4", "F4", "E4", "D#4", "D4", "C#4", "C4"], indianSequence: ["C'", "B", "Bb", "A", "Ab", "G", "Gb", "F", "E", "Eb", "D", "Db", "C"] },
        { type: "complete", titleEn: "Chromatic Done! 🎉", titleHi: "क्रोमैटिक पूर्ण! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_12: Lesson = {
    id: "lesson-12", level: "intermediate",
    titleEn: "Eighth Note Patterns", titleHi: "आठवें नोट पैटर्न",
    steps: [
        { type: "intro", titleEn: "Faster Rhythms", titleHi: "तेज़ ताल", contentEn: "Eighth notes are twice as fast as quarter notes. Practice scale runs with even eighth-note timing.", contentHi: "आठवें नोट चौथाई नोट से दोगुने तेज़ हैं।" },
        { type: "sequence", titleEn: "Quick Scale Run", titleHi: "तेज़ स्केल रन", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C'", "C'", "B", "A", "G", "F", "E", "D", "C"] },
        { type: "sequence", titleEn: "Eighth Note Pattern", titleHi: "आठवें नोट पैटर्न", sequence: ["C4", "E4", "D4", "F4", "E4", "G4", "F4", "A4", "G4", "B4", "A4", "C5"], indianSequence: ["C", "E", "D", "F", "E", "G", "F", "A", "G", "B", "A", "C'"] },
        { type: "complete", titleEn: "Eighth Notes Done! 🎉", titleHi: "आठवें नोट पूर्ण! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_13: Lesson = {
    id: "lesson-13", level: "intermediate",
    titleEn: "Syncopation Basics", titleHi: "सिंकोपेशन की मूल बातें",
    steps: [
        { type: "intro", titleEn: "Off-Beat Accents", titleHi: "ऑफ-बीट एक्सेंट", contentEn: "Syncopation puts accents on unexpected beats. It makes music feel groovy and energetic.", contentHi: "सिंकोपेशन अप्रत्याशित बीट्स पर एक्सेंट लगाता है।" },
        { type: "sequence", titleEn: "Syncopated Pattern", titleHi: "सिंकोपेटेड पैटर्न", sequence: ["C4", "E4", "G4", "E4", "C4", "G4", "E4", "C4"], indianSequence: ["C", "E", "G", "E", "C", "G", "E", "C"] },
        { type: "sequence", titleEn: "Syncopated Chords", titleHi: "सिंकोपेटेड कॉर्ड", sequence: ["C4", "E4", "G4", "F4", "A4", "C5", "G4", "B4", "D5", "C4", "E4", "G4"], indianSequence: ["C", "→", "→", "F", "→", "→", "G", "→", "→", "C", "→", "→"] },
        { type: "complete", titleEn: "Syncopation Learned! 🎉", titleHi: "सिंकोपेशन सीखा! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_14: Lesson = {
    id: "lesson-14", level: "intermediate",
    titleEn: "Two-Hand Coordination (Simple)", titleHi: "दो-हाथ समन्वय (सरल)",
    steps: [
        { type: "intro", titleEn: "Hands Together", titleHi: "दोनों हाथ साथ", contentEn: "Play simple patterns with the right hand melody while the left hand holds bass notes. Start slowly!", contentHi: "बाएं हाथ से बेस नोट्स और दाएं हाथ से धुन बजाएं।" },
        { type: "sequence", titleEn: "Left Hand Bass", titleHi: "बायां हाथ बेस", sequence: ["C3", "C3", "G3", "G3", "F3", "F3", "G3", "G3"], indianSequence: ["C", "C", "G", "G", "F", "F", "G", "G"] },
        { type: "sequence", titleEn: "Right Hand Melody", titleHi: "दायां हाथ धुन", sequence: ["E4", "G4", "C5", "G4", "A4", "F4", "G4", "E4"], indianSequence: ["E", "G", "C'", "G", "A", "F", "G", "E"] },
        { type: "complete", titleEn: "Coordination Started! 🎉", titleHi: "समन्वय शुरू! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_15: Lesson = {
    id: "lesson-15", level: "intermediate",
    titleEn: "Two-Hand Coordination (Advanced)", titleHi: "दो-हाथ समन्वय (उन्नत)",
    steps: [
        { type: "intro", titleEn: "Independent Movement", titleHi: "स्वतंत्र गति", contentEn: "Each hand plays a different rhythm. The left can do steady quarter notes while the right plays eighth notes.", contentHi: "प्रत्येक हाथ अलग ताल बजाता है।" },
        { type: "sequence", titleEn: "Bass Walkdown", titleHi: "बेस वॉकडाउन", sequence: ["C3", "B2", "A2", "G2", "F2", "G2", "A2", "B2", "C3"], indianSequence: ["C", "B", "A", "G", "F", "G", "A", "B", "C"] },
        { type: "sequence", titleEn: "Melody Over Bass", titleHi: "बेस पर धुन", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["C", "D", "E", "F", "G", "A", "G", "F", "E", "D", "C"] },
        { type: "complete", titleEn: "Two Hands Coordinated! 🎉", titleHi: "दोनों हाथ समन्वित! 🎉" }
    ]
};

export const PIANO_INTERMEDIATE_16: Lesson = {
    id: "lesson-16", level: "intermediate",
    titleEn: "Melody: Für Elise Opening", titleHi: "धुन: फर एलीज़ शुरुआत",
    steps: [
        { type: "intro", titleEn: "Beethoven's Famous Piece", titleHi: "बीथोवन की प्रसिद्ध रचना", contentEn: "The opening of Für Elise is one of the most recognizable piano melodies. It uses a repeating pattern.", contentHi: "फर एलीज़ की शुरुआत पियानो की सबसे पहचानी जाने वाली धुनों में से है।" },
        { type: "sequence", titleEn: "Für Elise Theme", titleHi: "फर एलीज़ थीम", sequence: ["E5", "D#5", "E5", "D#5", "E5", "B4", "D5", "C5", "A4"], indianSequence: ["E", "D#", "E", "D#", "E", "B", "D", "C", "A"] },
        { type: "sequence", titleEn: "Continuation", titleHi: "आगे", sequence: ["C4", "E4", "A4", "B4", "E4", "G#4", "B4", "C5"], indianSequence: ["C", "E", "A", "B", "E", "G#", "B", "C'"] },
        { type: "complete", titleEn: "Für Elise Started! 🎉🎹", titleHi: "फर एलीज़ शुरू! 🎉🎹" }
    ]
};

export const PIANO_INTERMEDIATE_17: Lesson = {
    id: "lesson-17", level: "intermediate",
    titleEn: "Melody: Moonlight Sonata Theme", titleHi: "धुन: मूनलाइट सोनाटा थीम",
    steps: [
        { type: "intro", titleEn: "Haunting Beauty", titleHi: "मोहक सुंदरता", contentEn: "Moonlight Sonata's first movement uses arpeggiated chords in C# minor. We'll play a simplified version in C minor.", contentHi: "मूनलाइट सोनाटा सी माइनर में अर्पेजियेटेड कॉर्ड का उपयोग करता है।" },
        { type: "sequence", titleEn: "Moonlight Theme", titleHi: "मूनलाइट थीम", sequence: ["C4", "D#4", "G4", "C4", "D#4", "G4", "C4", "D#4", "G4"], indianSequence: ["Cm arpeggio", "→", "→", "→", "→", "→", "→", "→", "→"] },
        { type: "sequence", titleEn: "Moonlight Variation", titleHi: "मूनलाइट भिन्नता", sequence: ["C4", "D#4", "G#4", "C4", "D#4", "G#4", "A#3", "D#4", "G4"], indianSequence: ["Ab arpeggio", "→", "→", "→", "→", "→", "Eb", "→", "→"] },
        { type: "complete", titleEn: "Moonlight Played! 🎉🌙", titleHi: "मूनलाइट बजाया! 🎉🌙" }
    ]
};

export const PIANO_INTERMEDIATE_18: Lesson = {
    id: "lesson-18", level: "intermediate",
    titleEn: "Blues Scale Introduction", titleHi: "ब्लूज़ स्केल का परिचय",
    steps: [
        { type: "intro", titleEn: "The Blues Sound", titleHi: "ब्लूज़ ध्वनि", contentEn: "The C Blues scale: C-Eb-F-Gb-G-Bb-C. It adds 'blue notes' that give a soulful, expressive quality.", contentHi: "सी ब्लूज़ स्केल: सी-ईb-एफ-जीb-जी-बीb-सी।" },
        { type: "sequence", titleEn: "Blues Scale Up", titleHi: "ब्लूज़ स्केल ऊपर", sequence: ["C4", "D#4", "F4", "F#4", "G4", "A#4", "C5"], indianSequence: ["C", "Eb", "F", "Gb", "G", "Bb", "C'"] },
        { type: "sequence", titleEn: "Blues Scale Down", titleHi: "ब्लूज़ स्केल नीचे", sequence: ["C5", "A#4", "G4", "F#4", "F4", "D#4", "C4"], indianSequence: ["C'", "Bb", "G", "Gb", "F", "Eb", "C"] },
        { type: "sequence", titleEn: "Blues Lick", titleHi: "ब्लूज़ लिक", sequence: ["C4", "D#4", "F4", "F#4", "G4", "D#4", "C4"], indianSequence: ["C", "Eb", "F", "Gb", "G", "Eb", "C"] },
        { type: "complete", titleEn: "Blues Scale Learned! 🎉🎵", titleHi: "ब्लूज़ स्केल सीखा! 🎉🎵" }
    ]
};

export const PIANO_INTERMEDIATE_19: Lesson = {
    id: "lesson-19", level: "intermediate",
    titleEn: "12-Bar Blues Progression", titleHi: "12-बार ब्लूज़ प्रोग्रेशन",
    steps: [
        { type: "intro", titleEn: "The Blues Form", titleHi: "ब्लूज़ रूप", contentEn: "The 12-bar blues uses I, IV, and V chords in a specific pattern. In C: C-C-C-C, F-F-C-C, G-F-C-C.", contentHi: "12-बार ब्लूज़ I, IV और V कॉर्ड का विशेष पैटर्न है।" },
        { type: "sequence", titleEn: "Blues Bars 1-4 (I chord)", titleHi: "ब्लूज़ बार 1-4", sequence: ["C4", "E4", "G4", "C4", "E4", "G4", "C4", "E4", "G4", "C4", "E4", "G4"], indianSequence: ["C", "→", "→", "C", "→", "→", "C", "→", "→", "C", "→", "→"] },
        { type: "sequence", titleEn: "Blues Bars 5-8", titleHi: "ब्लूज़ बार 5-8", sequence: ["F4", "A4", "C5", "F4", "A4", "C5", "C4", "E4", "G4", "C4", "E4", "G4"], indianSequence: ["F", "→", "→", "F", "→", "→", "C", "→", "→", "C", "→", "→"] },
        { type: "sequence", titleEn: "Blues Bars 9-12", titleHi: "ब्लूज़ बार 9-12", sequence: ["G4", "B4", "D5", "F4", "A4", "C5", "C4", "E4", "G4", "C4", "E4", "G4"], indianSequence: ["G", "→", "→", "F", "→", "→", "C", "→", "→", "C", "→", "→"] },
        { type: "complete", titleEn: "12-Bar Blues Mastered! 🎉🎶", titleHi: "12-बार ब्लूज़ सीखा! 🎉🎶" }
    ]
};

export const PIANO_INTERMEDIATE_20: Lesson = {
    id: "lesson-20", level: "intermediate",
    titleEn: "Intermediate Assessment", titleHi: "मध्यवर्ती मूल्यांकन",
    steps: [
        { type: "intro", titleEn: "Congratulations!", titleHi: "बधाई!", contentEn: "You've completed intermediate level! You know multiple scales, chord inversions, arpeggios, and classical themes.", contentHi: "आपने मध्यवर्ती स्तर पूर्ण किया! कई स्केल, इनवर्शन, अर्पेजियो और शास्त्रीय धुनें सीखीं।" },
        { type: "sequence", titleEn: "G Major Review", titleHi: "जी मेजर समीक्षा", sequence: ["G3", "A3", "B3", "C4", "D4", "E4", "F#4", "G4", "F#4", "E4", "D4", "C4", "B3", "A3", "G3"], indianSequence: ["G", "A", "B", "C", "D", "E", "F#", "G'", "F#", "E", "D", "C", "B", "A", "G"] },
        { type: "sequence", titleEn: "Chord Progression Review", titleHi: "कॉर्ड प्रोग्रेशन समीक्षा", sequence: ["C4", "E4", "G4", "A3", "C4", "E4", "D4", "F4", "A4", "G3", "B3", "D4", "C4", "E4", "G4"], indianSequence: ["C", "→", "→", "Am", "→", "→", "Dm", "→", "→", "G", "→", "→", "C", "→", "→"] },
        { type: "complete", titleEn: "Intermediate Complete! 🎉🏆", titleHi: "मध्यवर्ती पूर्ण! 🎉🏆", contentEn: "You're ready for advanced techniques! Jazz, classical mastery, and improvisation await.", contentHi: "आप उन्नत तकनीकों के लिए तैयार हैं!" }
    ]
};

export const PIANO_INTERMEDIATE_LESSONS: Lesson[] = [
    PIANO_INTERMEDIATE_1, PIANO_INTERMEDIATE_2, PIANO_INTERMEDIATE_3,
    PIANO_INTERMEDIATE_4, PIANO_INTERMEDIATE_5, PIANO_INTERMEDIATE_6,
    PIANO_INTERMEDIATE_7, PIANO_INTERMEDIATE_8, PIANO_INTERMEDIATE_9,
    PIANO_INTERMEDIATE_10, PIANO_INTERMEDIATE_11, PIANO_INTERMEDIATE_12,
    PIANO_INTERMEDIATE_13, PIANO_INTERMEDIATE_14, PIANO_INTERMEDIATE_15,
    PIANO_INTERMEDIATE_16, PIANO_INTERMEDIATE_17, PIANO_INTERMEDIATE_18,
    PIANO_INTERMEDIATE_19, PIANO_INTERMEDIATE_20
];
