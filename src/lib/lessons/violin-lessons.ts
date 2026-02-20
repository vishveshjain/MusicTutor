/**
 * Violin Lessons - Western Music Curriculum
 * Based on standard violin pedagogy (open strings, first position, etc.)
 * Uses standard Western notation
 */
import { Lesson } from "./lesson-types";

// ===== BEGINNER VIOLIN LESSONS =====

const VIOLIN_BEGINNER_1: Lesson = {
    id: "lesson-1", level: "beginner",
    titleEn: "Open Strings: G, D, A, E",
    titleHi: "ओपन स्ट्रिंग्स: G, D, A, E",
    steps: [
        { type: "intro", titleEn: "Welcome to Violin!", titleHi: "वायलिन में आपका स्वागत है!", contentEn: "The violin has 4 open strings tuned to G3, D4, A4, E5 (low to high). Let's learn each one.", contentHi: "वायलिन की 4 ओपन स्ट्रिंग्स G3, D4, A4, E5 में ट्यून होती हैं।" },
        { type: "demo", titleEn: "G String (lowest)", titleHi: "G स्ट्रिंग (सबसे नीचे)", note: "G3", indianNote: "G", highlightKey: "G3" },
        { type: "practice", titleEn: "Play G String", titleHi: "G स्ट्रिंग बजाएं", expectedNote: "G3", highlightKey: "G3" },
        { type: "demo", titleEn: "D String", titleHi: "D स्ट्रिंग", note: "D4", indianNote: "D", highlightKey: "D4" },
        { type: "practice", titleEn: "Play D String", titleHi: "D स्ट्रिंग बजाएं", expectedNote: "D4", highlightKey: "D4" },
        { type: "demo", titleEn: "A String", titleHi: "A स्ट्रिंग", note: "A4", indianNote: "A", highlightKey: "A4" },
        { type: "practice", titleEn: "Play A String", titleHi: "A स्ट्रिंग बजाएं", expectedNote: "A4", highlightKey: "A4" },
        { type: "demo", titleEn: "E String (highest)", titleHi: "E स्ट्रिंग (सबसे ऊपर)", note: "E5", indianNote: "E", highlightKey: "E5" },
        { type: "practice", titleEn: "Play E String", titleHi: "E स्ट्रिंग बजाएं", expectedNote: "E5", highlightKey: "E5" },
        { type: "sequence", titleEn: "All Open Strings", titleHi: "सभी ओपन स्ट्रिंग्स", sequence: ["G3", "D4", "A4", "E5"], indianSequence: ["G", "D", "A", "E"] },
        { type: "complete", titleEn: "Open Strings Done! 🎻", titleHi: "ओपन स्ट्रिंग्स सीख लीं! 🎻" }
    ]
};

const VIOLIN_BEGINNER_2: Lesson = {
    id: "lesson-2", level: "beginner",
    titleEn: "D String: First Position",
    titleHi: "D स्ट्रिंग: फर्स्ट पोज़िशन",
    steps: [
        { type: "intro", titleEn: "First Finger on D String", titleHi: "D स्ट्रिंग पर पहली उंगली", contentEn: "Place your first finger on the D string to play E. Second finger plays F#, third plays G.", contentHi: "D स्ट्रिंग पर पहली उंगली रखें।" },
        { type: "demo", titleEn: "D (open)", titleHi: "D (ओपन)", note: "D4", indianNote: "D", highlightKey: "D4" },
        { type: "practice", titleEn: "Play D", titleHi: "D बजाएं", expectedNote: "D4", highlightKey: "D4" },
        { type: "demo", titleEn: "E (1st finger)", titleHi: "E (पहली उंगली)", note: "E4", indianNote: "E", highlightKey: "E4" },
        { type: "practice", titleEn: "Play E", titleHi: "E बजाएं", expectedNote: "E4", highlightKey: "E4" },
        { type: "demo", titleEn: "F# (2nd finger)", titleHi: "F# (दूसरी उंगली)", note: "F#4", indianNote: "F#", highlightKey: "F#4" },
        { type: "practice", titleEn: "Play F#", titleHi: "F# बजाएं", expectedNote: "F#4", highlightKey: "F#4" },
        { type: "demo", titleEn: "G (3rd finger)", titleHi: "G (तीसरी उंगली)", note: "G4", indianNote: "G", highlightKey: "G4" },
        { type: "practice", titleEn: "Play G", titleHi: "G बजाएं", expectedNote: "G4", highlightKey: "G4" },
        { type: "sequence", titleEn: "D String Scale", titleHi: "D स्ट्रिंग स्केल", sequence: ["D4", "E4", "F#4", "G4"], indianSequence: ["D", "E", "F#", "G"] },
        { type: "complete", titleEn: "D String Mastered! 🎻", titleHi: "D स्ट्रिंग सीख ली! 🎻" }
    ]
};

