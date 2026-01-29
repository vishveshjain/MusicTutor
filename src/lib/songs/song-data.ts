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

            // जय जय जय जय हे (SS RR GG RG M)
            { note: "S'", duration: 0.5, lyric: "Ja" },
            { note: "S'", duration: 0.5, lyric: "ya" },
            { note: "R'", duration: 0.5, lyric: "Ja" },
            { note: "R'", duration: 0.5, lyric: "ya" },
            { note: "G'", duration: 0.5, lyric: "Ja" },
            { note: "G'", duration: 0.5, lyric: "ya" },
            { note: "R'", duration: 0.3, lyric: "Ja" },
            { note: "G'", duration: 0.3, lyric: "ya" },
            { note: "M'", duration: 1.5, lyric: "He" }
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
            { note: "R'", duration: 0.5, lyric: "la" },
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
            { note: "R'", duration: 0.3, lyric: "ma" },
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
