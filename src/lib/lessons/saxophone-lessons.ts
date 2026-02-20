/**
 * Saxophone Lessons - Western Music Curriculum
 * Based on standard alto saxophone pedagogy
 * Notes use concert pitch Western notation (C, D, E, F, G, A, B)
 */
import { Lesson } from "./lesson-types";

// ===== BEGINNER SAXOPHONE LESSONS =====

const SAX_BEGINNER_1: Lesson = {
    id: "lesson-1", level: "beginner",
    titleEn: "Your First Notes: B, A, G",
    titleHi: "पहले नोट्स: B, A, G",
    steps: [
        { type: "intro", titleEn: "Welcome to Saxophone!", titleHi: "सैक्सोफोन में आपका स्वागत है!", contentEn: "We'll start with three easy notes: B, A, and G. These are the first notes every saxophone player learns.", contentHi: "हम तीन आसान नोट्स से शुरू करेंगे: B, A और G।" },
        { type: "demo", titleEn: "Listen to B", titleHi: "B सुनें", note: "B4", indianNote: "B", highlightKey: "B4" },
        { type: "practice", titleEn: "Play B", titleHi: "B बजाएं", expectedNote: "B4", highlightKey: "B4" },
        { type: "demo", titleEn: "Listen to A", titleHi: "A सुनें", note: "A4", indianNote: "A", highlightKey: "A4" },
        { type: "practice", titleEn: "Play A", titleHi: "A बजाएं", expectedNote: "A4", highlightKey: "A4" },
        { type: "demo", titleEn: "Listen to G", titleHi: "G सुनें", note: "G4", indianNote: "G", highlightKey: "G4" },
        { type: "practice", titleEn: "Play G", titleHi: "G बजाएं", expectedNote: "G4", highlightKey: "G4" },
        { type: "sequence", titleEn: "Play B-A-G", titleHi: "B-A-G बजाएं", sequence: ["B4", "A4", "G4"], indianSequence: ["B", "A", "G"] },
        { type: "complete", titleEn: "Great Start! 🎷", titleHi: "शानदार शुरुआत! 🎷" }
    ]
};

const SAX_BEGINNER_2: Lesson = {
    id: "lesson-2", level: "beginner",
    titleEn: "Adding Notes: C and D",
    titleHi: "नए नोट्स: C और D",
    steps: [
        { type: "intro", titleEn: "Two More Notes", titleHi: "दो और नोट्स", contentEn: "Today we add C and D to our range. Now you can play five notes!", contentHi: "आज हम C और D जोड़ रहे हैं।" },
        { type: "demo", titleEn: "Listen to C", titleHi: "C सुनें", note: "C5", indianNote: "C", highlightKey: "C5" },
        { type: "practice", titleEn: "Play C", titleHi: "C बजाएं", expectedNote: "C5", highlightKey: "C5" },
        { type: "demo", titleEn: "Listen to D", titleHi: "D सुनें", note: "D5", indianNote: "D", highlightKey: "D5" },
        { type: "practice", titleEn: "Play D", titleHi: "D बजाएं", expectedNote: "D5", highlightKey: "D5" },
        { type: "sequence", titleEn: "Scale Up: G-A-B-C-D", titleHi: "स्केल ऊपर: G-A-B-C-D", sequence: ["G4", "A4", "B4", "C5", "D5"], indianSequence: ["G", "A", "B", "C", "D"] },
        { type: "sequence", titleEn: "Scale Down: D-C-B-A-G", titleHi: "स्केल नीचे: D-C-B-A-G", sequence: ["D5", "C5", "B4", "A4", "G4"], indianSequence: ["D", "C", "B", "A", "G"] },
        { type: "complete", titleEn: "Five Notes! 🎷", titleHi: "पांच नोट्स! 🎷" }
    ]
};

const SAX_BEGINNER_3: Lesson = {
    id: "lesson-3", level: "beginner",
    titleEn: "Low Notes: E and F",
    titleHi: "नीचे के नोट्स: E और F",
    steps: [
        { type: "intro", titleEn: "Going Lower", titleHi: "नीचे जाएं", contentEn: "Let's learn E and F — the lower notes need more air support.", contentHi: "E और F सीखें — नीचे के नोट्स में ज़्यादा हवा चाहिए।" },
        { type: "demo", titleEn: "Listen to F", titleHi: "F सुनें", note: "F4", indianNote: "F", highlightKey: "F4" },
        { type: "practice", titleEn: "Play F", titleHi: "F बजाएं", expectedNote: "F4", highlightKey: "F4" },
        { type: "demo", titleEn: "Listen to E", titleHi: "E सुनें", note: "E4", indianNote: "E", highlightKey: "E4" },
        { type: "practice", titleEn: "Play E", titleHi: "E बजाएं", expectedNote: "E4", highlightKey: "E4" },
        { type: "sequence", titleEn: "E to G", titleHi: "E से G", sequence: ["E4", "F4", "G4"], indianSequence: ["E", "F", "G"] },
        { type: "sequence", titleEn: "Going Down: G-F-E", titleHi: "नीचे: G-F-E", sequence: ["G4", "F4", "E4"], indianSequence: ["G", "F", "E"] },
        { type: "complete", titleEn: "Low Notes Mastered! 🎷", titleHi: "नीचे के नोट्स सीख लिए! 🎷" }
    ]
};

