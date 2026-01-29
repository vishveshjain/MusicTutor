# Contributing to Music Tutor

Thank you for your interest in contributing to Music Tutor! 🎵

## 🚀 Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/music-tutor.git
   cd music-tutor
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow existing code patterns and naming conventions
- Use CSS Modules for component styling
- Keep components small and focused

### Commit Messages

Use clear, descriptive commit messages:
```
feat: add trumpet instrument support
fix: resolve audio playback on Safari
docs: update installation instructions
style: format code with Prettier
```

### Pull Request Process

1. Update documentation if needed
2. Ensure no lint errors (`npm run lint`)
3. Test your changes thoroughly
4. Create a Pull Request with:
   - Clear title and description
   - Screenshots for UI changes
   - Reference to related issues

## 🎸 Adding a New Instrument

1. Create component folder in `src/components/instruments/`
2. Implement the component with:
   - Visual representation
   - Sound playback integration
   - Highlighting support for lessons
3. Export from `src/components/instruments/index.ts`
4. Add to practice and lesson pages
5. Add lesson content in `src/lib/lessons/lesson-content.ts`
6. Update onboarding page

## 🐛 Reporting Bugs

Include:
- Clear description of the issue
- Steps to reproduce
- Expected vs actual behavior
- Browser/device information
- Screenshots if applicable

## 💡 Feature Requests

We welcome new ideas! When suggesting features:
- Check existing issues first
- Describe the use case
- Explain how it benefits users

## 📋 Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn and grow

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

Questions? Open an issue or reach out to the maintainers!