const VIOLIN_BEGINNER_3: Lesson = {
    id: "lesson-3", level: "beginner",
    titleEn: "A String: First Position",
    titleHi: "A स्ट्रिंग: फर्स्ट पोज़िशन",
    steps: [
        { type: "intro", titleEn: "First Position on A String", titleHi: "A स्ट्रिंग पर फर्स्ट पोज़िशन", contentEn: "A string: 1st finger = B, 2nd finger = C#, 3rd finger = D.", contentHi: "A स्ट्रिंग: पहली उंगली = B, दूसरी = C#, तीसरी = D।" },
        { type: "demo", titleEn: "A (open)", titleHi: "A (ओपन)", note: "A4", indianNote: "A", highlightKey: "A4" },
        { type: "practice", titleEn: "Play A", titleHi: "A बजाएं", expectedNote: "A4", highlightKey: "A4" },
        { type: "demo", titleEn: "B (1st finger)", titleHi: "B (पहली उंगली)", note: "B4", indianNote: "B", highlightKey: "B4" },
        { type: "practice", titleEn: "Play B", titleHi: "B बजाएं", expectedNote: "B4", highlightKey: "B4" },
        { type: "demo", titleEn: "C# (2nd finger)", titleHi: "C# (दूसरी उंगली)", note: "C#5", indianNote: "C#", highlightKey: "C#5" },
        { type: "practice", titleEn: "Play C#", titleHi: "C# बजाएं", expectedNote: "C#5", highlightKey: "C#5" },
        { type: "sequence", titleEn: "A String Pattern", titleHi: "A स्ट्रिंग पैटर्न", sequence: ["A4", "B4", "C#5", "D5"], indianSequence: ["A", "B", "C#", "D"] },
        { type: "complete", titleEn: "A String Done! 🎻", titleHi: "A स्ट्रिंग पूरी! 🎻" }
    ]
};

const VIOLIN_BEGINNER_4: Lesson = {
    id: "lesson-4", level: "beginner",
    titleEn: "D Major Scale",
    titleHi: "D मेजर स्केल",
    steps: [
        { type: "intro", titleEn: "D Major Scale", titleHi: "D मेजर स्केल", contentEn: "Combine D and A strings to play a full D Major scale — the natural key of the violin.", contentHi: "D और A स्ट्रिंग मिलाकर D Major स्केल बजाएं।" },
        { type: "sequence", titleEn: "D Major Up", titleHi: "D Major ऊपर", sequence: ["D4", "E4", "F#4", "G4", "A4", "B4", "C#5", "D5"], indianSequence: ["D", "E", "F#", "G", "A", "B", "C#", "D"] },
        { type: "sequence", titleEn: "D Major Down", titleHi: "D Major नीचे", sequence: ["D5", "C#5", "B4", "A4", "G4", "F#4", "E4", "D4"], indianSequence: ["D", "C#", "B", "A", "G", "F#", "E", "D"] },
        { type: "complete", titleEn: "Full Scale! 🎻", titleHi: "पूरा स्केल! 🎻" }
    ]
};

const VIOLIN_BEGINNER_5: Lesson = {
    id: "lesson-5", level: "beginner",
    titleEn: "Twinkle Twinkle Little Star",
    titleHi: "ट्विंकल ट्विंकल लिटल स्टार",
    steps: [
        { type: "intro", titleEn: "Your First Song!", titleHi: "पहला गाना!", contentEn: "Every violinist starts with 'Twinkle Twinkle' — just like in the Suzuki method!", contentHi: "हर वायलिनिस्ट 'Twinkle Twinkle' से शुरू करता है — सुज़ुकी पद्धति की तरह!" },
        { type: "sequence", titleEn: "Twinkle Twinkle", titleHi: "ट्विंकल ट्विंकल", sequence: ["A4", "A4", "E5", "E5", "F#5", "F#5", "E5", "D5", "D5", "C#5", "C#5", "B4", "B4", "A4"], indianSequence: ["A", "A", "E", "E", "F#", "F#", "E", "D", "D", "C#", "C#", "B", "B", "A"] },
        { type: "sequence", titleEn: "Second Part", titleHi: "दूसरा भाग", sequence: ["E5", "E5", "D5", "D5", "C#5", "C#5", "B4", "E5", "E5", "D5", "D5", "C#5", "C#5", "B4"], indianSequence: ["E", "E", "D", "D", "C#", "C#", "B", "E", "E", "D", "D", "C#", "C#", "B"] },
        { type: "complete", titleEn: "Suzuki Lesson 1 Done! ⭐", titleHi: "सुज़ुकी पाठ 1 पूरा! ⭐" }
    ]
};