const SAX_BEGINNER_4: Lesson = {
    id: "lesson-4", level: "beginner",
    titleEn: "Adding D (Low)",
    titleHi: "D (नीचे) जोड़ें",
    steps: [
        { type: "intro", titleEn: "The Low D", titleHi: "नीचे का D", contentEn: "Low D is one of the fundamental saxophone notes. Use all fingers!", contentHi: "Low D सैक्सोफोन का बुनियादी नोट है।" },
        { type: "demo", titleEn: "Listen to Low D", titleHi: "Low D सुनें", note: "D4", indianNote: "D", highlightKey: "D4" },
        { type: "practice", titleEn: "Play Low D", titleHi: "Low D बजाएं", expectedNote: "D4", highlightKey: "D4" },
        { type: "sequence", titleEn: "D Major Scale (One Octave)", titleHi: "D मेजर स्केल", sequence: ["D4", "E4", "F#4", "G4", "A4", "B4", "C5", "D5"], indianSequence: ["D", "E", "F#", "G", "A", "B", "C", "D"] },
        { type: "sequence", titleEn: "Down the Scale", titleHi: "स्केल नीचे", sequence: ["D5", "C5", "B4", "A4", "G4", "F#4", "E4", "D4"], indianSequence: ["D", "C", "B", "A", "G", "F#", "E", "D"] },
        { type: "complete", titleEn: "Full Scale! 🎷", titleHi: "पूरा स्केल! 🎷" }
    ]
};

const SAX_BEGINNER_5: Lesson = {
    id: "lesson-5", level: "beginner",
    titleEn: "Hot Cross Buns",
    titleHi: "हॉट क्रॉस बन्स",
    steps: [
        { type: "intro", titleEn: "Your First Song!", titleHi: "पहला गाना!", contentEn: "Let's play 'Hot Cross Buns' — one of the first songs for saxophone. Uses only B, A, G.", contentHi: "'Hot Cross Buns' बजाएं — सैक्सोफोन का पहला गाना।" },
        { type: "sequence", titleEn: "Hot Cross Buns", titleHi: "हॉट क्रॉस बन्स", sequence: ["B4", "A4", "G4", "B4", "A4", "G4", "G4", "G4", "A4", "A4", "B4", "A4", "G4"], indianSequence: ["B", "A", "G", "B", "A", "G", "G", "G", "A", "A", "B", "A", "G"] },
        { type: "complete", titleEn: "Your First Song! 🎶", titleHi: "पहला गाना बजाया! 🎶" }
    ]
};

const SAX_BEGINNER_6: Lesson = {
    id: "lesson-6", level: "beginner",
    titleEn: "Mary Had a Little Lamb",
    titleHi: "मेरी हैड अ लिटल लैम्ब",
    steps: [
        { type: "intro", titleEn: "A Classic Melody", titleHi: "एक क्लासिक धुन", contentEn: "Play 'Mary Had a Little Lamb' using B, A, G notes.", contentHi: "B, A, G नोट्स से 'Mary Had a Little Lamb' बजाएं।" },
        { type: "sequence", titleEn: "Mary Had a Little Lamb", titleHi: "मेरी हैड अ लिटल लैम्ब", sequence: ["B4", "A4", "G4", "A4", "B4", "B4", "B4", "A4", "A4", "A4", "B4", "D5", "D5"], indianSequence: ["B", "A", "G", "A", "B", "B", "B", "A", "A", "A", "B", "D", "D"] },
        { type: "sequence", titleEn: "Full Melody", titleHi: "पूरी धुन", sequence: ["B4", "A4", "G4", "A4", "B4", "B4", "B4", "B4", "A4", "A4", "B4", "A4", "G4"], indianSequence: ["B", "A", "G", "A", "B", "B", "B", "B", "A", "A", "B", "A", "G"] },
        { type: "complete", titleEn: "Beautiful! 🐑", titleHi: "खूबसूरत! 🐑" }
    ]
};

const SAX_BEGINNER_7: Lesson = {
    id: "lesson-7", level: "beginner",
    titleEn: "Ode to Joy",
    titleHi: "ओड टू जॉय",
    steps: [
        { type: "intro", titleEn: "Beethoven's Classic", titleHi: "बीथोवन की धुन", contentEn: "Play 'Ode to Joy' by Beethoven using your full range.", contentHi: "बीथोवन की 'Ode to Joy' बजाएं।" },
        { type: "sequence", titleEn: "Ode to Joy - Line 1", titleHi: "पहली लाइन", sequence: ["B4", "B4", "C5", "D5", "D5", "C5", "B4", "A4"], indianSequence: ["B", "B", "C", "D", "D", "C", "B", "A"] },
        { type: "sequence", titleEn: "Ode to Joy - Line 2", titleHi: "दूसरी लाइन", sequence: ["G4", "G4", "A4", "B4", "B4", "A4", "A4"], indianSequence: ["G", "G", "A", "B", "B", "A", "A"] },
        { type: "sequence", titleEn: "Full Theme", titleHi: "पूरी थीम", sequence: ["B4", "B4", "C5", "D5", "D5", "C5", "B4", "A4", "G4", "G4", "A4", "B4", "B4", "A4", "A4"], indianSequence: ["B", "B", "C", "D", "D", "C", "B", "A", "G", "G", "A", "B", "B", "A", "A"] },
        { type: "complete", titleEn: "Beethoven Would Be Proud! 🎵", titleHi: "बीथोवन गर्व करते! 🎵" }
    ]
};

