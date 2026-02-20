/**
 * Comprehensive Piano Lessons - Advanced Level (20 Lessons)
 */

import { Lesson } from "./lesson-types";

// ===== ADVANCED LEVEL: 20 LESSONS =====

export const PIANO_ADVANCED_1: Lesson = {
    id: "lesson-1", level: "advanced",
    titleEn: "Major Scales: Sharp Keys", titleHi: "मेजर स्केल: शार्प कुंजियाँ",
    steps: [
        { type: "intro", titleEn: "Mastering Sharp Keys", titleHi: "शार्प कुंजियाँ सीखना", contentEn: "Practice D Major (2 sharps: F#, C#) and A Major (3 sharps: F#, C#, G#) for full keyboard fluency.", contentHi: "डी मेजर और ए मेजर का अभ्यास करें।" },
        { type: "sequence", titleEn: "D Major Scale", titleHi: "डी मेजर स्केल", sequence: ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5"], indianSequence: ["D", "E", "F#", "G", "A", "B", "C#", "D'"] },
        { type: "sequence", titleEn: "A Major Scale", titleHi: "ए मेजर स्केल", sequence: ["A3", "B3", "C#4", "D4", "E4", "F#4", "G#4", "A4"], indianSequence: ["A", "B", "C#", "D", "E", "F#", "G#", "A'"] },
        { type: "complete", titleEn: "Sharp Keys Done! 🎉", titleHi: "शार्प कुंजियाँ पूर्ण! 🎉" }
    ]
};

export const PIANO_ADVANCED_2: Lesson = {
    id: "lesson-2", level: "advanced",
    titleEn: "Major Scales: Flat Keys", titleHi: "मेजर स्केल: फ्लैट कुंजियाँ",
    steps: [
        { type: "intro", titleEn: "Mastering Flat Keys", titleHi: "फ्लैट कुंजियाँ सीखना", contentEn: "Bb Major (2 flats) and Eb Major (3 flats). These keys are essential for jazz and classical.", contentHi: "बीb मेजर और ईb मेजर जैज़ और क्लासिकल के लिए आवश्यक हैं।" },
        { type: "sequence", titleEn: "Bb Major Scale", titleHi: "बीb मेजर स्केल", sequence: ["A#3", "C4", "D4", "D#4", "F4", "G4", "A4", "A#4"], indianSequence: ["Bb", "C", "D", "Eb", "F", "G", "A", "Bb'"] },
        { type: "sequence", titleEn: "Eb Major Scale", titleHi: "ईb मेजर स्केल", sequence: ["D#4", "F4", "G4", "G#4", "A#4", "C5", "D5", "D#5"], indianSequence: ["Eb", "F", "G", "Ab", "Bb", "C", "D", "Eb'"] },
        { type: "complete", titleEn: "Flat Keys Done! 🎉", titleHi: "फ्लैट कुंजियाँ पूर्ण! 🎉" }
    ]
};

export const PIANO_ADVANCED_3: Lesson = {
    id: "lesson-3", level: "advanced",
    titleEn: "Harmonic Minor Scales", titleHi: "हार्मोनिक माइनर स्केल",
    steps: [
        { type: "intro", titleEn: "Exotic Sound", titleHi: "विदेशी ध्वनि", contentEn: "The harmonic minor raises the 7th note, creating a dramatic 1.5-step jump. A harmonic minor: A-B-C-D-E-F-G#-A.", contentHi: "हार्मोनिक माइनर 7वें नोट को उठाता है, नाटकीय ध्वनि बनाता है।" },
        { type: "sequence", titleEn: "A Harmonic Minor", titleHi: "ए हार्मोनिक माइनर", sequence: ["A3", "B3", "C4", "D4", "E4", "F4", "G#4", "A4"], indianSequence: ["A", "B", "C", "D", "E", "F", "G#", "A'"] },
        { type: "sequence", titleEn: "D Harmonic Minor", titleHi: "डी हार्मोनिक माइनर", sequence: ["D4", "E4", "F4", "G4", "A4", "A#4", "C#5", "D5"], indianSequence: ["D", "E", "F", "G", "A", "Bb", "C#", "D'"] },
        { type: "complete", titleEn: "Harmonic Minor Learned! 🎉", titleHi: "हार्मोनिक माइनर सीखा! 🎉" }
    ]
};

export const PIANO_ADVANCED_4: Lesson = {
    id: "lesson-4", level: "advanced",
    titleEn: "Melodic Minor Scales", titleHi: "मेलोडिक माइनर स्केल",
    steps: [
        { type: "intro", titleEn: "Different Up and Down", titleHi: "ऊपर और नीचे अलग", contentEn: "Melodic minor raises 6th and 7th going up, plays natural minor going down. A melodic minor up: A-B-C-D-E-F#-G#-A.", contentHi: "मेलोडिक माइनर ऊपर जाते समय 6वें और 7वें को उठाता है।" },
        { type: "sequence", titleEn: "A Melodic Minor Up", titleHi: "ए मेलोडिक माइनर ऊपर", sequence: ["A3", "B3", "C4", "D4", "E4", "F#4", "G#4", "A4"], indianSequence: ["A", "B", "C", "D", "E", "F#", "G#", "A'"] },
        { type: "sequence", titleEn: "A Melodic Minor Down (Natural)", titleHi: "ए मेलोडिक माइनर नीचे", sequence: ["A4", "G4", "F4", "E4", "D4", "C4", "B3", "A3"], indianSequence: ["A'", "G", "F", "E", "D", "C", "B", "A"] },
        { type: "complete", titleEn: "Melodic Minor Done! 🎉", titleHi: "मेलोडिक माइनर पूर्ण! 🎉" }
    ]
};

export const PIANO_ADVANCED_5: Lesson = {
    id: "lesson-5", level: "advanced",
    titleEn: "Seventh Chords", titleHi: "सेवेंथ कॉर्ड",
    steps: [
        { type: "intro", titleEn: "Four-Note Chords", titleHi: "चार-नोट कॉर्ड", contentEn: "Seventh chords add richness. CMaj7 (C-E-G-B), Cm7 (C-Eb-G-Bb), C7 (C-E-G-Bb).", contentHi: "सेवेंथ कॉर्ड समृद्धि जोड़ते हैं।" },
        { type: "sequence", titleEn: "CMaj7 Chord", titleHi: "सीमेज7 कॉर्ड", sequence: ["C4", "E4", "G4", "B4"], indianSequence: ["C", "E", "G", "B"] },
        { type: "sequence", titleEn: "Cm7 Chord", titleHi: "सीएम7 कॉर्ड", sequence: ["C4", "D#4", "G4", "A#4"], indianSequence: ["C", "Eb", "G", "Bb"] },
        { type: "sequence", titleEn: "C7 (Dominant)", titleHi: "सी7 (डॉमिनेंट)", sequence: ["C4", "E4", "G4", "A#4"], indianSequence: ["C", "E", "G", "Bb"] },
        { type: "sequence", titleEn: "Compare All Three", titleHi: "तीनों की तुलना", sequence: ["C4", "E4", "G4", "B4", "C4", "D#4", "G4", "A#4", "C4", "E4", "G4", "A#4"], indianSequence: ["Maj7", "→", "→", "→", "m7", "→", "→", "→", "dom7", "→", "→", "→"] },
        { type: "complete", titleEn: "Seventh Chords Mastered! 🎉", titleHi: "सेवेंथ कॉर्ड सीखे! 🎉" }
    ]
};

export const PIANO_ADVANCED_6: Lesson = {
    id: "lesson-6", level: "advanced",
    titleEn: "Jazz Voicings: Shell Chords", titleHi: "जैज़ वॉइसिंग: शेल कॉर्ड",
    steps: [
        { type: "intro", titleEn: "Minimalist Jazz", titleHi: "न्यूनतम जैज़", contentEn: "Shell voicings use only root, 3rd, and 7th — the essential chord tones. They're the foundation of jazz piano.", contentHi: "शेल वॉइसिंग केवल मूल, 3rd और 7th का उपयोग करते हैं।" },
        { type: "sequence", titleEn: "Dm7 Shell", titleHi: "डीएम7 शेल", sequence: ["D3", "F4", "C5"], indianSequence: ["root", "3rd", "7th"] },
        { type: "sequence", titleEn: "G7 Shell", titleHi: "जी7 शेल", sequence: ["G3", "B3", "F4"], indianSequence: ["root", "3rd", "7th"] },
        { type: "sequence", titleEn: "CMaj7 Shell", titleHi: "सीमेज7 शेल", sequence: ["C3", "E4", "B4"], indianSequence: ["root", "3rd", "7th"] },
        { type: "sequence", titleEn: "ii-V-I Shell Voicing", titleHi: "ii-V-I शेल वॉइसिंग", sequence: ["D3", "F4", "C5", "G3", "B3", "F4", "C3", "E4", "B4"], indianSequence: ["Dm7", "→", "→", "G7", "→", "→", "CMaj7", "→", "→"] },
        { type: "complete", titleEn: "Shell Chords Done! 🎉", titleHi: "शेल कॉर्ड पूर्ण! 🎉" }
    ]
};

export const PIANO_ADVANCED_7: Lesson = {
    id: "lesson-7", level: "advanced",
    titleEn: "ii-V-I in Major Keys", titleHi: "ii-V-I मेजर कुंजियों में",
    steps: [
        { type: "intro", titleEn: "The Most Important Progression", titleHi: "सबसे महत्वपूर्ण प्रोग्रेशन", contentEn: "The ii-V-I is the backbone of jazz. Practice in C (Dm7-G7-CMaj7) and F (Gm7-C7-FMaj7).", contentHi: "ii-V-I जैज़ की रीढ़ है।" },
        { type: "sequence", titleEn: "ii-V-I in C", titleHi: "ii-V-I सी में", sequence: ["D4", "F4", "A4", "C5", "G3", "B3", "D4", "F4", "C4", "E4", "G4", "B4"], indianSequence: ["Dm7", "→", "→", "→", "G7", "→", "→", "→", "CMaj7", "→", "→", "→"] },
        { type: "sequence", titleEn: "ii-V-I in F", titleHi: "ii-V-I एफ में", sequence: ["G3", "A#3", "D4", "F4", "C4", "E4", "G4", "A#4", "F3", "A3", "C4", "E4"], indianSequence: ["Gm7", "→", "→", "→", "C7", "→", "→", "→", "FMaj7", "→", "→", "→"] },
        { type: "complete", titleEn: "Major ii-V-I Done! 🎉", titleHi: "मेजर ii-V-I पूर्ण! 🎉" }
    ]
};

export const PIANO_ADVANCED_8: Lesson = {
    id: "lesson-8", level: "advanced",
    titleEn: "ii-V-I in Minor Keys", titleHi: "ii-V-I माइनर कुंजियों में",
    steps: [
        { type: "intro", titleEn: "Minor Key Jazz", titleHi: "माइनर कुंजी जैज़", contentEn: "In minor keys, ii-V-I becomes iiø7-V7-im. In A minor: Bø7-E7-Am.", contentHi: "माइनर कुंजियों में ii-V-I बदल जाता है।" },
        { type: "sequence", titleEn: "ii-V-I in Am", titleHi: "ii-V-I ए माइनर में", sequence: ["B3", "D4", "F4", "A4", "E4", "G#4", "B4", "D5", "A3", "C4", "E4"], indianSequence: ["Bø7", "→", "→", "→", "E7", "→", "→", "→", "Am", "→", "→"] },
        { type: "sequence", titleEn: "ii-V-I in Dm", titleHi: "ii-V-I डी माइनर में", sequence: ["E4", "G4", "A#4", "D5", "A3", "C#4", "E4", "G4", "D4", "F4", "A4"], indianSequence: ["Eø7", "→", "→", "→", "A7", "→", "→", "→", "Dm", "→", "→"] },
        { type: "complete", titleEn: "Minor ii-V-I Done! 🎉", titleHi: "माइनर ii-V-I पूर्ण! 🎉" }
    ]
};

export const PIANO_ADVANCED_9: Lesson = {
    id: "lesson-9", level: "advanced",
    titleEn: "Pentatonic Scale Patterns", titleHi: "पेंटाटोनिक स्केल पैटर्न",
    steps: [
        { type: "intro", titleEn: "Five-Note Freedom", titleHi: "पांच-नोट स्वतंत्रता", contentEn: "The C major pentatonic (C-D-E-G-A) sounds good over almost anything. It's great for improvisation.", contentHi: "सी मेजर पेंटाटोनिक लगभग किसी भी चीज़ पर अच्छा लगता है।" },
        { type: "sequence", titleEn: "C Major Pentatonic", titleHi: "सी मेजर पेंटाटोनिक", sequence: ["C4", "D4", "E4", "G4", "A4", "C5", "A4", "G4", "E4", "D4", "C4"], indianSequence: ["C", "D", "E", "G", "A", "C'", "A", "G", "E", "D", "C"] },
        { type: "sequence", titleEn: "A Minor Pentatonic", titleHi: "ए माइनर पेंटाटोनिक", sequence: ["A3", "C4", "D4", "E4", "G4", "A4", "G4", "E4", "D4", "C4", "A3"], indianSequence: ["A", "C", "D", "E", "G", "A'", "G", "E", "D", "C", "A"] },
        { type: "complete", titleEn: "Pentatonic Mastered! 🎉", titleHi: "पेंटाटोनिक सीखा! 🎉" }
    ]
};

export const PIANO_ADVANCED_10: Lesson = {
    id: "lesson-10", level: "advanced",
    titleEn: "Blues Improvisation", titleHi: "ब्लूज़ इम्प्रोवाइज़ेशन",
    steps: [
        { type: "intro", titleEn: "Creating Your Own Blues", titleHi: "अपना ब्लूज़ बनाना", contentEn: "Combine the blues scale with chord tones to create improvised solos over a 12-bar blues.", contentHi: "ब्लूज़ स्केल और कॉर्ड टोन मिलाकर तात्कालिक सोलो बनाएं।" },
        { type: "sequence", titleEn: "Blues Lick 1", titleHi: "ब्लूज़ लिक 1", sequence: ["C4", "D#4", "F4", "F#4", "G4", "A#4", "G4", "F4", "D#4", "C4"], indianSequence: ["C", "Eb", "F", "Gb", "G", "Bb", "G", "F", "Eb", "C"] },
        { type: "sequence", titleEn: "Blues Lick 2", titleHi: "ब्लूज़ लिक 2", sequence: ["G4", "A#4", "C5", "A#4", "G4", "F#4", "F4", "D#4", "C4"], indianSequence: ["G", "Bb", "C'", "Bb", "G", "Gb", "F", "Eb", "C"] },
        { type: "sequence", titleEn: "Blues Turnaround", titleHi: "ब्लूज़ टर्नअराउंड", sequence: ["C5", "A#4", "A4", "G#4", "G4", "F#4", "F4", "E4", "D#4", "D4", "C4"], indianSequence: ["C'", "Bb", "A", "Ab", "G", "Gb", "F", "E", "Eb", "D", "C"] },
        { type: "complete", titleEn: "Blues Improv Started! 🎉🎵", titleHi: "ब्लूज़ इम्प्रोव शुरू! 🎉🎵" }
    ]
};

export const PIANO_ADVANCED_11: Lesson = {
    id: "lesson-11", level: "advanced",
    titleEn: "Classical Technique: Trills & Turns", titleHi: "क्लासिकल तकनीक: ट्रिल और टर्न",
    steps: [
        { type: "intro", titleEn: "Ornamental Playing", titleHi: "अलंकृत वादन", contentEn: "Trills alternate rapidly between two adjacent notes. Turns add notes above and below the main note.", contentHi: "ट्रिल दो निकटवर्ती नोट्स के बीच तेज़ी से बदलते हैं।" },
        { type: "sequence", titleEn: "Trill: C-D", titleHi: "ट्रिल: सी-डी", sequence: ["C4", "D4", "C4", "D4", "C4", "D4", "C4", "D4", "C4"], indianSequence: ["C", "D", "C", "D", "C", "D", "C", "D", "C"] },
        { type: "sequence", titleEn: "Turn Around E", titleHi: "ई के चारों ओर टर्न", sequence: ["F4", "E4", "D4", "E4"], indianSequence: ["F", "E", "D", "E"] },
        { type: "sequence", titleEn: "Ornamental Phrase", titleHi: "अलंकृत वाक्य", sequence: ["C4", "D4", "C4", "D4", "E4", "F4", "E4", "D4", "E4", "G4", "A4", "G4", "F4", "G4", "C5"], indianSequence: ["trill", "→", "→", "→", "E", "turn", "→", "→", "→", "G", "turn", "→", "→", "→", "C'"] },
        { type: "complete", titleEn: "Ornaments Learned! 🎉", titleHi: "अलंकार सीखे! 🎉" }
    ]
};

export const PIANO_ADVANCED_12: Lesson = {
    id: "lesson-12", level: "advanced",
    titleEn: "Classical Technique: Alberti Bass", titleHi: "क्लासिकल तकनीक: अल्बर्टी बेस",
    steps: [
        { type: "intro", titleEn: "Mozart's Favorite Pattern", titleHi: "मोज़ार्ट का पसंदीदा पैटर्न", contentEn: "Alberti bass breaks a chord into a rolling pattern: lowest-highest-middle-highest. Used extensively in Classical era.", contentHi: "अल्बर्टी बेस कॉर्ड को रोलिंग पैटर्न में तोड़ता है।" },
        { type: "sequence", titleEn: "Alberti on C", titleHi: "सी पर अल्बर्टी", sequence: ["C3", "G3", "E3", "G3", "C3", "G3", "E3", "G3"], indianSequence: ["C", "G", "E", "G", "C", "G", "E", "G"] },
        { type: "sequence", titleEn: "Alberti on F", titleHi: "एफ पर अल्बर्टी", sequence: ["F3", "C4", "A3", "C4", "F3", "C4", "A3", "C4"], indianSequence: ["F", "C", "A", "C", "F", "C", "A", "C"] },
        { type: "sequence", titleEn: "Alberti Chord Changes", titleHi: "अल्बर्टी कॉर्ड चेंज", sequence: ["C3", "G3", "E3", "G3", "F3", "C4", "A3", "C4", "G3", "D4", "B3", "D4", "C3", "G3", "E3", "G3"], indianSequence: ["C", "→", "→", "→", "F", "→", "→", "→", "G", "→", "→", "→", "C", "→", "→", "→"] },
        { type: "complete", titleEn: "Alberti Bass Mastered! 🎉", titleHi: "अल्बर्टी बेस सीखा! 🎉" }
    ]
};

export const PIANO_ADVANCED_13: Lesson = {
    id: "lesson-13", level: "advanced",
    titleEn: "Complex Arpeggios (4-Note)", titleHi: "जटिल अर्पेजियो (4-नोट)",
    steps: [
        { type: "intro", titleEn: "Seventh Chord Arpeggios", titleHi: "सेवेंथ कॉर्ड अर्पेजियो", contentEn: "Play 7th chord arpeggios across 2 octaves for technical fluency and harmonic awareness.", contentHi: "तकनीकी प्रवाह और हार्मोनिक जागरूकता के लिए 7th कॉर्ड अर्पेजियो बजाएं।" },
        { type: "sequence", titleEn: "CMaj7 Arpeggio", titleHi: "सीमेज7 अर्पेजियो", sequence: ["C4", "E4", "G4", "B4", "C5", "E5", "G5", "B5"], indianSequence: ["C", "E", "G", "B", "C'", "E'", "G'", "B'"] },
        { type: "sequence", titleEn: "Dm7 Arpeggio", titleHi: "डीएम7 अर्पेजियो", sequence: ["D4", "F4", "A4", "C5", "D5", "F5", "A5", "C6"], indianSequence: ["D", "F", "A", "C", "D'", "F'", "A'", "C''"] },
        { type: "complete", titleEn: "Complex Arpeggios Done! 🎉", titleHi: "जटिल अर्पेजियो पूर्ण! 🎉" }
    ]
};

export const PIANO_ADVANCED_14: Lesson = {
    id: "lesson-14", level: "advanced",
    titleEn: "Polyrhythms: 3 Against 2", titleHi: "पॉलीरिदम: 3 बनाम 2",
    steps: [
        { type: "intro", titleEn: "Cross-Rhythms", titleHi: "क्रॉस-रिदम", contentEn: "One hand plays 3 notes while the other plays 2. This is fundamental to advanced piano playing.", contentHi: "एक हाथ 3 नोट्स बजाता है जबकि दूसरा 2।" },
        { type: "sequence", titleEn: "Right Hand: 3 Notes", titleHi: "दायां हाथ: 3 नोट्स", sequence: ["C4", "E4", "G4", "C4", "E4", "G4", "C4", "E4", "G4"], indianSequence: ["1", "2", "3", "1", "2", "3", "1", "2", "3"] },
        { type: "sequence", titleEn: "Left Hand: 2 Notes", titleHi: "बायां हाथ: 2 नोट्स", sequence: ["C3", "G3", "C3", "G3", "C3", "G3"], indianSequence: ["1", "2", "1", "2", "1", "2"] },
        { type: "complete", titleEn: "Polyrhythm Practiced! 🎉", titleHi: "पॉलीरिदम अभ्यास किया! 🎉" }
    ]
};

export const PIANO_ADVANCED_15: Lesson = {
    id: "lesson-15", level: "advanced",
    titleEn: "Sight-Reading Preparation", titleHi: "साइट-रीडिंग तैयारी",
    steps: [
        { type: "intro", titleEn: "Quick Pattern Recognition", titleHi: "तेज़ पैटर्न पहचान", contentEn: "Sight-reading requires instant pattern recognition. Practice common intervals and chord shapes at first sight.", contentHi: "साइट-रीडिंग के लिए तत्काल पैटर्न पहचान आवश्यक है।" },
        { type: "sequence", titleEn: "Random Interval Test", titleHi: "यादृच्छिक अंतराल परीक्षा", sequence: ["C4", "G4", "E4", "A4", "D4", "B4", "F4", "C5"], indianSequence: ["C", "G(5th)", "E(3rd)", "A(4th)", "D(3rd)", "B(6th)", "F(5th)", "C'(5th)"] },
        { type: "sequence", titleEn: "Mixed Patterns", titleHi: "मिश्रित पैटर्न", sequence: ["C4", "E4", "G4", "F4", "D4", "B3", "C4", "A4", "G4", "E4", "F4", "D4", "C4"], indianSequence: ["C", "E", "G", "F", "D", "B", "C", "A", "G", "E", "F", "D", "C"] },
        { type: "complete", titleEn: "Sight-Reading Ready! 🎉", titleHi: "साइट-रीडिंग तैयार! 🎉" }
    ]
};

export const PIANO_ADVANCED_16: Lesson = {
    id: "lesson-16", level: "advanced",
    titleEn: "Theme: Clair de Lune", titleHi: "थीम: क्लेयर दे ल्यून",
    steps: [
        { type: "intro", titleEn: "Debussy's Masterpiece", titleHi: "डेबसी की उत्कृष्ट कृति", contentEn: "Clair de Lune is one of the most beautiful piano pieces. We'll learn the iconic opening melody.", contentHi: "क्लेयर दे ल्यून सबसे सुंदर पियानो रचनाओं में से एक है।" },
        { type: "sequence", titleEn: "Opening Theme", titleHi: "शुरुआती थीम", sequence: ["D#4", "F4", "G4", "G#4", "G4", "F4", "D#4", "C4", "D#4"], indianSequence: ["Eb", "F", "G", "Ab", "G", "F", "Eb", "C", "Eb"] },
        { type: "sequence", titleEn: "Second Phrase", titleHi: "दूसरा वाक्य", sequence: ["G4", "G#4", "A#4", "C5", "A#4", "G#4", "G4", "F4", "G4"], indianSequence: ["G", "Ab", "Bb", "C'", "Bb", "Ab", "G", "F", "G"] },
        { type: "complete", titleEn: "Debussy Played! 🎉🌙", titleHi: "डेबसी बजाया! 🎉🌙" }
    ]
};

export const PIANO_ADVANCED_17: Lesson = {
    id: "lesson-17", level: "advanced",
    titleEn: "Theme: Chopin Prelude in E Minor", titleHi: "थीम: शोपिन प्रेल्यूड ई माइनर",
    steps: [
        { type: "intro", titleEn: "Chopin's Emotion", titleHi: "शोपिन की भावना", contentEn: "Chopin's Prelude Op.28 No.4 in E minor is deeply emotional. We'll learn the descending chromatic melody.", contentHi: "शोपिन का प्रेल्यूड गहरी भावनात्मक रचना है।" },
        { type: "sequence", titleEn: "Chopin Theme", titleHi: "शोपिन थीम", sequence: ["B4", "B4", "B4", "B4", "B4", "B4", "C5", "B4", "A4", "G#4", "A4"], indianSequence: ["B", "B", "B", "B", "B", "B", "C'", "B", "A", "G#", "A"] },
        { type: "sequence", titleEn: "Bass Movement", titleHi: "बेस गति", sequence: ["E3", "D#3", "D3", "C#3", "C3", "B2", "A#2", "A2"], indianSequence: ["E", "D#", "D", "C#", "C", "B", "Bb", "A"] },
        { type: "complete", titleEn: "Chopin Played! 🎉🎶", titleHi: "शोपिन बजाया! 🎉🎶" }
    ]
};

export const PIANO_ADVANCED_18: Lesson = {
    id: "lesson-18", level: "advanced",
    titleEn: "Improvisation: Modal Playing", titleHi: "इम्प्रोवाइज़ेशन: मोडल वादन",
    steps: [
        { type: "intro", titleEn: "Exploring Modes", titleHi: "मोड्स का अन्वेषण", contentEn: "Dorian mode (D-E-F-G-A-B-C-D) has a jazzy, cool sound. Mixolydian (G-A-B-C-D-E-F-G) sounds bluesy-rock.", contentHi: "डोरियन मोड में जैज़ी, कूल ध्वनि है। मिक्सोलिडियन ब्लूज़ी-रॉक।" },
        { type: "sequence", titleEn: "D Dorian Mode", titleHi: "डी डोरियन मोड", sequence: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5", "C5", "B4", "A4", "G4", "F4", "E4", "D4"], indianSequence: ["D", "E", "F", "G", "A", "B", "C", "D'", "C", "B", "A", "G", "F", "E", "D"] },
        { type: "sequence", titleEn: "G Mixolydian Mode", titleHi: "जी मिक्सोलिडियन", sequence: ["G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5", "F5", "E5", "D5", "C5", "B4", "A4", "G4"], indianSequence: ["G", "A", "B", "C", "D", "E", "F", "G'", "F", "E", "D", "C", "B", "A", "G"] },
        { type: "complete", titleEn: "Modal Playing Started! 🎉", titleHi: "मोडल वादन शुरू! 🎉" }
    ]
};

export const PIANO_ADVANCED_19: Lesson = {
    id: "lesson-19", level: "advanced",
    titleEn: "Performance Preparation", titleHi: "प्रदर्शन तैयारी",
    steps: [
        { type: "intro", titleEn: "Stage Ready", titleHi: "मंच तैयार", contentEn: "Prepare for performing by practicing complete musical phrases with dynamics, expression, and confidence.", contentHi: "गतिशीलता, अभिव्यक्ति और आत्मविश्वास के साथ पूर्ण संगीत वाक्यों का अभ्यास करें।" },
        { type: "sequence", titleEn: "Performance Piece", titleHi: "प्रदर्शन रचना", sequence: ["C4", "E4", "G4", "C5", "B4", "G4", "A4", "F4", "G4", "E4", "F4", "D4", "C4"], indianSequence: ["C", "E", "G", "C'", "B", "G", "A", "F", "G", "E", "F", "D", "C"] },
        { type: "sequence", titleEn: "Expressive Ending", titleHi: "अभिव्यंजक समापन", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "E5", "G5", "C6"], indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C'", "E'", "G'", "C''"] },
        { type: "complete", titleEn: "Performance Ready! 🎉", titleHi: "प्रदर्शन तैयार! 🎉" }
    ]
};

export const PIANO_ADVANCED_20: Lesson = {
    id: "lesson-20", level: "advanced",
    titleEn: "Advanced Assessment — Mastery", titleHi: "उन्नत मूल्यांकन — महारत",
    steps: [
        { type: "intro", titleEn: "Congratulations, Pianist!", titleHi: "बधाई, पियानोवादक!", contentEn: "You've completed the full 60-lesson curriculum! You know all major/minor scales, jazz voicings, classical techniques, and improvisation.", contentHi: "आपने पूर्ण 60-पाठ पाठ्यक्रम पूर्ण किया! सभी स्केल, जैज़, क्लासिकल तकनीक और इम्प्रोवाइज़ेशन सीखे।" },
        { type: "sequence", titleEn: "Final Showcase", titleHi: "अंतिम प्रदर्शन", sequence: ["C4", "E4", "G4", "B4", "C5", "B4", "G4", "E4", "F4", "A4", "C5", "E5", "D5", "B4", "G4", "C4"], indianSequence: ["CMaj7", "→", "→", "→", "arpeggio", "→", "→", "→", "FMaj7", "→", "→", "→", "G", "→", "→", "C"] },
        {
            type: "complete", titleEn: "MASTERY ACHIEVED! 🎉🏆🎹", titleHi: "महारत प्राप्त! 🎉🏆🎹",
            contentEn: "You are now a skilled pianist! Continue exploring new repertoire, genres, and performance opportunities.", contentHi: "अब आप कुशल पियानोवादक हैं! नई रचनाओं और शैलियों का अन्वेषण जारी रखें।"
        }
    ]
};

export const PIANO_ADVANCED_LESSONS: Lesson[] = [
    PIANO_ADVANCED_1, PIANO_ADVANCED_2, PIANO_ADVANCED_3,
    PIANO_ADVANCED_4, PIANO_ADVANCED_5, PIANO_ADVANCED_6,
    PIANO_ADVANCED_7, PIANO_ADVANCED_8, PIANO_ADVANCED_9,
    PIANO_ADVANCED_10, PIANO_ADVANCED_11, PIANO_ADVANCED_12,
    PIANO_ADVANCED_13, PIANO_ADVANCED_14, PIANO_ADVANCED_15,
    PIANO_ADVANCED_16, PIANO_ADVANCED_17, PIANO_ADVANCED_18,
    PIANO_ADVANCED_19, PIANO_ADVANCED_20
];