const VIOLIN_BEGINNER_6: Lesson = {
    id: "lesson-6", level: "beginner",
    titleEn: "E String: First Position",
    titleHi: "E स्ट्रिंग: फर्स्ट पोज़िशन",
    steps: [
        { type: "intro", titleEn: "The E String", titleHi: "E स्ट्रिंग", contentEn: "E string notes: E (open), F# (1st finger), G# (2nd finger), A (3rd finger).", contentHi: "E स्ट्रिंग: E (ओपन), F# (पहली), G# (दूसरी), A (तीसरी)।" },
        { type: "demo", titleEn: "E (open)", titleHi: "E (ओपन)", note: "E5", indianNote: "E", highlightKey: "E5" },
        { type: "demo", titleEn: "F# (1st finger)", titleHi: "F# (पहली)", note: "F#5", indianNote: "F#", highlightKey: "F#5" },
        { type: "practice", titleEn: "Play F#", titleHi: "F# बजाएं", expectedNote: "F#5", highlightKey: "F#5" },
        { type: "demo", titleEn: "G# (2nd finger)", titleHi: "G# (दूसरी)", note: "G#5", indianNote: "G#", highlightKey: "G#5" },
        { type: "practice", titleEn: "Play G#", titleHi: "G# बजाएं", expectedNote: "G#5", highlightKey: "G#5" },
        { type: "sequence", titleEn: "E String Pattern", titleHi: "E स्ट्रिंग पैटर्न", sequence: ["E5", "F#5", "G#5", "A5"], indianSequence: ["E", "F#", "G#", "A"] },
        { type: "complete", titleEn: "E String Done! 🎻", titleHi: "E स्ट्रिंग पूरी! 🎻" }
    ]
};

const VIOLIN_BEGINNER_7: Lesson = {
    id: "lesson-7", level: "beginner",
    titleEn: "G String: First Position",
    titleHi: "G स्ट्रिंग: फर्स्ट पोज़िशन",
    steps: [
        { type: "intro", titleEn: "The G String", titleHi: "G स्ट्रिंग", contentEn: "G string notes: G (open), A (1st finger), B (2nd finger), C (3rd finger).", contentHi: "G स्ट्रिंग: G (ओपन), A (पहली), B (दूसरी), C (तीसरी)।" },
        { type: "demo", titleEn: "G (open)", titleHi: "G (ओपन)", note: "G3", indianNote: "G", highlightKey: "G3" },
        { type: "demo", titleEn: "A (1st finger)", titleHi: "A (पहली)", note: "A3", indianNote: "A", highlightKey: "A3" },
        { type: "practice", titleEn: "Play A", titleHi: "A बजाएं", expectedNote: "A3", highlightKey: "A3" },
        { type: "sequence", titleEn: "G String Scale", titleHi: "G स्ट्रिंग स्केल", sequence: ["G3", "A3", "B3", "C4"], indianSequence: ["G", "A", "B", "C"] },
        { type: "complete", titleEn: "G String Done! 🎻", titleHi: "G स्ट्रिंग पूरी! 🎻" }
    ]
};

const VIOLIN_BEGINNER_8: Lesson = {
    id: "lesson-8", level: "beginner",
    titleEn: "G Major Scale (Two Octaves)",
    titleHi: "G मेजर स्केल (दो ओक्टेव)",
    steps: [
        { type: "intro", titleEn: "G Major Scale", titleHi: "G मेजर स्केल", contentEn: "G Major across two strings — this is one of the most important violin scales.", contentHi: "G Major दो स्ट्रिंग्स पर — वायलिन का सबसे ज़रूरी स्केल।" },
        { type: "sequence", titleEn: "G Major Up", titleHi: "G Major ऊपर", sequence: ["G3", "A3", "B3", "C4", "D4", "E4", "F#4", "G4"], indianSequence: ["G", "A", "B", "C", "D", "E", "F#", "G"] },
        { type: "sequence", titleEn: "G Major Down", titleHi: "G Major नीचे", sequence: ["G4", "F#4", "E4", "D4", "C4", "B3", "A3", "G3"], indianSequence: ["G", "F#", "E", "D", "C", "B", "A", "G"] },
        { type: "complete", titleEn: "G Major Done! 🎻", titleHi: "G Major पूरा! 🎻" }
    ]
};

const VIOLIN_BEGINNER_9: Lesson = {
    id: "lesson-9", level: "beginner",
    titleEn: "Ode to Joy",
    titleHi: "ओड टू जॉय",
    steps: [
        { type: "intro", titleEn: "Beethoven for Violin", titleHi: "वायलिन पर बीथोवन", contentEn: "Play Beethoven's 'Ode to Joy' on the A and E strings.", contentHi: "A और E स्ट्रिंग्स पर बीथोवन की 'Ode to Joy' बजाएं।" },
        { type: "sequence", titleEn: "Main Theme", titleHi: "मुख्य थीम", sequence: ["F#4", "F#4", "G4", "A4", "A4", "G4", "F#4", "E4", "D4", "D4", "E4", "F#4", "F#4", "E4", "E4"], indianSequence: ["F#", "F#", "G", "A", "A", "G", "F#", "E", "D", "D", "E", "F#", "F#", "E", "E"] },
        { type: "complete", titleEn: "Beautiful! 🎵", titleHi: "खूबसूरत! 🎵" }
    ]
};

