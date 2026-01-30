export interface SongNote {
    note: string;
    duration: number; // in seconds, or relative beat
    lyric?: string;
}

export interface Song {
    id: string;
    title: string;
    titleHi?: string;
    artist?: string;
    difficulty: "easy" | "medium" | "hard";
    instrument: string;
    notes: SongNote[];
    description?: string;
    descriptionHi?: string;
    tags: string[];
}

export const SONGS: Song[] = [
    // ===== INDIAN PATRIOTIC SONGS =====
    {
        id: "jana-gana-mana",
        title: "Jana Gana Mana",
        titleHi: "जन गण मन",
        artist: "Rabindranath Tagore",
        difficulty: "medium",
        instrument: "harmonium",
        description: "The National Anthem of India - Correct Sargam",
        descriptionHi: "भारत का राष्ट्रगान - सही सरगम",
        tags: ["patriotic", "anthem", "india"],
        notes: [
            // जन गण मन अधिनायक जय हे (SR GG GG GGGGG RG M)
            { note: "S", duration: 0.5, lyric: "Ja" },
            { note: "R", duration: 0.5, lyric: "na" },
            { note: "G", duration: 0.5, lyric: "Ga" },
            { note: "G", duration: 0.5, lyric: "na" },
            { note: "G", duration: 0.5, lyric: "Ma" },
            { note: "G", duration: 0.5, lyric: "na" },
            { note: "G", duration: 0.3, lyric: "A" },
            { note: "G", duration: 0.3, lyric: "dhi" },
            { note: "G", duration: 0.3, lyric: "naa" },
            { note: "G", duration: 0.3, lyric: "ya" },
            { note: "G", duration: 0.3, lyric: "k" },
            { note: "R", duration: 0.5, lyric: "Ja" },
            { note: "G", duration: 0.5, lyric: "ya" },
            { note: "M", duration: 1, lyric: "He" },

            // भारत भाग्य विधाता (GGG RRR .N RS)
            { note: "G", duration: 0.3, lyric: "Bhaa" },
            { note: "G", duration: 0.3, lyric: "ra" },
            { note: "G", duration: 0.5, lyric: "ta" },
            { note: "R", duration: 0.3, lyric: "Bhaag" },
            { note: "R", duration: 0.3, lyric: "ya" },
            { note: "R", duration: 0.5, lyric: "" },
            { note: ".N", duration: 0.5, lyric: "Vi" },
            { note: "R", duration: 0.5, lyric: "dhaa" },
            { note: "S", duration: 1, lyric: "taa" },

            // पंजाब सिंध गुजरात मराठा (SPP PP PPPP PMDP)
            { note: "S", duration: 0.5, lyric: "Pun" },
            { note: "P", duration: 0.3, lyric: "jab" },
            { note: "P", duration: 0.3, lyric: "" },
            { note: "P", duration: 0.3, lyric: "Sindh" },
            { note: "P", duration: 0.3, lyric: "" },
            { note: "P", duration: 0.3, lyric: "Gu" },
            { note: "P", duration: 0.3, lyric: "ja" },
            { note: "P", duration: 0.3, lyric: "raa" },
            { note: "P", duration: 0.3, lyric: "t" },
            { note: "P", duration: 0.3, lyric: "Ma" },
            { note: "M", duration: 0.3, lyric: "raa" },
            { note: "D", duration: 0.3, lyric: "tha" },
            { note: "P", duration: 0.5, lyric: "" },

            // द्रविड़ उत्कल बंगा (MMM GGG RMG)
            { note: "M", duration: 0.3, lyric: "Draa" },
            { note: "M", duration: 0.3, lyric: "vi" },
            { note: "M", duration: 0.5, lyric: "da" },
            { note: "G", duration: 0.3, lyric: "Ut" },
            { note: "G", duration: 0.3, lyric: "ka" },
            { note: "G", duration: 0.5, lyric: "la" },
            { note: "R", duration: 0.3, lyric: "Ban" },
            { note: "M", duration: 0.3, lyric: "" },
            { note: "G", duration: 1, lyric: "gaa" },

            // विंध्य हिमाचल यमुना गंगा (GG GGGR PPP MM)
            { note: "G", duration: 0.3, lyric: "Vin" },
            { note: "G", duration: 0.5, lyric: "dhya" },
            { note: "G", duration: 0.3, lyric: "Hi" },
            { note: "G", duration: 0.3, lyric: "maa" },
            { note: "G", duration: 0.3, lyric: "cha" },
            { note: "R", duration: 0.5, lyric: "la" },
            { note: "P", duration: 0.3, lyric: "Ya" },
            { note: "P", duration: 0.3, lyric: "mu" },
            { note: "P", duration: 0.5, lyric: "na" },
            { note: "M", duration: 0.5, lyric: "Gan" },
            { note: "M", duration: 1, lyric: "gaa" },

            // उच्छल जलधि तरंग (GGG RRR .NRS)
            { note: "G", duration: 0.3, lyric: "Uch" },
            { note: "G", duration: 0.3, lyric: "chha" },
            { note: "G", duration: 0.5, lyric: "la" },
            { note: "R", duration: 0.3, lyric: "Ja" },
            { note: "R", duration: 0.3, lyric: "la" },
            { note: "R", duration: 0.5, lyric: "dhi" },
            { note: ".N", duration: 0.3, lyric: "Ta" },
            { note: "R", duration: 0.3, lyric: "ran" },
            { note: "S", duration: 1, lyric: "ga" },

            // तव शुभ नामे जागे (SR GG GG RGM)
            { note: "S", duration: 0.3, lyric: "Ta" },
            { note: "R", duration: 0.5, lyric: "va" },
            { note: "G", duration: 0.3, lyric: "Shubh" },
            { note: "G", duration: 0.5, lyric: "" },
            { note: "G", duration: 0.3, lyric: "Naa" },
            { note: "G", duration: 0.5, lyric: "me" },
            { note: "R", duration: 0.3, lyric: "Jaa" },
            { note: "G", duration: 0.3, lyric: "" },
            { note: "M", duration: 1, lyric: "ge" },

            // तव शुभ आशिष मांगे (GM PP PMG RGM)
            { note: "G", duration: 0.3, lyric: "Ta" },
            { note: "M", duration: 0.5, lyric: "va" },
            { note: "P", duration: 0.3, lyric: "Shubh" },
            { note: "P", duration: 0.5, lyric: "" },
            { note: "P", duration: 0.3, lyric: "Aa" },
            { note: "M", duration: 0.3, lyric: "shi" },
            { note: "G", duration: 0.5, lyric: "sha" },
            { note: "R", duration: 0.3, lyric: "Maan" },
            { note: "G", duration: 0.3, lyric: "" },
            { note: "M", duration: 1, lyric: "ge" },

            // गाहे तव जय गाथा (GG RR R .NRS)
            { note: "G", duration: 0.3, lyric: "Gaa" },
            { note: "G", duration: 0.5, lyric: "he" },
            { note: "R", duration: 0.3, lyric: "Ta" },
            { note: "R", duration: 0.5, lyric: "va" },
            { note: "R", duration: 0.5, lyric: "Ja" },
            { note: ".N", duration: 0.3, lyric: "ya" },
            { note: "R", duration: 0.3, lyric: "Gaa" },
            { note: "S", duration: 1, lyric: "thaa" },

            // जन गण मंगल दायक जय हे (PP PP PPP PPP MD P)
            { note: "P", duration: 0.3, lyric: "Ja" },
            { note: "P", duration: 0.5, lyric: "na" },
            { note: "P", duration: 0.3, lyric: "Ga" },
            { note: "P", duration: 0.5, lyric: "na" },
            { note: "P", duration: 0.3, lyric: "Man" },
            { note: "P", duration: 0.3, lyric: "ga" },
            { note: "P", duration: 0.3, lyric: "la" },
            { note: "P", duration: 0.3, lyric: "Daa" },
            { note: "P", duration: 0.3, lyric: "ya" },
            { note: "P", duration: 0.3, lyric: "ka" },
            { note: "M", duration: 0.5, lyric: "Ja" },
            { note: "D", duration: 0.5, lyric: "ya" },
            { note: "P", duration: 1, lyric: "He" },

            // भारत भाग्य विधाता (MMM GGG RMG)
            { note: "M", duration: 0.3, lyric: "Bhaa" },
            { note: "M", duration: 0.3, lyric: "ra" },
            { note: "M", duration: 0.5, lyric: "ta" },
            { note: "G", duration: 0.3, lyric: "Bhaag" },
            { note: "G", duration: 0.3, lyric: "ya" },
            { note: "G", duration: 0.5, lyric: "" },
            { note: "R", duration: 0.3, lyric: "Vi" },
            { note: "M", duration: 0.3, lyric: "dhaa" },
            { note: "G", duration: 1, lyric: "taa" },

            // जय हे, जय हे, जय हे (NN S. ND N DP D)
            { note: "N", duration: 0.5, lyric: "Ja" },
            { note: "N", duration: 0.5, lyric: "ya" },
            { note: "S'", duration: 1, lyric: "He" },
            { note: "N", duration: 0.5, lyric: "Ja" },
            { note: "D", duration: 0.5, lyric: "ya" },
            { note: "N", duration: 1, lyric: "He" },
            { note: "D", duration: 0.5, lyric: "Ja" },
            { note: "P", duration: 0.5, lyric: "ya" },
            { note: "D", duration: 1, lyric: "He" },

            // जय जय जय जय हे (SS RR GG RG M) - using middle octave for harmonium
            { note: "S'", duration: 0.5, lyric: "Ja" },
            { note: "S'", duration: 0.5, lyric: "ya" },
            { note: "N", duration: 0.5, lyric: "Ja" },
            { note: "N", duration: 0.5, lyric: "ya" },
            { note: "D", duration: 0.5, lyric: "Ja" },
            { note: "D", duration: 0.5, lyric: "ya" },
            { note: "P", duration: 0.3, lyric: "Ja" },
            { note: "M", duration: 0.3, lyric: "ya" },
            { note: "G", duration: 1.5, lyric: "He" }
        ]
    },
    {
        id: "vande-mataram",
        title: "Vande Mataram",
        titleHi: "वंदे मातरम्",
        artist: "Bankim Chandra Chattopadhyay",
        difficulty: "medium",
        instrument: "harmonium",
        description: "National Song of India - Slower version with correct sargam",
        descriptionHi: "भारत का राष्ट्रीय गीत - सही सरगम के साथ",
        tags: ["patriotic", "national song", "india"],
        notes: [
            // वंदे मातरम् [Sa-Re]–[MaPaMaPa—]
            { note: "S", duration: 0.5, lyric: "Van" },
            { note: "R", duration: 0.5, lyric: "de" },
            { note: "M", duration: 0.5, lyric: "Maa" },
            { note: "P", duration: 0.5, lyric: "ta" },
            { note: "M", duration: 0.5, lyric: "" },
            { note: "P", duration: 1.5, lyric: "ram" },

            // सुजलाम् सुफलाम् [Ma-Pa]–[NiSANiSA]
            { note: "M", duration: 0.5, lyric: "Su" },
            { note: "P", duration: 0.5, lyric: "ja" },
            { note: "N", duration: 0.5, lyric: "laam" },
            { note: "S'", duration: 0.5, lyric: "Su" },
            { note: "N", duration: 0.5, lyric: "pha" },
            { note: "S'", duration: 1, lyric: "laam" },

            // मलयज शीतलाम् [SARENi_–DhaPa-] [PaDhaMa–GaRe-]
            { note: "S'", duration: 0.5, lyric: "Ma" },
            { note: "R", duration: 0.5, lyric: "la" },
            { note: "N", duration: 0.5, lyric: "ya" },
            { note: "D", duration: 0.5, lyric: "ja" },
            { note: "P", duration: 0.5, lyric: "Shee" },
            { note: "P", duration: 0.5, lyric: "ta" },
            { note: "D", duration: 0.5, lyric: "laam" },
            { note: "M", duration: 0.5, lyric: "" },
            { note: "G", duration: 0.5, lyric: "" },
            { note: "R", duration: 0.5, lyric: "" },

            // शस्यश्यामलाम् मातरम् [RePaMaMa–]Ga-[ReGa]Sa–]
            { note: "R", duration: 0.5, lyric: "Sa" },
            { note: "P", duration: 0.5, lyric: "sya" },
            { note: "M", duration: 0.5, lyric: "shyaa" },
            { note: "M", duration: 1, lyric: "ma" },
            { note: "G", duration: 0.5, lyric: "laam" },
            { note: "R", duration: 0.5, lyric: "Maa" },
            { note: "G", duration: 0.5, lyric: "ta" },
            { note: "S", duration: 1.5, lyric: "ram" },

            // वंदे मातरम् [Sa-Re] [MaPaMaPa–][PaNi_ DhaPa–]
            { note: "S", duration: 0.5, lyric: "Van" },
            { note: "R", duration: 0.5, lyric: "de" },
            { note: "M", duration: 0.5, lyric: "Maa" },
            { note: "P", duration: 0.5, lyric: "ta" },
            { note: "M", duration: 0.5, lyric: "" },
            { note: "P", duration: 1, lyric: "ram" },
            { note: "P", duration: 0.5, lyric: "" },
            { note: "N", duration: 0.5, lyric: "" },
            { note: "D", duration: 0.5, lyric: "" },
            { note: "P", duration: 1, lyric: "" },

            // शुभ्रज्योत्स्ना पुलकितयामिनीम् [Ma-Pa-][Ni-Ni -][NiNiSANiSA–Ni SA]
            { note: "M", duration: 0.5, lyric: "Shubh" },
            { note: "P", duration: 0.5, lyric: "ra" },
            { note: "N", duration: 0.5, lyric: "jyots" },
            { note: "N", duration: 0.5, lyric: "naa" },
            { note: "N", duration: 0.3, lyric: "Pu" },
            { note: "N", duration: 0.3, lyric: "la" },
            { note: "S'", duration: 0.3, lyric: "ki" },
            { note: "N", duration: 0.3, lyric: "ta" },
            { note: "S'", duration: 1, lyric: "yaa" },
            { note: "N", duration: 0.5, lyric: "mi" },
            { note: "S'", duration: 1, lyric: "neem" },

            // पुल्लकुसुमित द्रुमदल शोभिनीम् [Ni-NiNiSANiSA-][SARESANi] [Ni_ Dha Ni_ Dha-Pa–]
            { note: "N", duration: 0.3, lyric: "Pul" },
            { note: "N", duration: 0.3, lyric: "la" },
            { note: "N", duration: 0.3, lyric: "ku" },
            { note: "S'", duration: 0.3, lyric: "su" },
            { note: "N", duration: 0.3, lyric: "mi" },
            { note: "S'", duration: 0.5, lyric: "ta" },
            { note: "S'", duration: 0.3, lyric: "dru" },
            { note: "N", duration: 0.3, lyric: "ma" },
            { note: "S'", duration: 0.3, lyric: "dal" },
            { note: "N", duration: 0.5, lyric: "sho" },
            { note: "N", duration: 0.3, lyric: "bhi" },
            { note: "D", duration: 0.3, lyric: "neem" },
            { note: "N", duration: 0.3, lyric: "" },
            { note: "D", duration: 0.5, lyric: "" },
            { note: "P", duration: 1, lyric: "" },

            // सुहासिनीं सुमधुर भाषिणीम् [ReReMaGaRe–][ReNi_ DhaNi_Dha Pa-Dha Pa–]
            { note: "R", duration: 0.3, lyric: "Su" },
            { note: "R", duration: 0.3, lyric: "haa" },
            { note: "M", duration: 0.3, lyric: "si" },
            { note: "G", duration: 0.3, lyric: "neem" },
            { note: "R", duration: 0.5, lyric: "" },
            { note: "R", duration: 0.3, lyric: "Su" },
            { note: "N", duration: 0.3, lyric: "ma" },
            { note: "D", duration: 0.3, lyric: "dhu" },
            { note: "N", duration: 0.3, lyric: "ra" },
            { note: "D", duration: 0.5, lyric: "bhaa" },
            { note: "P", duration: 0.5, lyric: "shi" },
            { note: "D", duration: 0.5, lyric: "neem" },
            { note: "P", duration: 1, lyric: "" },

            // सुखदां वरदां मातरम् [Ma-Pa-Ni-Ni NiNi-] [Ni SA–Ni SA–]
            { note: "M", duration: 0.5, lyric: "Su" },
            { note: "P", duration: 0.5, lyric: "kha" },
            { note: "N", duration: 0.5, lyric: "daam" },
            { note: "N", duration: 0.3, lyric: "Va" },
            { note: "N", duration: 0.3, lyric: "ra" },
            { note: "N", duration: 0.5, lyric: "daam" },
            { note: "N", duration: 0.5, lyric: "Maa" },
            { note: "S'", duration: 1, lyric: "ta" },
            { note: "N", duration: 0.5, lyric: "" },
            { note: "S'", duration: 1.5, lyric: "ram" },

            // वंदे मातरम् [Ma-Pa–][NiSANiSA]
            { note: "M", duration: 0.5, lyric: "Van" },
            { note: "P", duration: 1, lyric: "de" },
            { note: "N", duration: 0.5, lyric: "Maa" },
            { note: "S'", duration: 0.5, lyric: "ta" },
            { note: "N", duration: 0.5, lyric: "" },
            { note: "S'", duration: 1.5, lyric: "ram" }
        ]
    },
    {
        id: "saare-jahan-se-achha",
        title: "Sare Jahan Se Achha",
        titleHi: "सारे जहाँ से अच्छा",
        artist: "Muhammad Iqbal",
        difficulty: "medium",
        instrument: "harmonium",
        description: "Patriotic song celebrating India - Correct Sargam",
        descriptionHi: "भारत की सुंदरता का गुणगान - सही सरगम",
        tags: ["patriotic", "classic", "india"],
        notes: [
            // ===== Part 1 - सारे जहाँ से अच्छा =====
            // ग~ गरे सा रे~ *नि सा~ सा~ (saare jahaan se achcha)
            { note: "G", duration: 1, lyric: "Saa" },
            { note: "G", duration: 0.3, lyric: "" },
            { note: "R", duration: 0.5, lyric: "re" },
            { note: "S", duration: 0.5, lyric: "Ja" },
            { note: "R", duration: 1, lyric: "haan" },
            { note: ".N", duration: 0.5, lyric: "Se" },
            { note: "S", duration: 1, lyric: "Ach" },
            { note: "S", duration: 1, lyric: "cha" },

            // Filler: सा *नि *ध *प
            { note: "S", duration: 0.5, lyric: "" },
            { note: ".N", duration: 0.5, lyric: "" },
            { note: ".D", duration: 0.5, lyric: "" },
            { note: ".P", duration: 0.5, lyric: "" },

            // *प *ध सा रेग मग~ ग~ (hindustan hamaara)
            { note: ".P", duration: 0.3, lyric: "Hin" },
            { note: ".D", duration: 0.3, lyric: "" },
            { note: "S", duration: 0.5, lyric: "du" },
            { note: "R", duration: 0.3, lyric: "" },
            { note: "G", duration: 0.5, lyric: "staan" },
            { note: "M", duration: 0.3, lyric: "Ha" },
            { note: "G", duration: 1, lyric: "maa" },
            { note: "G", duration: 1, lyric: "raa" },

            // रेमगरेसा (hamaara)
            { note: "R", duration: 0.3, lyric: "Ha" },
            { note: "M", duration: 0.3, lyric: "maa" },
            { note: "G", duration: 0.3, lyric: "" },
            { note: "R", duration: 0.3, lyric: "" },
            { note: "S", duration: 1, lyric: "raa" },

            // ग~ रे सा रे *नि सा~ सा~ (saare jahaan se achcha - repeat)
            { note: "G", duration: 1, lyric: "Saa" },
            { note: "R", duration: 0.5, lyric: "re" },
            { note: "S", duration: 0.5, lyric: "Ja" },
            { note: "R", duration: 0.5, lyric: "haan" },
            { note: ".N", duration: 0.5, lyric: "Se" },
            { note: "S", duration: 1, lyric: "Ach" },
            { note: "S", duration: 1, lyric: "cha" },

            // ===== Part 2 - हम बुलबुलें हैं =====
            // गम प~ पप (hum bul bule)
            { note: "G", duration: 0.3, lyric: "Hum" },
            { note: "M", duration: 0.5, lyric: "" },
            { note: "P", duration: 1, lyric: "Bul" },
            { note: "P", duration: 0.3, lyric: "bu" },
            { note: "P", duration: 0.3, lyric: "le" },

            // ग~ मध प~~ (hai is ki)
            { note: "G", duration: 1, lyric: "Hain" },
            { note: "M", duration: 0.3, lyric: "Is" },
            { note: "D", duration: 0.5, lyric: "" },
            { note: "P", duration: 1.5, lyric: "ki" },

            // गम प~ मग (ye gul sitaa)
            { note: "G", duration: 0.3, lyric: "Ye" },
            { note: "M", duration: 0.5, lyric: "" },
            { note: "P", duration: 1, lyric: "Gul" },
            { note: "M", duration: 0.3, lyric: "lis" },
            { note: "G", duration: 0.5, lyric: "taan" },

            // रेसा~~ सा सासा *नि *ध *प (hamaara hamaara)
            { note: "R", duration: 0.3, lyric: "Ha" },
            { note: "S", duration: 1.5, lyric: "maa" },
            { note: "S", duration: 0.5, lyric: "raa" },
            { note: "S", duration: 0.3, lyric: "Ha" },
            { note: "S", duration: 0.3, lyric: "maa" },
            { note: ".N", duration: 0.3, lyric: "raa" },
            { note: ".D", duration: 0.3, lyric: "" },
            { note: ".P", duration: 0.5, lyric: "" },

            // ===== Part 3 - Repeat =====
            // ग~~ रे सा रे *नि सा~ सा (saare jahaan se achcha)
            { note: "G", duration: 1.5, lyric: "Saa" },
            { note: "R", duration: 0.5, lyric: "re" },
            { note: "S", duration: 0.5, lyric: "Ja" },
            { note: "R", duration: 0.5, lyric: "haan" },
            { note: ".N", duration: 0.5, lyric: "Se" },
            { note: "S", duration: 1, lyric: "Ach" },
            { note: "S", duration: 1, lyric: "cha" },

            // Filler: सा *नि *ध *प
            { note: "S", duration: 0.5, lyric: "" },
            { note: ".N", duration: 0.5, lyric: "" },
            { note: ".D", duration: 0.5, lyric: "" },
            { note: ".P", duration: 0.5, lyric: "" },

            // *प *ध सा रेग मग~ ग~ रेमगरेसा (Hindustan hamaara hamaara)
            { note: ".P", duration: 0.3, lyric: "Hin" },
            { note: ".D", duration: 0.3, lyric: "" },
            { note: "S", duration: 0.5, lyric: "du" },
            { note: "R", duration: 0.3, lyric: "" },
            { note: "G", duration: 0.5, lyric: "staan" },
            { note: "M", duration: 0.3, lyric: "Ha" },
            { note: "G", duration: 1, lyric: "maa" },
            { note: "G", duration: 1, lyric: "raa" },
            { note: "R", duration: 0.3, lyric: "Ha" },
            { note: "M", duration: 0.3, lyric: "maa" },
            { note: "G", duration: 0.3, lyric: "" },
            { note: "R", duration: 0.3, lyric: "" },
            { note: "S", duration: 1, lyric: "raa" },

            // Final: ग~ रे सा रे *नि सा~ सा~
            { note: "G", duration: 1, lyric: "Saa" },
            { note: "R", duration: 0.5, lyric: "re" },
            { note: "S", duration: 0.5, lyric: "Ja" },
            { note: "R", duration: 0.5, lyric: "haan" },
            { note: ".N", duration: 0.5, lyric: "Se" },
            { note: "S", duration: 1, lyric: "Ach" },
            { note: "S", duration: 1.5, lyric: "cha" }
        ]
    },

    // ===== CLASSIC & KIDS SONGS (COMPLETE VERSIONS) =====
    {
        id: "happy-birthday",
        title: "Happy Birthday",
        titleHi: "जन्मदिन मुबारक",
        artist: "Traditional",
        difficulty: "easy",
        instrument: "piano",
        description: "The classic birthday song that everyone should know!",
        descriptionHi: "क्लासिक जन्मदिन गाना जो हर किसी को आना चाहिए!",
        tags: ["classic", "celebration", "kids"],
        notes: [
            // Happy birthday to you
            { note: "C4", duration: 0.75, lyric: "Hap" },
            { note: "C4", duration: 0.25, lyric: "py" },
            { note: "D4", duration: 1, lyric: "birth" },
            { note: "C4", duration: 1, lyric: "day" },
            { note: "F4", duration: 1, lyric: "to" },
            { note: "E4", duration: 2, lyric: "you" },
            // Happy birthday to you
            { note: "C4", duration: 0.75, lyric: "Hap" },
            { note: "C4", duration: 0.25, lyric: "py" },
            { note: "D4", duration: 1, lyric: "birth" },
            { note: "C4", duration: 1, lyric: "day" },
            { note: "G4", duration: 1, lyric: "to" },
            { note: "F4", duration: 2, lyric: "you" },
            // Happy birthday dear [name]
            { note: "C4", duration: 0.75, lyric: "Hap" },
            { note: "C4", duration: 0.25, lyric: "py" },
            { note: "C5", duration: 1, lyric: "birth" },
            { note: "A4", duration: 1, lyric: "day" },
            { note: "F4", duration: 1, lyric: "dear" },
            { note: "E4", duration: 1, lyric: "friend" },
            { note: "D4", duration: 1, lyric: "" },
            // Happy birthday to you
            { note: "A#4", duration: 0.75, lyric: "Hap" },
            { note: "A#4", duration: 0.25, lyric: "py" },
            { note: "A4", duration: 1, lyric: "birth" },
            { note: "F4", duration: 1, lyric: "day" },
            { note: "G4", duration: 1, lyric: "to" },
            { note: "F4", duration: 2, lyric: "you" }
        ]
    },
    {
        id: "twinkle-twinkle",
        title: "Twinkle Twinkle Little Star",
        titleHi: "ट्विंकल ट्विंकल लिटिल स्टार",
        artist: "Traditional",
        difficulty: "easy",
        instrument: "piano",
        description: "A perfect first song for beginners.",
        descriptionHi: "शुरुआत के लिए सबसे अच्छा गाना।",
        tags: ["nursery", "kids", "beginner"],
        notes: [
            // Twinkle twinkle little star
            { note: "C4", duration: 1, lyric: "Twin" },
            { note: "C4", duration: 1, lyric: "kle" },
            { note: "G4", duration: 1, lyric: "twin" },
            { note: "G4", duration: 1, lyric: "kle" },
            { note: "A4", duration: 1, lyric: "lit" },
            { note: "A4", duration: 1, lyric: "tle" },
            { note: "G4", duration: 2, lyric: "star" },
            // How I wonder what you are
            { note: "F4", duration: 1, lyric: "How" },
            { note: "F4", duration: 1, lyric: "I" },
            { note: "E4", duration: 1, lyric: "won" },
            { note: "E4", duration: 1, lyric: "der" },
            { note: "D4", duration: 1, lyric: "what" },
            { note: "D4", duration: 1, lyric: "you" },
            { note: "C4", duration: 2, lyric: "are" },
            // Up above the world so high
            { note: "G4", duration: 1, lyric: "Up" },
            { note: "G4", duration: 1, lyric: "a" },
            { note: "F4", duration: 1, lyric: "bove" },
            { note: "F4", duration: 1, lyric: "the" },
            { note: "E4", duration: 1, lyric: "world" },
            { note: "E4", duration: 1, lyric: "so" },
            { note: "D4", duration: 2, lyric: "high" },
            // Like a diamond in the sky
            { note: "G4", duration: 1, lyric: "Like" },
            { note: "G4", duration: 1, lyric: "a" },
            { note: "F4", duration: 1, lyric: "dia" },
            { note: "F4", duration: 1, lyric: "mond" },
            { note: "E4", duration: 1, lyric: "in" },
            { note: "E4", duration: 1, lyric: "the" },
            { note: "D4", duration: 2, lyric: "sky" },
            // Twinkle twinkle little star (repeat)
            { note: "C4", duration: 1, lyric: "Twin" },
            { note: "C4", duration: 1, lyric: "kle" },
            { note: "G4", duration: 1, lyric: "twin" },
            { note: "G4", duration: 1, lyric: "kle" },
            { note: "A4", duration: 1, lyric: "lit" },
            { note: "A4", duration: 1, lyric: "tle" },
            { note: "G4", duration: 2, lyric: "star" },
            // How I wonder what you are
            { note: "F4", duration: 1, lyric: "How" },
            { note: "F4", duration: 1, lyric: "I" },
            { note: "E4", duration: 1, lyric: "won" },
            { note: "E4", duration: 1, lyric: "der" },
            { note: "D4", duration: 1, lyric: "what" },
            { note: "D4", duration: 1, lyric: "you" },
            { note: "C4", duration: 2, lyric: "are" }
        ]
    },
    {
        id: "mary-had-a-little-lamb",
        title: "Mary Had a Little Lamb",
        titleHi: "मेरी का छोटा मेमना",
        artist: "Traditional",
        difficulty: "easy",
        instrument: "piano",
        description: "Classic nursery rhyme - great for beginners",
        descriptionHi: "क्लासिक नर्सरी राइम - शुरुआत के लिए बढ़िया",
        tags: ["nursery", "kids", "beginner"],
        notes: [
            // Mary had a little lamb
            { note: "E4", duration: 1, lyric: "Ma" },
            { note: "D4", duration: 1, lyric: "ry" },
            { note: "C4", duration: 1, lyric: "had" },
            { note: "D4", duration: 1, lyric: "a" },
            { note: "E4", duration: 1, lyric: "lit" },
            { note: "E4", duration: 1, lyric: "tle" },
            { note: "E4", duration: 2, lyric: "lamb" },
            // Little lamb, little lamb
            { note: "D4", duration: 1, lyric: "Lit" },
            { note: "D4", duration: 1, lyric: "tle" },
            { note: "D4", duration: 2, lyric: "lamb" },
            { note: "E4", duration: 1, lyric: "Lit" },
            { note: "G4", duration: 1, lyric: "tle" },
            { note: "G4", duration: 2, lyric: "lamb" },
            // Mary had a little lamb
            { note: "E4", duration: 1, lyric: "Ma" },
            { note: "D4", duration: 1, lyric: "ry" },
            { note: "C4", duration: 1, lyric: "had" },
            { note: "D4", duration: 1, lyric: "a" },
            { note: "E4", duration: 1, lyric: "lit" },
            { note: "E4", duration: 1, lyric: "tle" },
            { note: "E4", duration: 1, lyric: "lamb" },
            { note: "E4", duration: 1, lyric: "" },
            // Its fleece was white as snow
            { note: "D4", duration: 1, lyric: "Its" },
            { note: "D4", duration: 1, lyric: "fleece" },
            { note: "E4", duration: 1, lyric: "was" },
            { note: "D4", duration: 1, lyric: "white" },
            { note: "C4", duration: 2, lyric: "as" },
            { note: "C4", duration: 2, lyric: "snow" }
        ]
    },

    // ===== BOLLYWOOD SONGS =====
    {
        id: "kal-ho-na-ho",
        title: "Kal Ho Na Ho",
        titleHi: "कल हो ना हो",
        artist: "Shankar-Ehsaan-Loy",
        difficulty: "medium",
        instrument: "piano",
        description: "Iconic Bollywood song from the movie Kal Ho Na Ho",
        descriptionHi: "कल हो ना हो फिल्म का प्रतिष्ठित गाना",
        tags: ["bollywood", "romantic", "hindi"],
        notes: [
            // Kal ho na ho
            { note: "G4", duration: 1, lyric: "Kal" },
            { note: "A4", duration: 0.5, lyric: "ho" },
            { note: "B4", duration: 0.5, lyric: "naa" },
            { note: "C5", duration: 1.5, lyric: "ho" },
            // Har pal yahan
            { note: "B4", duration: 0.5, lyric: "Har" },
            { note: "A4", duration: 0.5, lyric: "pal" },
            { note: "G4", duration: 0.5, lyric: "ya" },
            { note: "A4", duration: 1.5, lyric: "haan" },
            // Jee bhar jiyo
            { note: "G4", duration: 0.5, lyric: "Jee" },
            { note: "F#4", duration: 0.5, lyric: "bhar" },
            { note: "E4", duration: 0.5, lyric: "ji" },
            { note: "D4", duration: 1.5, lyric: "yo" },
            // Jo hai sama
            { note: "E4", duration: 0.5, lyric: "Jo" },
            { note: "F#4", duration: 0.5, lyric: "hai" },
            { note: "G4", duration: 0.5, lyric: "sa" },
            { note: "A4", duration: 1.5, lyric: "maa" },
            // Kal ho na ho
            { note: "G4", duration: 1, lyric: "Kal" },
            { note: "A4", duration: 0.5, lyric: "ho" },
            { note: "B4", duration: 0.5, lyric: "naa" },
            { note: "C5", duration: 2, lyric: "ho" }
        ]
    },
    {
        id: "tum-hi-ho",
        title: "Tum Hi Ho",
        titleHi: "तुम ही हो",
        artist: "Mithoon / Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic ballad from the movie Aashiqui 2",
        descriptionHi: "आशिकी 2 फिल्म का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "hindi"],
        notes: [
            // Hum tere bin
            { note: "E4", duration: 0.5, lyric: "Hum" },
            { note: "F#4", duration: 0.5, lyric: "te" },
            { note: "G4", duration: 0.5, lyric: "re" },
            { note: "A4", duration: 1.5, lyric: "bin" },
            // Ab reh nahi sakte
            { note: "G4", duration: 0.5, lyric: "Ab" },
            { note: "F#4", duration: 0.5, lyric: "reh" },
            { note: "E4", duration: 0.5, lyric: "na" },
            { note: "D4", duration: 0.5, lyric: "hi" },
            { note: "E4", duration: 1, lyric: "sak" },
            { note: "F#4", duration: 1, lyric: "te" },
            // Tere bina kya wajood mera
            { note: "G4", duration: 0.5, lyric: "Te" },
            { note: "A4", duration: 0.5, lyric: "re" },
            { note: "B4", duration: 0.5, lyric: "bi" },
            { note: "C5", duration: 1, lyric: "na" },
            { note: "B4", duration: 0.5, lyric: "Kya" },
            { note: "A4", duration: 0.5, lyric: "wa" },
            { note: "G4", duration: 0.5, lyric: "jood" },
            { note: "A4", duration: 1, lyric: "me" },
            { note: "G4", duration: 1, lyric: "ra" },
            // Tum hi ho
            { note: "E4", duration: 1, lyric: "Tum" },
            { note: "F#4", duration: 0.5, lyric: "hi" },
            { note: "G4", duration: 2, lyric: "ho" }
        ]
    },

    // ===== NEW BOLLYWOOD SONGS (Batch 1) =====
    {
        id: "tere-bin",
        title: "Tere Bin",
        titleHi: "तेरे बिन",
        artist: "Atif Aslam",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic ballad from Bas Ek Pal",
        descriptionHi: "बस एक पल फिल्म का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "atif-aslam"],
        notes: [
            { note: "D5", duration: 0.5, lyric: "Te" },
            { note: "D5", duration: 0.5, lyric: "re" },
            { note: "D5", duration: 0.5, lyric: "bin" },
            { note: "E5", duration: 0.5, lyric: "main" },
            { note: "D5", duration: 0.5, lyric: "yun" },
            { note: "E5", duration: 0.5, lyric: "kai" },
            { note: "E5", duration: 0.5, lyric: "se" },
            { note: "D5", duration: 0.5, lyric: "ji" },
            { note: "E5", duration: 0.5, lyric: "ya" },
            { note: "D5", duration: 0.5, lyric: "kai" },
            { note: "C5", duration: 0.5, lyric: "se" },
            { note: "B4", duration: 0.5, lyric: "ji" },
            { note: "C5", duration: 1, lyric: "ya" }
        ]
    },
    {
        id: "laal-ishq",
        title: "Laal Ishq",
        titleHi: "लाल इश्क",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Soulful song from Ram-Leela",
        descriptionHi: "राम-लीला का आत्मीय गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "D#5", duration: 0.5, lyric: "Yeh" },
            { note: "D5", duration: 0.5, lyric: "kaa" },
            { note: "A#4", duration: 0.5, lyric: "li" },
            { note: "D#5", duration: 0.5, lyric: "raat" },
            { note: "D5", duration: 0.5, lyric: "ja" },
            { note: "A#4", duration: 0.5, lyric: "kad" },
            { note: "G4", duration: 0.5, lyric: "loon" },
            { note: "A#4", duration: 0.5, lyric: "yeh" },
            { note: "G4", duration: 0.5, lyric: "than" },
            { note: "F4", duration: 0.5, lyric: "da" },
            { note: "F4", duration: 1, lyric: "chand" }
        ]
    },
    {
        id: "nadaan-parinde",
        title: "Nadaan Parinde",
        titleHi: "नादान परिंदे",
        artist: "A.R. Rahman",
        difficulty: "medium",
        instrument: "piano",
        description: "Iconic song from Rockstar",
        descriptionHi: "रॉकस्टार का प्रसिद्ध गाना",
        tags: ["bollywood", "ar-rahman", "rockstar"],
        notes: [
            { note: "C#5", duration: 0.5, lyric: "O" },
            { note: "C#5", duration: 0.5, lyric: "na" },
            { note: "D5", duration: 0.5, lyric: "daan" },
            { note: "E5", duration: 0.5, lyric: "pa" },
            { note: "E5", duration: 0.5, lyric: "rin" },
            { note: "F#5", duration: 0.5, lyric: "de" },
            { note: "E5", duration: 0.5, lyric: "ghar" },
            { note: "E5", duration: 0.5, lyric: "aa" },
            { note: "D5", duration: 0.5, lyric: "ja" },
            { note: "C#5", duration: 0.5, lyric: "ghar" },
            { note: "B4", duration: 0.5, lyric: "aa" },
            { note: "C#5", duration: 1, lyric: "ja" }
        ]
    },
    {
        id: "kun-faya-kun",
        title: "Kun Faya Kun",
        titleHi: "कुन फाया कुन",
        artist: "A.R. Rahman",
        difficulty: "medium",
        instrument: "piano",
        description: "Sufi masterpiece from Rockstar",
        descriptionHi: "रॉकस्टार का सूफी गाना",
        tags: ["bollywood", "sufi", "ar-rahman", "rockstar"],
        notes: [
            { note: "F#4", duration: 0.5, lyric: "Kun" },
            { note: "A4", duration: 0.5, lyric: "fa" },
            { note: "D5", duration: 0.5, lyric: "ya" },
            { note: "D5", duration: 0.5, lyric: "kun" },
            { note: "E5", duration: 0.5, lyric: "kun" },
            { note: "C#5", duration: 0.5, lyric: "fa" },
            { note: "D5", duration: 0.5, lyric: "ya" },
            { note: "E5", duration: 0.5, lyric: "kun" },
            { note: "C#5", duration: 0.5, lyric: "fa" },
            { note: "D5", duration: 0.5, lyric: "ya" },
            { note: "C#5", duration: 0.5, lyric: "kun" },
            { note: "B4", duration: 0.5, lyric: "fa" },
            { note: "C#5", duration: 0.5, lyric: "ya" },
            { note: "B4", duration: 1, lyric: "kun" }
        ]
    },
    {
        id: "jaadu-teri-nazar",
        title: "Jaadu Teri Nazar",
        titleHi: "जादू तेरी नजर",
        artist: "Udit Narayan",
        difficulty: "easy",
        instrument: "piano",
        description: "Romantic classic from Darr",
        descriptionHi: "डर फिल्म का रोमांटिक गाना",
        tags: ["bollywood", "classic", "romantic"],
        notes: [
            { note: "F#4", duration: 0.5, lyric: "Jaa" },
            { note: "C#5", duration: 0.5, lyric: "du" },
            { note: "B4", duration: 0.5, lyric: "te" },
            { note: "C#5", duration: 0.5, lyric: "ri" },
            { note: "B4", duration: 0.5, lyric: "na" },
            { note: "A4", duration: 0.5, lyric: "zar" },
            { note: "G#4", duration: 1, lyric: "" },
            { note: "E4", duration: 0.5, lyric: "Khush" },
            { note: "E4", duration: 0.5, lyric: "boo" },
            { note: "B4", duration: 0.5, lyric: "te" },
            { note: "A4", duration: 0.5, lyric: "ra" },
            { note: "B4", duration: 0.5, lyric: "ba" },
            { note: "A4", duration: 0.5, lyric: "dan" },
            { note: "G#4", duration: 0.5, lyric: "" },
            { note: "F#4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "chura-ke-dil-mera",
        title: "Chura Ke Dil Mera",
        titleHi: "चुरा के दिल मेरा",
        artist: "Kumar Sanu & Alka Yagnik",
        difficulty: "hard",
        instrument: "piano",
        description: "Peppy song from Main Khiladi Tu Anari",
        descriptionHi: "मैं खिलाड़ी तू अनाड़ी का गाना",
        tags: ["bollywood", "90s", "dance"],
        notes: [
            { note: "B5", duration: 0.5, lyric: "Chu" },
            { note: "G#5", duration: 0.5, lyric: "ra" },
            { note: "E5", duration: 0.5, lyric: "ke" },
            { note: "D#5", duration: 0.5, lyric: "dil" },
            { note: "C#5", duration: 0.5, lyric: "me" },
            { note: "D#5", duration: 0.5, lyric: "ra" },
            { note: "C#5", duration: 0.5, lyric: "go" },
            { note: "D#5", duration: 0.5, lyric: "ri" },
            { note: "C#5", duration: 0.5, lyric: "ya" },
            { note: "B4", duration: 0.5, lyric: "cha" },
            { note: "B4", duration: 0.5, lyric: "li" },
            { note: "C#5", duration: 0.5, lyric: "" },
            { note: "D#5", duration: 0.5, lyric: "" },
            { note: "B4", duration: 0.5, lyric: "" },
            { note: "C#5", duration: 1, lyric: "" }
        ]
    },
    {
        id: "koi-kahe",
        title: "Koi Kahe Kehta Rahe",
        titleHi: "कोई कहे कहता रहे",
        artist: "Shankar Mahadevan",
        difficulty: "medium",
        instrument: "piano",
        description: "Fun song from Dil Chahta Hai",
        descriptionHi: "दिल चाहता है का मजेदार गाना",
        tags: ["bollywood", "friendship", "2000s"],
        notes: [
            { note: "F#5", duration: 0.5, lyric: "Koi" },
            { note: "G5", duration: 0.5, lyric: "ka" },
            { note: "D5", duration: 0.5, lyric: "he" },
            { note: "D5", duration: 0.5, lyric: "keh" },
            { note: "F#5", duration: 0.5, lyric: "ta" },
            { note: "G5", duration: 0.5, lyric: "ra" },
            { note: "D5", duration: 0.5, lyric: "he" },
            { note: "D5", duration: 1, lyric: "" },
            { note: "C5", duration: 0.5, lyric: "Kit" },
            { note: "C5", duration: 0.5, lyric: "na" },
            { note: "C5", duration: 0.5, lyric: "bhi" },
            { note: "C5", duration: 0.5, lyric: "hum" },
            { note: "C5", duration: 0.5, lyric: "ko" },
            { note: "E5", duration: 0.5, lyric: "dee" },
            { note: "D5", duration: 0.5, lyric: "wa" },
            { note: "D5", duration: 0.5, lyric: "na" },
            { note: "D5", duration: 1, lyric: "" }
        ]
    },
    {
        id: "pani-da-rang",
        title: "Pani Da Rang",
        titleHi: "पानी दा रंग",
        artist: "Ayushmann Khurrana",
        difficulty: "easy",
        instrument: "piano",
        description: "Romantic song from Vicky Donor",
        descriptionHi: "विकी डोनर का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "punjabi"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Pa" },
            { note: "A4", duration: 0.5, lyric: "ni" },
            { note: "B4", duration: 0.5, lyric: "da" },
            { note: "C5", duration: 0.5, lyric: "rang" },
            { note: "B4", duration: 0.5, lyric: "vekh" },
            { note: "A4", duration: 0.5, lyric: "ke" },
            { note: "G4", duration: 1, lyric: "" },
            { note: "E4", duration: 0.5, lyric: "Mein" },
            { note: "F#4", duration: 0.5, lyric: "rang" },
            { note: "G4", duration: 0.5, lyric: "ga" },
            { note: "A4", duration: 1, lyric: "yi" }
        ]
    },
    {
        id: "tujhe-dekha-toh",
        title: "Tujhe Dekha Toh",
        titleHi: "तुझे देखा तो",
        artist: "Kumar Sanu & Lata Mangeshkar",
        difficulty: "medium",
        instrument: "piano",
        description: "Iconic song from DDLJ",
        descriptionHi: "दिलवाले दुल्हनिया ले जायेंगे का गाना",
        tags: ["bollywood", "classic", "romantic", "90s"],
        notes: [
            { note: "C5", duration: 0.5, lyric: "Tuj" },
            { note: "D5", duration: 0.5, lyric: "he" },
            { note: "E5", duration: 0.5, lyric: "de" },
            { note: "F5", duration: 0.5, lyric: "kha" },
            { note: "E5", duration: 0.5, lyric: "toh" },
            { note: "D5", duration: 0.5, lyric: "yeh" },
            { note: "C5", duration: 0.5, lyric: "jaa" },
            { note: "B4", duration: 0.5, lyric: "na" },
            { note: "C5", duration: 1, lyric: "sa" },
            { note: "D5", duration: 0.5, lyric: "nam" }
        ]
    },
    {
        id: "kabhi-khushi",
        title: "Kabhi Khushi Kabhie Gham",
        titleHi: "कभी खुशी कभी गम",
        artist: "Lata Mangeshkar",
        difficulty: "medium",
        instrument: "piano",
        description: "Title track from K3G",
        descriptionHi: "कभी खुशी कभी गम का टाइटल गाना",
        tags: ["bollywood", "classic", "emotional"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Ka" },
            { note: "A4", duration: 0.5, lyric: "bhi" },
            { note: "B4", duration: 0.5, lyric: "khu" },
            { note: "C5", duration: 0.5, lyric: "shi" },
            { note: "B4", duration: 0.5, lyric: "ka" },
            { note: "A4", duration: 0.5, lyric: "bhi" },
            { note: "G4", duration: 0.5, lyric: "gham" }
        ]
    },
    {
        id: "ae-dil-hai-mushkil",
        title: "Ae Dil Hai Mushkil",
        titleHi: "ऐ दिल है मुश्किल",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Title song from ADHM",
        descriptionHi: "ऐ दिल है मुश्किल का टाइटल गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Ae" },
            { note: "G4", duration: 0.5, lyric: "dil" },
            { note: "A4", duration: 0.5, lyric: "hai" },
            { note: "B4", duration: 0.5, lyric: "mush" },
            { note: "C5", duration: 0.5, lyric: "kil" },
            { note: "B4", duration: 0.5, lyric: "jee" },
            { note: "A4", duration: 0.5, lyric: "na" },
            { note: "G4", duration: 0.5, lyric: "ya" },
            { note: "A4", duration: 0.5, lyric: "han" },
            { note: "G4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "chaiyya-chaiyya",
        title: "Chaiyya Chaiyya",
        titleHi: "छैया छैया",
        artist: "Sukhwinder Singh",
        difficulty: "hard",
        instrument: "piano",
        description: "Iconic train song from Dil Se",
        descriptionHi: "दिल से का प्रसिद्ध गाना",
        tags: ["bollywood", "ar-rahman", "dance"],
        notes: [
            { note: "G4", duration: 0.3, lyric: "Chai" },
            { note: "A4", duration: 0.3, lyric: "yya" },
            { note: "B4", duration: 0.3, lyric: "chai" },
            { note: "C5", duration: 0.3, lyric: "yya" },
            { note: "D5", duration: 0.5, lyric: "chai" },
            { note: "C5", duration: 0.5, lyric: "yya" }
        ]
    },
    {
        id: "gerua",
        title: "Gerua",
        titleHi: "गेरुआ",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Beautiful song from Dilwale",
        descriptionHi: "दिलवाले का खूबसूरत गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Rang" },
            { note: "G4", duration: 0.5, lyric: "de" },
            { note: "A4", duration: 0.5, lyric: "tu" },
            { note: "B4", duration: 0.5, lyric: "mo" },
            { note: "C5", duration: 0.5, lyric: "he" },
            { note: "B4", duration: 0.5, lyric: "ge" },
            { note: "A4", duration: 0.5, lyric: "ru" },
            { note: "G4", duration: 1, lyric: "a" }
        ]
    },
    {
        id: "phir-bhi-dil",
        title: "Phir Bhi Dil Hai Hindustani",
        titleHi: "फिर भी दिल है हिंदुस्तानी",
        artist: "Udit Narayan & Kavita Krishnamurthy",
        difficulty: "medium",
        instrument: "piano",
        description: "Patriotic song from PBDHH",
        descriptionHi: "देशभक्ति गाना",
        tags: ["bollywood", "patriotic"],
        notes: [
            { note: "C5", duration: 0.5, lyric: "Phir" },
            { note: "D5", duration: 0.5, lyric: "bhi" },
            { note: "E5", duration: 0.5, lyric: "dil" },
            { note: "F5", duration: 0.5, lyric: "hai" },
            { note: "G5", duration: 0.5, lyric: "Hin" },
            { note: "F5", duration: 0.5, lyric: "dus" },
            { note: "E5", duration: 0.5, lyric: "ta" },
            { note: "D5", duration: 1, lyric: "ni" }
        ]
    },
    {
        id: "dil-to-pagal",
        title: "Dil To Pagal Hai",
        titleHi: "दिल तो पागल है",
        artist: "Udit Narayan & Lata Mangeshkar",
        difficulty: "easy",
        instrument: "piano",
        description: "Title song from DTPH",
        descriptionHi: "दिल तो पागल है का टाइटल गाना",
        tags: ["bollywood", "romantic", "90s"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Dil" },
            { note: "G4", duration: 0.5, lyric: "to" },
            { note: "A4", duration: 0.5, lyric: "pa" },
            { note: "B4", duration: 0.5, lyric: "gal" },
            { note: "C5", duration: 0.5, lyric: "hai" },
            { note: "B4", duration: 0.5, lyric: "dil" },
            { note: "A4", duration: 0.5, lyric: "dee" },
            { note: "G4", duration: 0.5, lyric: "wa" },
            { note: "A4", duration: 1, lyric: "na" },
            { note: "G4", duration: 1, lyric: "hai" }
        ]
    },
    {
        id: "mere-sapno",
        title: "Mere Sapno Ki Rani",
        titleHi: "मेरे सपनों की रानी",
        artist: "Kishore Kumar",
        difficulty: "easy",
        instrument: "piano",
        description: "Evergreen classic from Aradhana",
        descriptionHi: "आराधना का सदाबहार गाना",
        tags: ["bollywood", "classic", "kishore-kumar"],
        notes: [
            { note: "C4", duration: 0.5, lyric: "Me" },
            { note: "E4", duration: 0.5, lyric: "re" },
            { note: "G4", duration: 0.5, lyric: "sap" },
            { note: "A4", duration: 0.5, lyric: "no" },
            { note: "G4", duration: 0.5, lyric: "ki" },
            { note: "E4", duration: 0.5, lyric: "ra" },
            { note: "C4", duration: 1, lyric: "ni" }
        ]
    },
    {
        id: "lag-ja-gale",
        title: "Lag Ja Gale",
        titleHi: "लग जा गले",
        artist: "Lata Mangeshkar",
        difficulty: "easy",
        instrument: "piano",
        description: "Timeless melody from Woh Kaun Thi",
        descriptionHi: "वो कौन थी का सदाबहार गाना",
        tags: ["bollywood", "classic", "lata"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Lag" },
            { note: "A4", duration: 0.5, lyric: "ja" },
            { note: "B4", duration: 0.5, lyric: "ga" },
            { note: "C5", duration: 1, lyric: "le" },
            { note: "B4", duration: 0.5, lyric: "ke" },
            { note: "A4", duration: 0.5, lyric: "phir" },
            { note: "G4", duration: 0.5, lyric: "yeh" },
            { note: "F#4", duration: 0.5, lyric: "has" },
            { note: "G4", duration: 1, lyric: "een" }
        ]
    },
    {
        id: "agar-tum-saath-ho",
        title: "Agar Tum Saath Ho",
        titleHi: "अगर तुम साथ हो",
        artist: "Arijit Singh & Alka Yagnik",
        difficulty: "medium",
        instrument: "piano",
        description: "Emotional song from Tamasha",
        descriptionHi: "तमाशा का भावुक गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "A" },
            { note: "G4", duration: 0.5, lyric: "gar" },
            { note: "A4", duration: 0.5, lyric: "tum" },
            { note: "B4", duration: 0.5, lyric: "saath" },
            { note: "C5", duration: 0.5, lyric: "ho" },
            { note: "B4", duration: 0.5, lyric: "phir" },
            { note: "A4", duration: 0.5, lyric: "kya" },
            { note: "G4", duration: 1, lyric: "hai" }
        ]
    },
    {
        id: "raabta",
        title: "Raabta",
        titleHi: "राबता",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Melodious song from Agent Vinod",
        descriptionHi: "एजेंट विनोद का मधुर गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Is" },
            { note: "A4", duration: 0.5, lyric: "dil" },
            { note: "B4", duration: 0.5, lyric: "mein" },
            { note: "C5", duration: 0.5, lyric: "ek" },
            { note: "D5", duration: 0.5, lyric: "lehar" },
            { note: "C5", duration: 0.5, lyric: "si" },
            { note: "B4", duration: 0.5, lyric: "uthi" },
            { note: "A4", duration: 1, lyric: "hai" }
        ]
    },
    {
        id: "ghungroo",
        title: "Ghungroo",
        titleHi: "घुंघरू",
        artist: "Arijit Singh & Shilpa Rao",
        difficulty: "hard",
        instrument: "piano",
        description: "Peppy song from War",
        descriptionHi: "वॉर का जोशीला गाना",
        tags: ["bollywood", "dance", "arijit-singh"],
        notes: [
            { note: "E5", duration: 0.3, lyric: "Ghun" },
            { note: "F#5", duration: 0.3, lyric: "groo" },
            { note: "G5", duration: 0.5, lyric: "toot" },
            { note: "F#5", duration: 0.3, lyric: "ga" },
            { note: "E5", duration: 0.3, lyric: "ye" },
            { note: "D5", duration: 0.5, lyric: "ghun" },
            { note: "C#5", duration: 0.5, lyric: "groo" }
        ]
    },
    {
        id: "bekhayali",
        title: "Bekhayali",
        titleHi: "बेखयाली",
        artist: "Sachet Tandon",
        difficulty: "medium",
        instrument: "piano",
        description: "Hit song from Kabir Singh",
        descriptionHi: "कबीर सिंह का हिट गाना",
        tags: ["bollywood", "romantic", "sad"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Be" },
            { note: "G4", duration: 0.5, lyric: "kha" },
            { note: "A4", duration: 0.5, lyric: "ya" },
            { note: "B4", duration: 0.5, lyric: "li" },
            { note: "C5", duration: 0.5, lyric: "mein" },
            { note: "B4", duration: 0.5, lyric: "bhi" },
            { note: "A4", duration: 0.5, lyric: "te" },
            { note: "G4", duration: 1, lyric: "ra" }
        ]
    },
    {
        id: "tere-naam",
        title: "Tere Naam",
        titleHi: "तेरे नाम",
        artist: "Udit Narayan",
        difficulty: "easy",
        instrument: "piano",
        description: "Romantic song from Tere Naam",
        descriptionHi: "तेरे नाम का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "sad"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Te" },
            { note: "A4", duration: 0.5, lyric: "re" },
            { note: "B4", duration: 0.5, lyric: "naam" },
            { note: "C5", duration: 0.5, lyric: "hum" },
            { note: "B4", duration: 0.5, lyric: "ne" },
            { note: "A4", duration: 0.5, lyric: "ki" },
            { note: "G4", duration: 0.5, lyric: "ya" },
            { note: "F#4", duration: 0.5, lyric: "hai" },
            { note: "G4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "ranjha",
        title: "Ranjha",
        titleHi: "रांझा",
        artist: "B Praak",
        difficulty: "medium",
        instrument: "piano",
        description: "Hit song from Shershaah",
        descriptionHi: "शेरशाह का हिट गाना",
        tags: ["bollywood", "romantic", "punjabi"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Ru" },
            { note: "G4", duration: 0.5, lyric: "haan" },
            { note: "A4", duration: 0.5, lyric: "aa" },
            { note: "B4", duration: 0.5, lyric: "ja" },
            { note: "C5", duration: 0.5, lyric: "ni" },
            { note: "B4", duration: 0.5, lyric: "tu" },
            { note: "A4", duration: 0.5, lyric: "ni" },
            { note: "G4", duration: 0.5, lyric: "ye" },
            { note: "A4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "kesariya",
        title: "Kesariya",
        titleHi: "केसरिया",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Brahmastra",
        descriptionHi: "ब्रह्मास्त्र का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Ke" },
            { note: "A4", duration: 0.5, lyric: "sa" },
            { note: "B4", duration: 0.5, lyric: "ri" },
            { note: "C5", duration: 0.5, lyric: "ya" },
            { note: "D5", duration: 0.5, lyric: "te" },
            { note: "C5", duration: 0.5, lyric: "ra" },
            { note: "B4", duration: 0.5, lyric: "ishq" },
            { note: "A4", duration: 0.5, lyric: "hai" },
            { note: "G4", duration: 1, lyric: "pi" },
            { note: "A4", duration: 1, lyric: "ya" }
        ]
    },

    // ===== NEW BOLLYWOOD SONGS (Batch 2) =====
    {
        id: "o-rangrez",
        title: "O Rangrez",
        titleHi: "ओ रंगरेज़",
        artist: "Shankar Mahadevan",
        difficulty: "medium",
        instrument: "piano",
        description: "Energetic song from Bhaag Milkha Bhaag",
        descriptionHi: "भाग मिल्खा भाग का गाना",
        tags: ["bollywood", "motivational"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "O" },
            { note: "A4", duration: 0.5, lyric: "ran" },
            { note: "B4", duration: 0.5, lyric: "grez" },
            { note: "C5", duration: 0.5, lyric: "me" },
            { note: "B4", duration: 0.5, lyric: "re" },
            { note: "A4", duration: 0.5, lyric: "dil" },
            { note: "G4", duration: 1, lyric: "ko" }
        ]
    },
    {
        id: "saat-samundar",
        title: "Saat Samundar Paar",
        titleHi: "सात समुंदर पार",
        artist: "Sadhana Sargam",
        difficulty: "medium",
        instrument: "piano",
        description: "Classic song from Vishwatma",
        descriptionHi: "विश्वात्मा का क्लासिक गाना",
        tags: ["bollywood", "90s", "dance"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Saat" },
            { note: "G4", duration: 0.5, lyric: "sa" },
            { note: "A4", duration: 0.5, lyric: "mun" },
            { note: "B4", duration: 0.5, lyric: "dar" },
            { note: "C5", duration: 0.5, lyric: "paar" },
            { note: "B4", duration: 0.5, lyric: "main" },
            { note: "A4", duration: 0.5, lyric: "te" },
            { note: "G4", duration: 0.5, lyric: "re" },
            { note: "A4", duration: 1, lyric: "liye" }
        ]
    },
    {
        id: "channa-ve",
        title: "Channa Ve",
        titleHi: "चन्ना वे",
        artist: "Arijit Singh",
        difficulty: "easy",
        instrument: "piano",
        description: "Romantic song from Bhoot",
        descriptionHi: "भूत फिल्म का गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Chan" },
            { note: "G4", duration: 0.5, lyric: "na" },
            { note: "A4", duration: 0.5, lyric: "ve" },
            { note: "B4", duration: 0.5, lyric: "ghar" },
            { note: "C5", duration: 0.5, lyric: "aa" },
            { note: "B4", duration: 0.5, lyric: "ja" },
            { note: "A4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "nagada-sang-dhol",
        title: "Nagada Sang Dhol",
        titleHi: "नगाड़ा संग ढोल",
        artist: "Shreya Ghoshal",
        difficulty: "hard",
        instrument: "piano",
        description: "Festive song from Goliyon Ki Raasleela Ram-Leela",
        descriptionHi: "राम-लीला का उत्सव गाना",
        tags: ["bollywood", "dance", "garba"],
        notes: [
            { note: "G4", duration: 0.3, lyric: "Na" },
            { note: "A4", duration: 0.3, lyric: "ga" },
            { note: "B4", duration: 0.3, lyric: "da" },
            { note: "C5", duration: 0.3, lyric: "sang" },
            { note: "D5", duration: 0.5, lyric: "dhol" },
            { note: "C5", duration: 0.5, lyric: "ba" },
            { note: "B4", duration: 0.5, lyric: "je" }
        ]
    },
    {
        id: "kabira",
        title: "Kabira",
        titleHi: "कबीरा",
        artist: "Arijit Singh & Harshdeep Kaur",
        difficulty: "medium",
        instrument: "piano",
        description: "Soulful song from Yeh Jawaani Hai Deewani",
        descriptionHi: "ये जवानी है दीवानी का गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Ka" },
            { note: "A4", duration: 0.5, lyric: "bi" },
            { note: "B4", duration: 0.5, lyric: "ra" },
            { note: "C5", duration: 0.5, lyric: "man" },
            { note: "B4", duration: 0.5, lyric: "ja" },
            { note: "A4", duration: 0.5, lyric: "ni" },
            { note: "G4", duration: 1, lyric: "re" }
        ]
    },
    {
        id: "ilahi",
        title: "Ilahi",
        titleHi: "इलाही",
        artist: "Arijit Singh",
        difficulty: "easy",
        instrument: "piano",
        description: "Carefree song from Yeh Jawaani Hai Deewani",
        descriptionHi: "ये जवानी है देवानी का गाना",
        tags: ["bollywood", "travel", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "I" },
            { note: "G4", duration: 0.5, lyric: "la" },
            { note: "A4", duration: 0.5, lyric: "hi" },
            { note: "B4", duration: 0.5, lyric: "mera" },
            { note: "C5", duration: 0.5, lyric: "jee" },
            { note: "B4", duration: 0.5, lyric: "aa" },
            { note: "A4", duration: 0.5, lyric: "ye" },
            { note: "G4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "balam-pichkari",
        title: "Balam Pichkari",
        titleHi: "बालम पिचकारी",
        artist: "Vishal Dadlani & Shalmali Kholgade",
        difficulty: "hard",
        instrument: "piano",
        description: "Holi song from Yeh Jawaani Hai Deewani",
        descriptionHi: "ये जवानी है दीवानी का होली गाना",
        tags: ["bollywood", "holi", "dance"],
        notes: [
            { note: "G4", duration: 0.3, lyric: "Ba" },
            { note: "A4", duration: 0.3, lyric: "lam" },
            { note: "B4", duration: 0.5, lyric: "pich" },
            { note: "C5", duration: 0.5, lyric: "ka" },
            { note: "B4", duration: 0.5, lyric: "ri" }
        ]
    },
    {
        id: "dil-diyan-gallan",
        title: "Dil Diyan Gallan",
        titleHi: "दिल दियां गल्लां",
        artist: "Atif Aslam",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Tiger Zinda Hai",
        descriptionHi: "टाइगर ज़िंदा है का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "atif-aslam"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Dil" },
            { note: "A4", duration: 0.5, lyric: "di" },
            { note: "B4", duration: 0.5, lyric: "yaan" },
            { note: "C5", duration: 0.5, lyric: "gal" },
            { note: "B4", duration: 0.5, lyric: "laan" },
            { note: "A4", duration: 0.5, lyric: "kar" },
            { note: "G4", duration: 0.5, lyric: "ke" },
            { note: "F#4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "tera-ban-jaunga",
        title: "Tera Ban Jaunga",
        titleHi: "तेरा बन जाऊंगा",
        artist: "Akhil Sachdeva & Tulsi Kumar",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Kabir Singh",
        descriptionHi: "कबीर सिंह का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "sad"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Te" },
            { note: "G4", duration: 0.5, lyric: "ra" },
            { note: "A4", duration: 0.5, lyric: "ban" },
            { note: "B4", duration: 0.5, lyric: "jau" },
            { note: "C5", duration: 0.5, lyric: "nga" },
            { note: "B4", duration: 0.5, lyric: "aa" },
            { note: "A4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "pehla-nasha",
        title: "Pehla Nasha",
        titleHi: "पहला नशा",
        artist: "Udit Narayan & Sadhana Sargam",
        difficulty: "easy",
        instrument: "piano",
        description: "Romantic classic from Jo Jeeta Wohi Sikandar",
        descriptionHi: "जो जीता वही सिकंदर का गाना",
        tags: ["bollywood", "classic", "romantic", "90s"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Peh" },
            { note: "A4", duration: 0.5, lyric: "la" },
            { note: "B4", duration: 0.5, lyric: "na" },
            { note: "C5", duration: 1, lyric: "sha" },
            { note: "B4", duration: 0.5, lyric: "peh" },
            { note: "A4", duration: 0.5, lyric: "li" },
            { note: "G4", duration: 0.5, lyric: "khu" },
            { note: "A4", duration: 1, lyric: "mar" }
        ]
    },
    {
        id: "kajra-re",
        title: "Kajra Re",
        titleHi: "कजरा रे",
        artist: "Alisha Chinai",
        difficulty: "hard",
        instrument: "piano",
        description: "Dance number from Bunty Aur Babli",
        descriptionHi: "बंटी और बबली का गाना",
        tags: ["bollywood", "dance", "2000s"],
        notes: [
            { note: "A4", duration: 0.5, lyric: "Kaj" },
            { note: "B4", duration: 0.5, lyric: "ra" },
            { note: "C5", duration: 0.5, lyric: "re" },
            { note: "D5", duration: 0.5, lyric: "kaj" },
            { note: "C5", duration: 0.5, lyric: "ra" },
            { note: "B4", duration: 1, lyric: "re" }
        ]
    },
    {
        id: "kal-ho-naa-ho",
        title: "Kal Ho Naa Ho",
        titleHi: "कल हो ना हो",
        artist: "Sonu Nigam",
        difficulty: "medium",
        instrument: "piano",
        description: "Title track from Kal Ho Naa Ho",
        descriptionHi: "कल हो ना हो का टाइटल गाना",
        tags: ["bollywood", "emotional", "classic"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Kal" },
            { note: "A4", duration: 0.5, lyric: "ho" },
            { note: "B4", duration: 0.5, lyric: "naa" },
            { note: "C5", duration: 1, lyric: "ho" },
            { note: "B4", duration: 0.5, lyric: "yeh" },
            { note: "A4", duration: 0.5, lyric: "pal" },
            { note: "G4", duration: 0.5, lyric: "ho" },
            { note: "F#4", duration: 0.5, lyric: "naa" },
            { note: "G4", duration: 1, lyric: "ho" }
        ]
    },
    {
        id: "muskurane",
        title: "Muskurane Ki Wajah",
        titleHi: "मुस्कुराने की वजह",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from CityLights",
        descriptionHi: "सिटीलाइट्स का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Mus" },
            { note: "G4", duration: 0.5, lyric: "ku" },
            { note: "A4", duration: 0.5, lyric: "ra" },
            { note: "B4", duration: 0.5, lyric: "ne" },
            { note: "C5", duration: 0.5, lyric: "ki" },
            { note: "B4", duration: 0.5, lyric: "wa" },
            { note: "A4", duration: 0.5, lyric: "jah" },
            { note: "G4", duration: 0.5, lyric: "tum" },
            { note: "A4", duration: 1, lyric: "ho" }
        ]
    },
    {
        id: "tum-se-hi",
        title: "Tum Se Hi",
        titleHi: "तुम से ही",
        artist: "Mohit Chauhan",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Jab We Met",
        descriptionHi: "जब वी मेट का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "mohit-chauhan"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Tum" },
            { note: "A4", duration: 0.5, lyric: "se" },
            { note: "B4", duration: 1, lyric: "hi" },
            { note: "C5", duration: 0.5, lyric: "din" },
            { note: "B4", duration: 0.5, lyric: "ho" },
            { note: "A4", duration: 0.5, lyric: "ta" },
            { note: "G4", duration: 1, lyric: "hai" }
        ]
    },
    {
        id: "yeh-ishq-hai",
        title: "Yeh Ishq Hai",
        titleHi: "यह इश्क है",
        artist: "Shreya Ghoshal",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Jab We Met",
        descriptionHi: "जब वी मेट का रोमांटिक गाना",
        tags: ["bollywood", "romantic"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Yeh" },
            { note: "G4", duration: 0.5, lyric: "ishq" },
            { note: "A4", duration: 1, lyric: "hai" },
            { note: "B4", duration: 0.5, lyric: "yeh" },
            { note: "C5", duration: 0.5, lyric: "ishq" },
            { note: "B4", duration: 1, lyric: "hai" }
        ]
    },
    {
        id: "masakali",
        title: "Masakali",
        titleHi: "मसकली",
        artist: "Mohit Chauhan",
        difficulty: "medium",
        instrument: "piano",
        description: "Melodious song from Delhi-6",
        descriptionHi: "दिल्ली-6 का मधुर गाना",
        tags: ["bollywood", "ar-rahman"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Ma" },
            { note: "A4", duration: 0.5, lyric: "sa" },
            { note: "B4", duration: 0.5, lyric: "ka" },
            { note: "C5", duration: 1, lyric: "li" },
            { note: "B4", duration: 0.5, lyric: "ma" },
            { note: "A4", duration: 0.5, lyric: "sa" },
            { note: "G4", duration: 0.5, lyric: "ka" },
            { note: "A4", duration: 1, lyric: "li" }
        ]
    },
    {
        id: "dil-ibaadat",
        title: "Dil Ibaadat",
        titleHi: "दिल इबादत",
        artist: "K.K.",
        difficulty: "easy",
        instrument: "piano",
        description: "Romantic song from Tum Mile",
        descriptionHi: "तुम मिले का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "kk"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Dil" },
            { note: "A4", duration: 0.5, lyric: "i" },
            { note: "B4", duration: 0.5, lyric: "baa" },
            { note: "C5", duration: 0.5, lyric: "dat" },
            { note: "B4", duration: 0.5, lyric: "kar" },
            { note: "A4", duration: 0.5, lyric: "ri" },
            { note: "G4", duration: 1, lyric: "ha" }
        ]
    },
    {
        id: "sanam-teri-kasam",
        title: "Sanam Teri Kasam",
        titleHi: "सनम तेरी कसम",
        artist: "Ankit Tiwari",
        difficulty: "medium",
        instrument: "piano",
        description: "Title track from Sanam Teri Kasam",
        descriptionHi: "सनम तेरी कसम का टाइटल गाना",
        tags: ["bollywood", "romantic", "sad"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Sa" },
            { note: "G4", duration: 0.5, lyric: "nam" },
            { note: "A4", duration: 0.5, lyric: "te" },
            { note: "B4", duration: 0.5, lyric: "ri" },
            { note: "C5", duration: 1, lyric: "ka" },
            { note: "B4", duration: 0.5, lyric: "sam" }
        ]
    },
    {
        id: "hawayein",
        title: "Hawayein",
        titleHi: "हवाएं",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Jab Harry Met Sejal",
        descriptionHi: "जब हैरी मेट सेजल का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Ha" },
            { note: "G4", duration: 0.5, lyric: "wa" },
            { note: "A4", duration: 0.5, lyric: "ye" },
            { note: "B4", duration: 1, lyric: "in" },
            { note: "C5", duration: 0.5, lyric: "hain" },
            { note: "B4", duration: 0.5, lyric: "ye" },
            { note: "A4", duration: 0.5, lyric: "kya" },
            { note: "G4", duration: 1, lyric: "hain" }
        ]
    },
    {
        id: "channa-mereya",
        title: "Channa Mereya",
        titleHi: "चन्ना मेरेया",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Heartbreak song from Ae Dil Hai Mushkil",
        descriptionHi: "ऐ दिल है मुश्किल का गाना",
        tags: ["bollywood", "romantic", "sad", "arijit-singh"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Chan" },
            { note: "A4", duration: 0.5, lyric: "na" },
            { note: "B4", duration: 0.5, lyric: "me" },
            { note: "C5", duration: 0.5, lyric: "re" },
            { note: "D5", duration: 1, lyric: "ya" },
            { note: "C5", duration: 0.5, lyric: "main" },
            { note: "B4", duration: 0.5, lyric: "te" },
            { note: "A4", duration: 0.5, lyric: "re" },
            { note: "G4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "tujhe-kitna-chahne",
        title: "Tujhe Kitna Chahne Lage",
        titleHi: "तुझे कितना चाहने लगे",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Kabir Singh",
        descriptionHi: "कबीर सिंह का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Tuj" },
            { note: "G4", duration: 0.5, lyric: "he" },
            { note: "A4", duration: 0.5, lyric: "kit" },
            { note: "B4", duration: 0.5, lyric: "na" },
            { note: "C5", duration: 0.5, lyric: "chah" },
            { note: "B4", duration: 0.5, lyric: "ne" },
            { note: "A4", duration: 0.5, lyric: "la" },
            { note: "G4", duration: 1, lyric: "ge" }
        ]
    },
    {
        id: "raataan-lambiyan",
        title: "Raataan Lambiyan",
        titleHi: "रातां लम्बियां",
        artist: "Jubin Nautiyal",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Shershaah",
        descriptionHi: "शेरशाह का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "punjabi"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Raa" },
            { note: "G4", duration: 0.5, lyric: "taan" },
            { note: "A4", duration: 0.5, lyric: "lam" },
            { note: "B4", duration: 0.5, lyric: "bi" },
            { note: "C5", duration: 1, lyric: "yan" }
        ]
    },
    {
        id: "mann-bharrya",
        title: "Mann Bharrya",
        titleHi: "मन भर्या",
        artist: "B Praak",
        difficulty: "easy",
        instrument: "piano",
        description: "Emotional Punjabi song",
        descriptionHi: "भावुक पंजाबी गाना",
        tags: ["bollywood", "punjabi", "sad"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Mann" },
            { note: "A4", duration: 0.5, lyric: "bhar" },
            { note: "B4", duration: 0.5, lyric: "ya" },
            { note: "C5", duration: 0.5, lyric: "ki" },
            { note: "B4", duration: 0.5, lyric: "kaar" },
            { note: "A4", duration: 0.5, lyric: "yeh" },
            { note: "G4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "phir-le-aaya-dil",
        title: "Phir Le Aaya Dil",
        titleHi: "फिर ले आया दिल",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Romantic song from Barfi",
        descriptionHi: "बर्फी का रोमांटिक गाना",
        tags: ["bollywood", "romantic", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Phir" },
            { note: "G4", duration: 0.5, lyric: "le" },
            { note: "A4", duration: 0.5, lyric: "aa" },
            { note: "B4", duration: 0.5, lyric: "ya" },
            { note: "C5", duration: 1, lyric: "dil" },
            { note: "B4", duration: 0.5, lyric: "ma" },
            { note: "A4", duration: 0.5, lyric: "ju" },
            { note: "G4", duration: 0.5, lyric: "hi" },
            { note: "A4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "tera-hone-laga-hoon",
        title: "Tera Hone Laga Hoon",
        titleHi: "तेरा होने लगा हूं",
        artist: "Atif Aslam",
        difficulty: "easy",
        instrument: "piano",
        description: "Romantic song from Ajab Prem Ki Ghazab Kahani",
        descriptionHi: "अजब प्रेम की गज़ब कहानी का गाना",
        tags: ["bollywood", "romantic", "atif-aslam"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Te" },
            { note: "A4", duration: 0.5, lyric: "ra" },
            { note: "B4", duration: 0.5, lyric: "ho" },
            { note: "C5", duration: 0.5, lyric: "ne" },
            { note: "B4", duration: 0.5, lyric: "la" },
            { note: "A4", duration: 0.5, lyric: "ga" },
            { note: "G4", duration: 1, lyric: "hoon" }
        ]
    },
    {
        id: "khairiyat",
        title: "Khairiyat",
        titleHi: "खैरियत",
        artist: "Arijit Singh",
        difficulty: "medium",
        instrument: "piano",
        description: "Emotional song from Chhichhore",
        descriptionHi: "छिछोरे का भावुक गाना",
        tags: ["bollywood", "emotional", "arijit-singh"],
        notes: [
            { note: "E4", duration: 0.5, lyric: "Khai" },
            { note: "G4", duration: 0.5, lyric: "ri" },
            { note: "A4", duration: 0.5, lyric: "yat" },
            { note: "B4", duration: 0.5, lyric: "poo" },
            { note: "C5", duration: 0.5, lyric: "cho" },
            { note: "B4", duration: 0.5, lyric: "kab" },
            { note: "A4", duration: 0.5, lyric: "hi" },
            { note: "G4", duration: 1, lyric: "" }
        ]
    },
    {
        id: "tum-mile",
        title: "Tum Mile",
        titleHi: "तुम मिले",
        artist: "Neeraj Shridhar",
        difficulty: "easy",
        instrument: "piano",
        description: "Title track from Tum Mile",
        descriptionHi: "तुम मिले का टाइटल गाना",
        tags: ["bollywood", "romantic"],
        notes: [
            { note: "G4", duration: 0.5, lyric: "Tum" },
            { note: "A4", duration: 0.5, lyric: "mi" },
            { note: "B4", duration: 1, lyric: "le" },
            { note: "C5", duration: 0.5, lyric: "dil" },
            { note: "B4", duration: 0.5, lyric: "khil" },
            { note: "A4", duration: 1, lyric: "gaya" }
        ]
    }
];

export function getSong(id: string): Song | undefined {
    return SONGS.find(s => s.id === id);
}

export function getAllSongs(): Song[] {
    return SONGS;
}

export function getSongsByDifficulty(difficulty: "easy" | "medium" | "hard"): Song[] {
    return SONGS.filter(s => s.difficulty === difficulty);
}

export function getSongsByTag(tag: string): Song[] {
    return SONGS.filter(s => s.tags.includes(tag));
}
