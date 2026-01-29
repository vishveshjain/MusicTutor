# 🎵 Music Tutor

An AI-powered interactive music learning application that helps you master various musical instruments through personalized lessons, real-time feedback, and practice sessions.

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **9 Interactive Instruments**: Harmonium, Piano, Guitar, Ukulele, Flute, Violin, Tabla, Drums, Saxophone
- **Multi-level Learning**: Beginner, Intermediate, and Advanced lessons
- **Real-time Audio Feedback**: Pitch detection using Web Audio API
- **Bilingual Support**: English and Hindi (हिन्दी) interface
- **Responsive Design**: Works on desktop and mobile devices
- **Custom Sound Synthesis**: Realistic instrument sounds using Web Audio API

## 🎸 Supported Instruments

| Instrument | Type | Features |
|------------|------|----------|
| 🪗 Harmonium | Keys | Indian classical notation (Sa Re Ga Ma) |
| 🎹 Piano | Keys | Western notation with 2 octaves |
| 🎸 Guitar | Strings | 6-string fretboard visualization |
| 🪕 Ukulele | Strings | 4-string fretboard |
| 🎺 Flute | Wind | Fingering chart |
| 🎻 Violin | Strings | Fingerboard positions |
| 🥁 Tabla | Percussion | Indian bols (Dha, Ge, Na, Ti) |
| 🪘 Drums | Percussion | Full drum kit with keyboard shortcuts |
| 🎷 Saxophone | Wind | Key visualization |

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/music-tutor.git
cd music-tutor

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
NEXT_PUBLIC_APP_NAME=Music Tutor
```

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── learn/           # Lesson pages
│   ├── practice/        # Practice mode
│   └── onboarding/      # User onboarding
├── components/
│   └── instruments/     # Instrument components
│       ├── harmonium/
│       ├── piano/
│       ├── guitar/
│       ├── tabla/
│       ├── drums/
│       └── ...
├── lib/
│   ├── audio/           # Sound player & pitch detection
│   ├── lessons/         # Lesson content
│   └── teaching/        # Feedback & encouragement
└── styles/              # Global styles
```

## 🎯 Usage

1. **Onboarding**: Select your instrument, skill level, and language
2. **Learn Mode**: Follow structured lessons with step-by-step guidance
3. **Practice Mode**: Free practice with real-time pitch detection
4. **Unlimited Lessons**: Auto-generated practice lessons after completing basics

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: CSS Modules
- **Audio**: Web Audio API + soundfont-player
- **Font**: Google Fonts (Outfit)

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [soundfont-player](https://github.com/danigb/soundfont-player) for MIDI instrument sounds
- Indian classical music notation system (Sargam)

---

Made with ❤️ for music learners everywhere