const VIOLIN_BEGINNER_10: Lesson = {
    id: "lesson-10", level: "beginner",
    titleEn: "Lightly Row (Suzuki)",
    titleHi: "लाइटली रो (सुज़ुकी)",
    steps: [
        { type: "intro", titleEn: "Suzuki Book 1", titleHi: "सुज़ुकी बुक 1", contentEn: "'Lightly Row' from Suzuki Violin School Book 1 — a student favorite.", contentHi: "सुज़ुकी वायलिन स्कूल बुक 1 से 'Lightly Row'।" },
        { type: "sequence", titleEn: "Lightly Row", titleHi: "लाइटली रो", sequence: ["E5", "C#5", "C#5", "D5", "B4", "B4", "A4", "B4", "C#5", "D5", "E5", "E5", "E5"], indianSequence: ["E", "C#", "C#", "D", "B", "B", "A", "B", "C#", "D", "E", "E", "E"] },
        { type: "sequence", titleEn: "Second Half", titleHi: "दूसरा भाग", sequence: ["E5", "C#5", "C#5", "C#5", "D5", "B4", "B4", "B4", "A4", "B4", "C#5", "D5", "E5", "C#5", "A4"], indianSequence: ["E", "C#", "C#", "C#", "D", "B", "B", "B", "A", "B", "C#", "D", "E", "C#", "A"] },
        { type: "complete", titleEn: "Suzuki Progress! 🎻", titleHi: "सुज़ुकी प्रगति! 🎻" }
    ]
};

export const VIOLIN_BEGINNER_LESSONS: Lesson[] = [
    VIOLIN_BEGINNER_1, VIOLIN_BEGINNER_2, VIOLIN_BEGINNER_3, VIOLIN_BEGINNER_4, VIOLIN_BEGINNER_5,
    VIOLIN_BEGINNER_6, VIOLIN_BEGINNER_7, VIOLIN_BEGINNER_8, VIOLIN_BEGINNER_9, VIOLIN_BEGINNER_10,
];

// ===== INTERMEDIATE VIOLIN LESSONS =====

const VIOLIN_INTER_1: Lesson = {
    id: "lesson-1", level: "intermediate", titleEn: "A Major Scale", titleHi: "A मेजर स्केल", steps: [
        { type: "intro", titleEn: "A Major Scale", titleHi: "A मेजर स्केल", contentEn: "A Major (three sharps: F#, C#, G#) — the brilliant key for violin.", contentHi: "A Major (तीन शार्प) — वायलिन के लिए शानदार कुंजी।" },
        { type: "sequence", titleEn: "A Major Up", titleHi: "A Major ऊपर", sequence: ["A4", "B4", "C#5", "D5", "E5", "F#5", "G#5", "A5"], indianSequence: ["A", "B", "C#", "D", "E", "F#", "G#", "A"] },
        { type: "sequence", titleEn: "A Major Down", titleHi: "A Major नीचे", sequence: ["A5", "G#5", "F#5", "E5", "D5", "C#5", "B4", "A4"], indianSequence: ["A", "G#", "F#", "E", "D", "C#", "B", "A"] },
        { type: "complete", titleEn: "A Major Done! 🎻", titleHi: "A Major पूरा! 🎻" }
    ]
};

const VIOLIN_INTER_2: Lesson = {
    id: "lesson-2", level: "intermediate", titleEn: "C Major Scale", titleHi: "C मेजर स्केल", steps: [
        { type: "intro", titleEn: "C Major Scale", titleHi: "C मेजर स्केल", contentEn: "No sharps or flats. Watch your second finger placement — it stays low.", contentHi: "कोई शार्प या फ्लैट नहीं। दूसरी उंगली नीचे रखें।" },
        { type: "sequence", titleEn: "C Major Up", titleHi: "C Major ऊपर", sequence: ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"], indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C"] },
        { type: "sequence", titleEn: "C Major Down", titleHi: "C Major नीचे", sequence: ["C5", "B4", "A4", "G4", "F4", "E4", "D4", "C4"], indianSequence: ["C", "B", "A", "G", "F", "E", "D", "C"] },
        { type: "complete", titleEn: "C Major Done! 🎻", titleHi: "C Major पूरा! 🎻" }
    ]
};