const SAX_BEGINNER_8: Lesson = {
    id: "lesson-8", level: "beginner",
    titleEn: "G Major Scale",
    titleHi: "G मेजर स्केल",
    steps: [
        { type: "intro", titleEn: "The G Major Scale", titleHi: "G मेजर स्केल", contentEn: "G Major (one sharp: F#) is a fundamental saxophone scale.", contentHi: "G Major (एक शार्प: F#) सैक्सोफोन का बुनियादी स्केल है।" },
        { type: "sequence", titleEn: "G Major Up", titleHi: "G Major ऊपर", sequence: ["G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5"], indianSequence: ["G", "A", "B", "C", "D", "E", "F#", "G"] },
        { type: "sequence", titleEn: "G Major Down", titleHi: "G Major नीचे", sequence: ["G5", "F#5", "E5", "D5", "C5", "B4", "A4", "G4"], indianSequence: ["G", "F#", "E", "D", "C", "B", "A", "G"] },
        { type: "sequence", titleEn: "Scale Pattern", titleHi: "स्केल पैटर्न", sequence: ["G4", "A4", "B4", "C5", "D5", "E5", "F#5", "G5", "F#5", "E5", "D5", "C5", "B4", "A4", "G4"], indianSequence: ["G", "A", "B", "C", "D", "E", "F#", "G", "F#", "E", "D", "C", "B", "A", "G"] },
        { type: "complete", titleEn: "Scale Master! 🎷", titleHi: "स्केल मास्टर! 🎷" }
    ]
};

const SAX_BEGINNER_9: Lesson = {
    id: "lesson-9", level: "beginner",
    titleEn: "When the Saints Go Marching In",
    titleHi: "व्हेन द सेंट्स गो मार्चिंग इन",
    steps: [
        { type: "intro", titleEn: "A Jazz Classic", titleHi: "एक जैज़ क्लासिक", contentEn: "This famous tune is one of the first songs jazz saxophonists learn.", contentHi: "यह प्रसिद्ध धुन जैज़ सैक्सोफोन की पहली धुनों में से है।" },
        { type: "sequence", titleEn: "First Phrase", titleHi: "पहला भाग", sequence: ["G4", "B4", "C5", "D5", "G4", "B4", "C5", "D5"], indianSequence: ["G", "B", "C", "D", "G", "B", "C", "D"] },
        { type: "sequence", titleEn: "Second Phrase", titleHi: "दूसरा भाग", sequence: ["G4", "B4", "C5", "D5", "C5", "B4", "A4", "B4", "A4", "G4"], indianSequence: ["G", "B", "C", "D", "C", "B", "A", "B", "A", "G"] },
        { type: "complete", titleEn: "Jazzy! 🎺", titleHi: "जैज़ी! 🎺" }
    ]
};

const SAX_BEGINNER_10: Lesson = {
    id: "lesson-10", level: "beginner",
    titleEn: "Jingle Bells",
    titleHi: "जिंगल बेल्स",
    steps: [
        { type: "intro", titleEn: "A Holiday Favorite", titleHi: "एक छुट्टी की धुन", contentEn: "Play 'Jingle Bells' — great practice for note changes.", contentHi: "'Jingle Bells' बजाएं — नोट बदलने की बढ़िया प्रैक्टिस।" },
        { type: "sequence", titleEn: "Jingle Bells Chorus", titleHi: "जिंगल बेल्स कोरस", sequence: ["B4", "B4", "B4", "B4", "B4", "B4", "B4", "D5", "G4", "A4", "B4"], indianSequence: ["B", "B", "B", "B", "B", "B", "B", "D", "G", "A", "B"] },
        { type: "sequence", titleEn: "Second Part", titleHi: "दूसरा भाग", sequence: ["C5", "C5", "C5", "C5", "C5", "B4", "B4", "B4", "B4", "A4", "A4", "B4", "A4", "D5"], indianSequence: ["C", "C", "C", "C", "C", "B", "B", "B", "B", "A", "A", "B", "A", "D"] },
        { type: "complete", titleEn: "Festive! 🔔", titleHi: "उत्सवी! 🔔" }
    ]
};