const VIOLIN_INTER_3: Lesson = {
    id: "lesson-3", level: "intermediate", titleEn: "D Minor Scale", titleHi: "D माइनर स्केल", steps: [
        { type: "intro", titleEn: "Natural Minor Scale", titleHi: "नैचुरल माइनर स्केल", contentEn: "D Natural Minor: D-E-F-G-A-Bb-C-D. Notice the darker, emotional sound.", contentHi: "D नैचुरल माइनर: D-E-F-G-A-Bb-C-D। गहरी, भावनात्मक ध्वनि।" },
        { type: "sequence", titleEn: "D Minor Up", titleHi: "D Minor ऊपर", sequence: ["D4", "E4", "F4", "G4", "A4", "A#4", "C5", "D5"], indianSequence: ["D", "E", "F", "G", "A", "Bb", "C", "D"] },
        { type: "sequence", titleEn: "D Minor Down", titleHi: "D Minor नीचे", sequence: ["D5", "C5", "A#4", "A4", "G4", "F4", "E4", "D4"], indianSequence: ["D", "C", "Bb", "A", "G", "F", "E", "D"] },
        { type: "complete", titleEn: "Minor Mastered! 🎻", titleHi: "माइनर सीख लिया! 🎻" }
    ]
};

const VIOLIN_INTER_4: Lesson = {
    id: "lesson-4", level: "intermediate", titleEn: "Slurs and Bowing", titleHi: "स्लर और बोइंग", steps: [
        { type: "intro", titleEn: "Smooth Bowing", titleHi: "स्मूथ बोइंग", contentEn: "Practice playing multiple notes in one bow stroke (slurred). This creates a smooth, connected sound.", contentHi: "एक बो स्ट्रोक में कई नोट्स बजाने का अभ्यास करें।" },
        { type: "sequence", titleEn: "Slurred Scale", titleHi: "स्लर्ड स्केल", sequence: ["D4", "E4", "F#4", "G4", "A4", "B4", "A4", "G4", "F#4", "E4", "D4"], indianSequence: ["D", "E", "F#", "G", "A", "B", "A", "G", "F#", "E", "D"] },
        { type: "complete", titleEn: "Smooth! 🎻", titleHi: "स्मूथ! 🎻" }
    ]
};

const VIOLIN_INTER_5: Lesson = {
    id: "lesson-5", level: "intermediate", titleEn: "Minuet in G (Bach)", titleHi: "मिन्यूएट इन G (बाख)", steps: [
        { type: "intro", titleEn: "Bach's Minuet", titleHi: "बाख का मिन्यूएट", contentEn: "From Suzuki Book 1 — one of the most beloved beginner pieces.", contentHi: "सुज़ुकी बुक 1 से — सबसे प्रिय शुरुआती रचनाओं में से एक।" },
        { type: "sequence", titleEn: "Minuet Theme", titleHi: "मिन्यूएट थीम", sequence: ["D5", "G4", "A4", "B4", "C5", "D5", "G4", "G4", "E5", "C5", "D5", "E5", "F#5", "G5"], indianSequence: ["D", "G", "A", "B", "C", "D", "G", "G", "E", "C", "D", "E", "F#", "G"] },
        { type: "complete", titleEn: "Bach Played! 🎶", titleHi: "बाख बजाया! 🎶" }
    ]
};

const VIOLIN_INTER_6: Lesson = {
    id: "lesson-6", level: "intermediate", titleEn: "Arpeggios", titleHi: "अर्पेजिओ", steps: [
        { type: "intro", titleEn: "Major Arpeggios", titleHi: "मेजर अर्पेजिओ", contentEn: "Arpeggios (broken chords) build finger agility and intonation.", contentHi: "अर्पेजिओ (टूटे कॉर्ड) उंगली की चपलता बनाते हैं।" },
        { type: "sequence", titleEn: "D Major Arpeggio", titleHi: "D Major अर्पेजिओ", sequence: ["D4", "F#4", "A4", "D5", "A4", "F#4", "D4"], indianSequence: ["D", "F#", "A", "D", "A", "F#", "D"] },
        { type: "sequence", titleEn: "G Major Arpeggio", titleHi: "G Major अर्पेजिओ", sequence: ["G3", "B3", "D4", "G4", "D4", "B3", "G3"], indianSequence: ["G", "B", "D", "G", "D", "B", "G"] },
        { type: "complete", titleEn: "Arpeggio Master! 🎻", titleHi: "अर्पेजिओ मास्टर! 🎻" }
    ]
};

const VIOLIN_INTER_7: Lesson = {
    id: "lesson-7", level: "intermediate", titleEn: "Vibrato Introduction", titleHi: "विब्राटो परिचय", steps: [
        { type: "intro", titleEn: "Adding Vibrato", titleHi: "विब्राटो जोड़ें", contentEn: "Vibrato is a slight oscillation of pitch that adds warmth and expression. Start slowly on long notes.", contentHi: "विब्राटो पिच का हल्का कंपन है जो गर्मजोशी जोड़ता है।" },
        { type: "sequence", titleEn: "Long Notes for Vibrato", titleHi: "विब्राटो के लिए लंबे नोट्स", sequence: ["A4", "D5", "A4", "E5", "D5"], indianSequence: ["A", "D", "A", "E", "D"] },
        { type: "complete", titleEn: "Vibrato Started! 🎻", titleHi: "विब्राटो शुरू! 🎻" }
    ]
};

const VIOLIN_INTER_8: Lesson = {
    id: "lesson-8", level: "intermediate", titleEn: "Gavotte (Gossec)", titleHi: "गैवोट (गोसेक)", steps: [
        { type: "intro", titleEn: "Gavotte by Gossec", titleHi: "गोसेक का गैवोट", contentEn: "A lively Baroque piece from Suzuki Book 1.", contentHi: "सुज़ुकी बुक 1 से एक जीवंत बारोक रचना।" },
        { type: "sequence", titleEn: "Gavotte Theme", titleHi: "गैवोट थीम", sequence: ["G4", "D4", "G4", "A4", "B4", "G4", "A4", "B4", "C5", "D5"], indianSequence: ["G", "D", "G", "A", "B", "G", "A", "B", "C", "D"] },
        { type: "sequence", titleEn: "Second Theme", titleHi: "दूसरी थीम", sequence: ["E5", "D5", "C5", "B4", "A4", "G4", "F#4", "G4"], indianSequence: ["E", "D", "C", "B", "A", "G", "F#", "G"] },
        { type: "complete", titleEn: "Baroque Beauty! 🎻", titleHi: "बारोक ब्यूटी! 🎻" }
    ]
};

const VIOLIN_INTER_9: Lesson = {
    id: "lesson-9", level: "intermediate", titleEn: "Bb Major Scale", titleHi: "Bb मेजर स्केल", steps: [
        { type: "intro", titleEn: "Bb Major Scale", titleHi: "Bb मेजर स्केल", contentEn: "Bb Major (two flats) requires low 1st finger on A and E strings.", contentHi: "Bb Major (दो फ्लैट) A और E स्ट्रिंग्स पर नीचे पहली उंगली चाहिए।" },
        { type: "sequence", titleEn: "Bb Major Up", titleHi: "Bb Major ऊपर", sequence: ["A#3", "C4", "D4", "D#4", "F4", "G4", "A4", "A#4"], indianSequence: ["Bb", "C", "D", "Eb", "F", "G", "A", "Bb"] },
        { type: "complete", titleEn: "Bb Major Done! 🎻", titleHi: "Bb Major पूरा! 🎻" }
    ]
};

const VIOLIN_INTER_10: Lesson = {
    id: "lesson-10", level: "intermediate", titleEn: "Canon in D (Pachelbel)", titleHi: "कैनन इन D (पैकेलबेल)", steps: [
        { type: "intro", titleEn: "Pachelbel's Canon", titleHi: "पैकेलबेल का कैनन", contentEn: "One of the most famous classical pieces — often played at weddings.", contentHi: "सबसे प्रसिद्ध शास्त्रीय रचनाओं में से एक।" },
        { type: "sequence", titleEn: "Canon Theme", titleHi: "कैनन थीम", sequence: ["F#5", "E5", "D5", "C#5", "B4", "A4", "B4", "C#5"], indianSequence: ["F#", "E", "D", "C#", "B", "A", "B", "C#"] },
        { type: "sequence", titleEn: "Canon Part 2", titleHi: "कैनन भाग 2", sequence: ["D5", "C#5", "B4", "A4", "G4", "F#4", "G4", "E4"], indianSequence: ["D", "C#", "B", "A", "G", "F#", "G", "E"] },
        { type: "complete", titleEn: "Pachelbel Played! 🎶", titleHi: "पैकेलबेल बजाया! 🎶" }
    ]
};

export const VIOLIN_INTERMEDIATE_LESSONS: Lesson[] = [
    VIOLIN_INTER_1, VIOLIN_INTER_2, VIOLIN_INTER_3, VIOLIN_INTER_4, VIOLIN_INTER_5,
    VIOLIN_INTER_6, VIOLIN_INTER_7, VIOLIN_INTER_8, VIOLIN_INTER_9, VIOLIN_INTER_10,
];

// ===== ADVANCED VIOLIN LESSONS =====

const VIOLIN_ADV_1: Lesson = {
    id: "lesson-1", level: "advanced", titleEn: "Third Position", titleHi: "थर्ड पोज़िशन", steps: [
        { type: "intro", titleEn: "Shifting to Third Position", titleHi: "थर्ड पोज़िशन में शिफ्ट", contentEn: "Move your left hand up the neck. 1st finger on A string now plays D.", contentHi: "बाएं हाथ को गर्दन पर ऊपर ले जाएं।" },
        { type: "sequence", titleEn: "A String in 3rd Position", titleHi: "A स्ट्रिंग 3rd पोज़िशन", sequence: ["D5", "E5", "F#5", "G5", "A5"], indianSequence: ["D", "E", "F#", "G", "A"] },
        { type: "sequence", titleEn: "Position Shift Exercise", titleHi: "पोज़िशन शिफ्ट एक्सरसाइज़", sequence: ["A4", "B4", "C#5", "D5", "E5", "F#5", "G5", "A5"], indianSequence: ["A", "B", "C#", "D", "E", "F#", "G", "A"] },
        { type: "complete", titleEn: "Position Shifted! 🎻", titleHi: "पोज़िशन शिफ्ट! 🎻" }
    ]
};