export const SAX_BEGINNER_LESSONS: Lesson[] = [
    SAX_BEGINNER_1, SAX_BEGINNER_2, SAX_BEGINNER_3, SAX_BEGINNER_4, SAX_BEGINNER_5,
    SAX_BEGINNER_6, SAX_BEGINNER_7, SAX_BEGINNER_8, SAX_BEGINNER_9, SAX_BEGINNER_10,
];

// ===== INTERMEDIATE SAXOPHONE LESSONS =====

const SAX_INTERMEDIATE_1: Lesson = {
    id: "lesson-1", level: "intermediate",
    titleEn: "F Major Scale",
    titleHi: "F मेजर स्केल",
    steps: [
        { type: "intro", titleEn: "F Major Scale", titleHi: "F मेजर स्केल", contentEn: "F Major (one flat: Bb) is essential for saxophone repertoire.", contentHi: "F Major (एक फ्लैट: Bb) सैक्सोफोन के लिए ज़रूरी है।" },
        { type: "sequence", titleEn: "F Major Up", titleHi: "F Major ऊपर", sequence: ["F4", "G4", "A4", "A#4", "C5", "D5", "E5", "F5"], indianSequence: ["F", "G", "A", "Bb", "C", "D", "E", "F"] },
        { type: "sequence", titleEn: "F Major Down", titleHi: "F Major नीचे", sequence: ["F5", "E5", "D5", "C5", "A#4", "A4", "G4", "F4"], indianSequence: ["F", "E", "D", "C", "Bb", "A", "G", "F"] },
        { type: "complete", titleEn: "F Major Done! 🎷", titleHi: "F Major पूरा! 🎷" }
    ]
};

const SAX_INTERMEDIATE_2: Lesson = {
    id: "lesson-2", level: "intermediate",
    titleEn: "C Major Scale",
    titleHi: "C मेजर स्केल",
    steps: [
        { type: "intro", titleEn: "C Major Scale", titleHi: "C मेजर स्केल", contentEn: "No sharps, no flats — the simplest key signature for sight reading.", contentHi: "कोई शार्प नहीं, कोई फ्लैट नहीं — सबसे सरल कुंजी।" },
        { type: "sequence", titleEn: "C Major Scale", titleHi: "C मेजर स्केल", sequence: ["C5", "D5", "E5", "F5", "G5", "A5", "B5", "C6"], indianSequence: ["C", "D", "E", "F", "G", "A", "B", "C"] },
        { type: "sequence", titleEn: "Scale Descending", titleHi: "स्केल नीचे", sequence: ["C6", "B5", "A5", "G5", "F5", "E5", "D5", "C5"], indianSequence: ["C", "B", "A", "G", "F", "E", "D", "C"] },
        { type: "complete", titleEn: "C Major Mastered! 🎷", titleHi: "C Major सीख लिया! 🎷" }
    ]
};

const SAX_INTERMEDIATE_3: Lesson = {
    id: "lesson-3", level: "intermediate",
    titleEn: "Dynamics & Tonguing",
    titleHi: "डायनेमिक्स और टंगिंग",
    steps: [
        { type: "intro", titleEn: "Playing with Expression", titleHi: "अभिव्यक्ति के साथ बजाना", contentEn: "Practice playing notes with different articulations — legato (smooth) vs staccato (short).", contentHi: "अलग-अलग शैली से नोट्स बजाने का अभ्यास करें।" },
        { type: "sequence", titleEn: "Legato Phrase", titleHi: "लेगाटो फ्रेज़", sequence: ["G4", "A4", "B4", "C5", "D5", "C5", "B4", "A4"], indianSequence: ["G", "A", "B", "C", "D", "C", "B", "A"] },
        { type: "sequence", titleEn: "Staccato Phrase", titleHi: "स्टैकाटो फ्रेज़", sequence: ["D5", "D5", "C5", "C5", "B4", "B4", "A4", "A4", "G4"], indianSequence: ["D", "D", "C", "C", "B", "B", "A", "A", "G"] },
        { type: "complete", titleEn: "Great Expression! 🎷", titleHi: "शानदार अभिव्यक्ति! 🎷" }
    ]
};

const SAX_INTERMEDIATE_4: Lesson = {
    id: "lesson-4", level: "intermediate",
    titleEn: "Blues Scale",
    titleHi: "ब्लूज़ स्केल",
    steps: [
        { type: "intro", titleEn: "The Blues Scale", titleHi: "ब्लूज़ स्केल", contentEn: "The blues scale is the foundation of jazz and blues saxophone. G Blues: G-Bb-C-Db-D-F-G", contentHi: "ब्लूज़ स्केल जैज़ और ब्लूज़ सैक्सोफोन की नींव है।" },
        { type: "sequence", titleEn: "G Blues Scale Up", titleHi: "G ब्लूज़ ऊपर", sequence: ["G4", "A#4", "C5", "C#5", "D5", "F5", "G5"], indianSequence: ["G", "Bb", "C", "Db", "D", "F", "G"] },
        { type: "sequence", titleEn: "G Blues Scale Down", titleHi: "G ब्लूज़ नीचे", sequence: ["G5", "F5", "D5", "C#5", "C5", "A#4", "G4"], indianSequence: ["G", "F", "D", "Db", "C", "Bb", "G"] },
        { type: "complete", titleEn: "Feeling the Blues! 🎵", titleHi: "ब्लूज़ का मज़ा! 🎵" }
    ]
};

const SAX_INTERMEDIATE_5: Lesson = {
    id: "lesson-5", level: "intermediate",
    titleEn: "Amazing Grace",
    titleHi: "अमेज़िंग ग्रेस",
    steps: [
        { type: "intro", titleEn: "A Beautiful Melody", titleHi: "खूबसूरत धुन", contentEn: "Play 'Amazing Grace' — one of the most beautiful melodies for saxophone.", contentHi: "'Amazing Grace' बजाएं — सैक्सोफोन की सबसे खूबसूरत धुनों में से एक।" },
        { type: "sequence", titleEn: "Amazing Grace - Part 1", titleHi: "भाग 1", sequence: ["G4", "B4", "D5", "B4", "D5", "C5", "B4", "G4"], indianSequence: ["G", "B", "D", "B", "D", "C", "B", "G"] },
        { type: "sequence", titleEn: "Amazing Grace - Part 2", titleHi: "भाग 2", sequence: ["E4", "G4", "G4", "A4", "G4", "B4", "A4", "G4"], indianSequence: ["E", "G", "G", "A", "G", "B", "A", "G"] },
        { type: "complete", titleEn: "Beautiful! 🙏", titleHi: "खूबसूरत! 🙏" }
    ]
};

const SAX_INTERMEDIATE_6: Lesson = {
    id: "lesson-6", level: "intermediate", titleEn: "Bb Major Scale", titleHi: "Bb मेजर स्केल", steps: [
        { type: "intro", titleEn: "Bb Major Scale", titleHi: "Bb मेजर स्केल", contentEn: "Bb Major (two flats) is the concert key for alto sax in G. Very important for band music.", contentHi: "Bb Major बैंड संगीत के लिए बहुत ज़रूरी है।" },
        { type: "sequence", titleEn: "Bb Major Up", titleHi: "Bb Major ऊपर", sequence: ["A#4", "C5", "D5", "D#5", "F5", "G5", "A5", "A#5"], indianSequence: ["Bb", "C", "D", "Eb", "F", "G", "A", "Bb"] },
        { type: "sequence", titleEn: "Bb Major Down", titleHi: "Bb Major नीचे", sequence: ["A#5", "A5", "G5", "F5", "D#5", "D5", "C5", "A#4"], indianSequence: ["Bb", "A", "G", "F", "Eb", "D", "C", "Bb"] },
        { type: "complete", titleEn: "Bb Major Done! 🎷", titleHi: "Bb Major पूरा! 🎷" }
    ]
};

const SAX_INTERMEDIATE_7: Lesson = {
    id: "lesson-7", level: "intermediate", titleEn: "Arpeggios", titleHi: "अर्पेजिओ", steps: [
        { type: "intro", titleEn: "Major Arpeggios", titleHi: "मेजर अर्पेजिओ", contentEn: "Arpeggios are broken chords — playing the 1st, 3rd, and 5th notes of a scale.", contentHi: "अर्पेजिओ टूटे हुए कॉर्ड हैं।" },
        { type: "sequence", titleEn: "G Major Arpeggio", titleHi: "G Major अर्पेजिओ", sequence: ["G4", "B4", "D5", "G5", "D5", "B4", "G4"], indianSequence: ["G", "B", "D", "G", "D", "B", "G"] },
        { type: "sequence", titleEn: "F Major Arpeggio", titleHi: "F Major अर्पेजिओ", sequence: ["F4", "A4", "C5", "F5", "C5", "A4", "F4"], indianSequence: ["F", "A", "C", "F", "C", "A", "F"] },
        { type: "complete", titleEn: "Arpeggio Master! 🎷", titleHi: "अर्पेजिओ मास्टर! 🎷" }
    ]
};

const SAX_INTERMEDIATE_8: Lesson = {
    id: "lesson-8", level: "intermediate", titleEn: "Fly Me to the Moon", titleHi: "फ्लाई मी टू द मून", steps: [
        { type: "intro", titleEn: "A Jazz Standard", titleHi: "जैज़ स्टैंडर्ड", contentEn: "A beloved jazz standard — great for practicing smooth phrasing.", contentHi: "एक प्रिय जैज़ धुन — स्मूथ बजाने का अभ्यास।" },
        { type: "sequence", titleEn: "Opening Theme", titleHi: "ओपनिंग थीम", sequence: ["C5", "B4", "A4", "G4", "F4", "G4", "A4", "C5", "B4", "A4", "G4", "F4"], indianSequence: ["C", "B", "A", "G", "F", "G", "A", "C", "B", "A", "G", "F"] },
        { type: "sequence", titleEn: "Second Theme", titleHi: "दूसरी थीम", sequence: ["E4", "F4", "G4", "A4", "B4", "C5", "D5", "E5"], indianSequence: ["E", "F", "G", "A", "B", "C", "D", "E"] },
        { type: "complete", titleEn: "Smooth Jazz! 🌙", titleHi: "स्मूथ जैज़! 🌙" }
    ]
};