const VIOLIN_ADV_2: Lesson = {
    id: "lesson-2", level: "advanced", titleEn: "G Minor (Melodic)", titleHi: "G माइनर (मेलोडिक)", steps: [
        { type: "intro", titleEn: "Melodic Minor Scale", titleHi: "मेलोडिक माइनर", contentEn: "G Melodic Minor raises the 6th and 7th going up, lowers them coming down.", contentHi: "G मेलोडिक माइनर ऊपर जाते समय 6th और 7th बढ़ाता है।" },
        { type: "sequence", titleEn: "G Melodic Minor Up", titleHi: "ऊपर", sequence: ["G3", "A3", "A#3", "C4", "D4", "E4", "F#4", "G4"], indianSequence: ["G", "A", "Bb", "C", "D", "E", "F#", "G"] },
        { type: "sequence", titleEn: "G Melodic Minor Down", titleHi: "नीचे", sequence: ["G4", "F4", "D#4", "D4", "C4", "A#3", "A3", "G3"], indianSequence: ["G", "F", "Eb", "D", "C", "Bb", "A", "G"] },
        { type: "complete", titleEn: "Melodic Minor! 🎻", titleHi: "मेलोडिक माइनर! 🎻" }
    ]
};

const VIOLIN_ADV_3: Lesson = {
    id: "lesson-3", level: "advanced", titleEn: "Double Stops", titleHi: "डबल स्टॉप्स", steps: [
        { type: "intro", titleEn: "Playing Two Notes Together", titleHi: "दो नोट्स साथ बजाएं", contentEn: "Double stops are two notes played simultaneously on adjacent strings.", contentHi: "डबल स्टॉप्स दो नोट्स हैं जो एक साथ बजते हैं।" },
        { type: "sequence", titleEn: "Thirds", titleHi: "थर्ड्स", sequence: ["D4", "A4", "E4", "B4", "F#4", "C#5", "G4", "D5"], indianSequence: ["D+A", "E+B", "F#+C#", "G+D"] },
        { type: "complete", titleEn: "Double Stopped! 🎻", titleHi: "डबल स्टॉप! 🎻" }
    ]
};

const VIOLIN_ADV_4: Lesson = {
    id: "lesson-4", level: "advanced", titleEn: "Vivaldi: Spring", titleHi: "विवाल्डी: स्प्रिंग", steps: [
        { type: "intro", titleEn: "The Four Seasons: Spring", titleHi: "चार मौसम: स्प्रिंग", contentEn: "The opening theme from Vivaldi's iconic 'Spring' from The Four Seasons.", contentHi: "विवाल्डी के 'स्प्रिंग' की ओपनिंग थीम।" },
        { type: "sequence", titleEn: "Spring Theme", titleHi: "स्प्रिंग थीम", sequence: ["E5", "E5", "E5", "F#5", "E5", "E5", "D5", "C#5", "D5", "E5", "E5"], indianSequence: ["E", "E", "E", "F#", "E", "E", "D", "C#", "D", "E", "E"] },
        { type: "complete", titleEn: "Vivaldi Played! 🌸", titleHi: "विवाल्डी बजाया! 🌸" }
    ]
};

const VIOLIN_ADV_5: Lesson = {
    id: "lesson-5", level: "advanced", titleEn: "Spiccato Bowing", titleHi: "स्पिक्काटो बोइंग", steps: [
        { type: "intro", titleEn: "Bouncing Bow", titleHi: "बाउंसिंग बो", contentEn: "Spiccato is a bouncing bow technique for fast, light passages.", contentHi: "स्पिक्काटो तेज, हल्के पैसेज के लिए बाउंसिंग बो तकनीक है।" },
        { type: "sequence", titleEn: "Spiccato Exercise", titleHi: "स्पिक्काटो एक्सरसाइज़", sequence: ["A4", "B4", "C#5", "D5", "E5", "D5", "C#5", "B4", "A4", "B4", "C#5", "D5"], indianSequence: ["A", "B", "C#", "D", "E", "D", "C#", "B", "A", "B", "C#", "D"] },
        { type: "complete", titleEn: "Bouncy! 🎻", titleHi: "बाउंसी! 🎻" }
    ]
};

const VIOLIN_ADV_6: Lesson = {
    id: "lesson-6", level: "advanced", titleEn: "Czardas (Monti)", titleHi: "ज़ारदास (मोंटी)", steps: [
        { type: "intro", titleEn: "Czardas Opening", titleHi: "ज़ारदास ओपनिंग", contentEn: "The slow, passionate opening of Monti's famous Czardas.", contentHi: "मोंटी के प्रसिद्ध ज़ारदास की धीमी, भावुक शुरुआत।" },
        { type: "sequence", titleEn: "Czardas Theme", titleHi: "ज़ारदास थीम", sequence: ["D5", "C#5", "D5", "E5", "F#5", "E5", "D5", "C#5", "B4", "A4"], indianSequence: ["D", "C#", "D", "E", "F#", "E", "D", "C#", "B", "A"] },
        { type: "complete", titleEn: "Czardas! 💃", titleHi: "ज़ारदास! 💃" }
    ]
};