const SAX_INTERMEDIATE_9: Lesson = {
    id: "lesson-9", level: "intermediate", titleEn: "Minor Scales", titleHi: "माइनर स्केल", steps: [
        { type: "intro", titleEn: "A Minor Scale", titleHi: "A माइनर स्केल", contentEn: "Minor scales create a moody, emotional sound. A Natural Minor: A-B-C-D-E-F-G.", contentHi: "माइनर स्केल भावनात्मक ध्वनि बनाते हैं।" },
        { type: "sequence", titleEn: "A Natural Minor", titleHi: "A नैचुरल माइनर", sequence: ["A4", "B4", "C5", "D5", "E5", "F5", "G5", "A5"], indianSequence: ["A", "B", "C", "D", "E", "F", "G", "A"] },
        { type: "sequence", titleEn: "E Minor Scale", titleHi: "E माइनर स्केल", sequence: ["E4", "F#4", "G4", "A4", "B4", "C5", "D5", "E5"], indianSequence: ["E", "F#", "G", "A", "B", "C", "D", "E"] },
        { type: "complete", titleEn: "Minor Master! 🎷", titleHi: "माइनर मास्टर! 🎷" }
    ]
};

const SAX_INTERMEDIATE_10: Lesson = {
    id: "lesson-10", level: "intermediate", titleEn: "Take Five", titleHi: "टेक फाइव", steps: [
        { type: "intro", titleEn: "Dave Brubeck's Classic", titleHi: "डेव ब्रूबेक की क्लासिक", contentEn: "One of the most famous jazz sax melodies, in 5/4 time.", contentHi: "सबसे प्रसिद्ध जैज़ सैक्स धुनों में से एक।" },
        { type: "sequence", titleEn: "Take Five Theme", titleHi: "टेक फाइव थीम", sequence: ["E5", "C5", "D5", "E5", "G5", "E5", "D5", "C5", "B4", "A4"], indianSequence: ["E", "C", "D", "E", "G", "E", "D", "C", "B", "A"] },
        { type: "sequence", titleEn: "Response Phrase", titleHi: "जवाबी भाग", sequence: ["A4", "B4", "C5", "D5", "E5", "D5", "C5", "B4", "A4"], indianSequence: ["A", "B", "C", "D", "E", "D", "C", "B", "A"] },
        { type: "complete", titleEn: "Cool Jazz! 🎷", titleHi: "कूल जैज़! 🎷" }
    ]
};

export const SAX_INTERMEDIATE_LESSONS: Lesson[] = [
    SAX_INTERMEDIATE_1, SAX_INTERMEDIATE_2, SAX_INTERMEDIATE_3, SAX_INTERMEDIATE_4, SAX_INTERMEDIATE_5,
    SAX_INTERMEDIATE_6, SAX_INTERMEDIATE_7, SAX_INTERMEDIATE_8, SAX_INTERMEDIATE_9, SAX_INTERMEDIATE_10,
];

// ===== ADVANCED SAXOPHONE LESSONS =====

const SAX_ADVANCED_1: Lesson = {
    id: "lesson-1", level: "advanced", titleEn: "Chromatic Scale", titleHi: "क्रोमैटिक स्केल", steps: [
        { type: "intro", titleEn: "Chromatic Scale", titleHi: "क्रोमैटिक स्केल", contentEn: "Play every semitone from low D to high D — tests all fingerings.", contentHi: "low D से high D तक हर सेमीटोन बजाएं।" },
        { type: "sequence", titleEn: "Chromatic Up", titleHi: "क्रोमैटिक ऊपर", sequence: ["D4", "D#4", "E4", "F4", "F#4", "G4", "G#4", "A4", "A#4", "B4", "C5", "C#5", "D5"], indianSequence: ["D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D"] },
        { type: "sequence", titleEn: "Chromatic Down", titleHi: "क्रोमैटिक नीचे", sequence: ["D5", "C#5", "C5", "B4", "A#4", "A4", "G#4", "G4", "F#4", "F4", "E4", "D#4", "D4"], indianSequence: ["D", "C#", "C", "B", "A#", "A", "G#", "G", "F#", "F", "E", "D#", "D"] },
        { type: "complete", titleEn: "All 12 Tones! 🎷", titleHi: "सभी 12 टोन! 🎷" }
    ]
};