const VIOLIN_ADV_7: Lesson = {
    id: "lesson-7", level: "advanced", titleEn: "Chromatic Scale", titleHi: "क्रोमैटिक स्केल", steps: [
        { type: "intro", titleEn: "Chromatic Scale", titleHi: "क्रोमैटिक स्केल", contentEn: "Every semitone — tests your intonation and finger placement.", contentHi: "हर सेमीटोन — इंटोनेशन और उंगली प्लेसमेंट की परीक्षा।" },
        { type: "sequence", titleEn: "Chromatic Up", titleHi: "क्रोमैटिक ऊपर", sequence: ["A4", "A#4", "B4", "C5", "C#5", "D5", "D#5", "E5", "F5", "F#5", "G5", "G#5", "A5"], indianSequence: ["A", "Bb", "B", "C", "C#", "D", "Eb", "E", "F", "F#", "G", "G#", "A"] },
        { type: "complete", titleEn: "Chromatic Done! 🎻", titleHi: "क्रोमैटिक पूरा! 🎻" }
    ]
};

const VIOLIN_ADV_8: Lesson = {
    id: "lesson-8", level: "advanced", titleEn: "Bach: Partita No. 3 (Preludio)", titleHi: "बाख: पार्टिटा नं. 3", steps: [
        { type: "intro", titleEn: "Bach Preludio", titleHi: "बाख प्रेलूडियो", contentEn: "The opening of Bach's Partita No. 3 in E Major — a violin masterwork.", contentHi: "बाख के पार्टिटा नं. 3 की शुरुआत — वायलिन की उत्कृष्ट रचना।" },
        { type: "sequence", titleEn: "Preludio Opening", titleHi: "प्रेलूडियो ओपनिंग", sequence: ["E5", "B4", "E5", "G#5", "B4", "E5", "G#5", "B5", "A5", "G#5", "F#5", "E5"], indianSequence: ["E", "B", "E", "G#", "B", "E", "G#", "B", "A", "G#", "F#", "E"] },
        { type: "complete", titleEn: "Bach Master! 🎻", titleHi: "बाख मास्टर! 🎻" }
    ]
};

const VIOLIN_ADV_9: Lesson = {
    id: "lesson-9", level: "advanced", titleEn: "Paganini Caprice Theme", titleHi: "पगानिनी कैप्रिस थीम", steps: [
        { type: "intro", titleEn: "Paganini's 24th Caprice", titleHi: "पगानिनी का 24वां कैप्रिस", contentEn: "The iconic theme from Paganini's 24th Caprice — the ultimate violin showpiece.", contentHi: "पगानिनी के 24वें कैप्रिस की प्रतिष्ठित थीम।" },
        { type: "sequence", titleEn: "Caprice Theme", titleHi: "कैप्रिस थीम", sequence: ["A5", "G#5", "A5", "E5", "F5", "D5", "E5", "C5", "D5", "B4", "C5", "A4"], indianSequence: ["A", "G#", "A", "E", "F", "D", "E", "C", "D", "B", "C", "A"] },
        { type: "complete", titleEn: "Paganini! 🔥", titleHi: "पगानिनी! 🔥" }
    ]
};

const VIOLIN_ADV_10: Lesson = {
    id: "lesson-10", level: "advanced", titleEn: "Meditation (Thaïs)", titleHi: "मेडिटेशन (ताइस)", steps: [
        { type: "intro", titleEn: "Massenet's Meditation", titleHi: "मासने का मेडिटेशन", contentEn: "One of the most beautiful violin melodies ever written — requires expressive vibrato and phrasing.", contentHi: "अब तक लिखी गई सबसे खूबसूरत वायलिन धुनों में से एक।" },
        { type: "sequence", titleEn: "Meditation Theme", titleHi: "मेडिटेशन थीम", sequence: ["D5", "A4", "D5", "E5", "F#5", "A5", "G5", "F#5", "E5", "D5", "E5", "D5"], indianSequence: ["D", "A", "D", "E", "F#", "A", "G", "F#", "E", "D", "E", "D"] },
        { type: "complete", titleEn: "Meditation Complete 🧘", titleHi: "मेडिटेशन पूरा 🧘" }
    ]
};

export const VIOLIN_ADVANCED_LESSONS: Lesson[] = [
    VIOLIN_ADV_1, VIOLIN_ADV_2, VIOLIN_ADV_3, VIOLIN_ADV_4, VIOLIN_ADV_5,
    VIOLIN_ADV_6, VIOLIN_ADV_7, VIOLIN_ADV_8, VIOLIN_ADV_9, VIOLIN_ADV_10,
];