const SAX_ADVANCED_2: Lesson = {
    id: "lesson-2", level: "advanced", titleEn: "Dorian Mode", titleHi: "डोरियन मोड", steps: [
        { type: "intro", titleEn: "Dorian Mode", titleHi: "डोरियन मोड", contentEn: "D Dorian (D-E-F-G-A-B-C-D) is essential for jazz improvisation.", contentHi: "D Dorian जैज़ इम्प्रोवाइज़ेशन के लिए ज़रूरी है।" },
        { type: "sequence", titleEn: "D Dorian Scale", titleHi: "D डोरियन स्केल", sequence: ["D4", "E4", "F4", "G4", "A4", "B4", "C5", "D5"], indianSequence: ["D", "E", "F", "G", "A", "B", "C", "D"] },
        { type: "sequence", titleEn: "Dorian Lick", titleHi: "डोरियन लिक", sequence: ["D5", "C5", "A4", "G4", "F4", "E4", "D4", "E4", "F4", "A4"], indianSequence: ["D", "C", "A", "G", "F", "E", "D", "E", "F", "A"] },
        { type: "complete", titleEn: "Modal Master! 🎷", titleHi: "मोडल मास्टर! 🎷" }
    ]
};

const SAX_ADVANCED_3: Lesson = {
    id: "lesson-3", level: "advanced", titleEn: "ii-V-I Progression", titleHi: "ii-V-I प्रोग्रेशन", steps: [
        { type: "intro", titleEn: "Jazz Fundamentals", titleHi: "जैज़ फंडामेंटल्स", contentEn: "The ii-V-I is the most common chord progression in jazz. Practice arpeggios through changes.", contentHi: "ii-V-I जैज़ में सबसे आम कॉर्ड प्रोग्रेशन है।" },
        { type: "sequence", titleEn: "ii-V-I in G", titleHi: "G में ii-V-I", sequence: ["A4", "C5", "E5", "D5", "B4", "G4", "F#4", "A4", "G4", "B4", "D5", "G5"], indianSequence: ["A", "C", "E", "D", "B", "G", "F#", "A", "G", "B", "D", "G"] },
        { type: "complete", titleEn: "Jazz Ready! 🎷", titleHi: "जैज़ रेडी! 🎷" }
    ]
};

const SAX_ADVANCED_4: Lesson = {
    id: "lesson-4", level: "advanced", titleEn: "Summertime", titleHi: "समरटाइम", steps: [
        { type: "intro", titleEn: "Gershwin's Summertime", titleHi: "गर्शविन की समरटाइम", contentEn: "A jazz standard every saxophonist must know.", contentHi: "हर सैक्सोफोनिस्ट को यह जानना चाहिए।" },
        { type: "sequence", titleEn: "Summertime Theme", titleHi: "समरटाइम थीम", sequence: ["D5", "A4", "D5", "E5", "F5", "A5", "G5", "F5", "E5", "D5"], indianSequence: ["D", "A", "D", "E", "F", "A", "G", "F", "E", "D"] },
        { type: "sequence", titleEn: "Second Phrase", titleHi: "दूसरा भाग", sequence: ["A4", "C5", "D5", "E5", "F5", "E5", "D5", "C5", "A4"], indianSequence: ["A", "C", "D", "E", "F", "E", "D", "C", "A"] },
        { type: "complete", titleEn: "Summertime Vibes! ☀️", titleHi: "समरटाइम! ☀️" }
    ]
};

const SAX_ADVANCED_5: Lesson = {
    id: "lesson-5", level: "advanced", titleEn: "Pentatonic Patterns", titleHi: "पेंटाटोनिक पैटर्न", steps: [
        { type: "intro", titleEn: "Pentatonic Scale Patterns", titleHi: "पेंटाटोनिक पैटर्न", contentEn: "The pentatonic scale (5 notes) is used extensively in jazz improvisation.", contentHi: "पेंटाटोनिक स्केल जैज़ इम्प्रोवाइज़ेशन में बहुत उपयोग होता है।" },
        { type: "sequence", titleEn: "G Major Pentatonic", titleHi: "G मेजर पेंटाटोनिक", sequence: ["G4", "A4", "B4", "D5", "E5", "G5", "E5", "D5", "B4", "A4", "G4"], indianSequence: ["G", "A", "B", "D", "E", "G", "E", "D", "B", "A", "G"] },
        { type: "sequence", titleEn: "G Minor Pentatonic", titleHi: "G माइनर पेंटाटोनिक", sequence: ["G4", "A#4", "C5", "D5", "F5", "G5", "F5", "D5", "C5", "A#4", "G4"], indianSequence: ["G", "Bb", "C", "D", "F", "G", "F", "D", "C", "Bb", "G"] },
        { type: "complete", titleEn: "Pentatonic Pro! 🎷", titleHi: "पेंटाटोनिक प्रो! 🎷" }
    ]
};

const SAX_ADVANCED_6: Lesson = {
    id: "lesson-6", level: "advanced", titleEn: "Altissimo Register", titleHi: "अल्टिसिमो रजिस्टर", steps: [
        { type: "intro", titleEn: "High Notes", titleHi: "ऊँचे नोट्स", contentEn: "The altissimo register extends your range above high F#. These notes need special fingerings and embouchure.", contentHi: "अल्टिसिमो रजिस्टर ऊँचे F# से ऊपर जाता है।" },
        { type: "sequence", titleEn: "Approach to Altissimo", titleHi: "अल्टिसिमो की तैयारी", sequence: ["D5", "E5", "F5", "F#5", "G5", "F#5", "F5", "E5", "D5"], indianSequence: ["D", "E", "F", "F#", "G", "F#", "F", "E", "D"] },
        { type: "complete", titleEn: "High Flying! 🎷", titleHi: "ऊँची उड़ान! 🎷" }
    ]
};

const SAX_ADVANCED_7: Lesson = {
    id: "lesson-7", level: "advanced", titleEn: "Autumn Leaves", titleHi: "ऑटम लीव्ज़", steps: [
        { type: "intro", titleEn: "Jazz Standard", titleHi: "जैज़ स्टैंडर्ड", contentEn: "One of the most played jazz standards worldwide.", contentHi: "दुनिया भर में सबसे ज़्यादा बजाए जाने वाले जैज़ स्टैंडर्ड में से एक।" },
        { type: "sequence", titleEn: "Autumn Leaves Theme", titleHi: "ऑटम लीव्ज़ थीम", sequence: ["E5", "D5", "C5", "B4", "A4", "D5", "C5", "B4", "A4", "G4", "C5", "B4"], indianSequence: ["E", "D", "C", "B", "A", "D", "C", "B", "A", "G", "C", "B"] },
        { type: "complete", titleEn: "Jazz Classic! 🍂", titleHi: "जैज़ क्लासिक! 🍂" }
    ]
};

const SAX_ADVANCED_8: Lesson = {
    id: "lesson-8", level: "advanced", titleEn: "Mixolydian Mode", titleHi: "मिक्सोलिडियन मोड", steps: [
        { type: "intro", titleEn: "Mixolydian Mode", titleHi: "मिक्सोलिडियन मोड", contentEn: "G Mixolydian (like G Major but with F natural) — used over dominant 7th chords.", contentHi: "G मिक्सोलिडियन डोमिनेंट 7th कॉर्ड पर इस्तेमाल होता है।" },
        { type: "sequence", titleEn: "G Mixolydian", titleHi: "G मिक्सोलिडियन", sequence: ["G4", "A4", "B4", "C5", "D5", "E5", "F5", "G5"], indianSequence: ["G", "A", "B", "C", "D", "E", "F", "G"] },
        { type: "sequence", titleEn: "Mixolydian Lick", titleHi: "मिक्सोलिडियन लिक", sequence: ["G5", "F5", "E5", "D5", "C5", "B4", "D5", "C5", "A4", "G4"], indianSequence: ["G", "F", "E", "D", "C", "B", "D", "C", "A", "G"] },
        { type: "complete", titleEn: "Modal Jazz! 🎷", titleHi: "मोडल जैज़! 🎷" }
    ]
};

const SAX_ADVANCED_9: Lesson = {
    id: "lesson-9", level: "advanced", titleEn: "Careless Whisper", titleHi: "केयरलेस व्हिस्पर", steps: [
        { type: "intro", titleEn: "The Famous Sax Riff", titleHi: "प्रसिद्ध सैक्स रिफ", contentEn: "Perhaps the most iconic sax riff ever — George Michael's Careless Whisper.", contentHi: "शायद अब तक का सबसे प्रतिष्ठित सैक्स रिफ।" },
        { type: "sequence", titleEn: "Careless Whisper Riff", titleHi: "केयरलेस व्हिस्पर रिफ", sequence: ["D5", "E5", "F5", "D5", "A4", "D5", "C5", "A4", "G4", "A4", "D5", "A4"], indianSequence: ["D", "E", "F", "D", "A", "D", "C", "A", "G", "A", "D", "A"] },
        { type: "complete", titleEn: "Iconic! 🎷", titleHi: "आइकॉनिक! 🎷" }
    ]
};

const SAX_ADVANCED_10: Lesson = {
    id: "lesson-10", level: "advanced", titleEn: "Baker Street", titleHi: "बेकर स्ट्रीट", steps: [
        { type: "intro", titleEn: "Rock Sax Classic", titleHi: "रॉक सैक्स क्लासिक", contentEn: "Gerry Rafferty's Baker Street — the definitive rock saxophone solo.", contentHi: "गेरी रैफर्टी की बेकर स्ट्रीट — निश्चित रॉक सैक्सोफोन सोलो।" },
        { type: "sequence", titleEn: "Baker Street Riff", titleHi: "बेकर स्ट्रीट रिफ", sequence: ["D5", "C5", "A4", "C5", "D5", "D5", "C5", "A4", "G4", "A4", "C5", "D5", "E5", "D5"], indianSequence: ["D", "C", "A", "C", "D", "D", "C", "A", "G", "A", "C", "D", "E", "D"] },
        { type: "complete", titleEn: "Rock Legend! 🎸", titleHi: "रॉक लीजेंड! 🎸" }
    ]
};

export const SAX_ADVANCED_LESSONS: Lesson[] = [
    SAX_ADVANCED_1, SAX_ADVANCED_2, SAX_ADVANCED_3, SAX_ADVANCED_4, SAX_ADVANCED_5,
    SAX_ADVANCED_6, SAX_ADVANCED_7, SAX_ADVANCED_8, SAX_ADVANCED_9, SAX_ADVANCED_10,
];
