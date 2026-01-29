import { describe, it, expect } from "bun:test";
import { getLesson, HARMONIUM_BEGINNER_LESSON_1, PIANO_BEGINNER_LESSON_1 } from "../lesson-content";

describe("Lesson Content", () => {
    describe("Lesson Constants", () => {
        it("should have harmonium beginner lesson 1", () => {
            expect(HARMONIUM_BEGINNER_LESSON_1).toBeDefined();
            expect(HARMONIUM_BEGINNER_LESSON_1.id).toBe("lesson-1");
            expect(HARMONIUM_BEGINNER_LESSON_1.level).toBe("beginner");
            expect(HARMONIUM_BEGINNER_LESSON_1.steps.length).toBeGreaterThan(0);
        });

        it("should have piano beginner lesson 1", () => {
            expect(PIANO_BEGINNER_LESSON_1).toBeDefined();
            expect(PIANO_BEGINNER_LESSON_1.id).toBe("lesson-1");
        });
    });

    describe("Lesson Step Types", () => {
        it("should have intro step type", () => {
            const lesson = HARMONIUM_BEGINNER_LESSON_1;
            const introStep = lesson.steps.find(s => s.type === "intro");
            expect(introStep).toBeDefined();
        });

        it("should have demo step type", () => {
            const lesson = HARMONIUM_BEGINNER_LESSON_1;
            const demoStep = lesson.steps.find(s => s.type === "demo");
            expect(demoStep).toBeDefined();
        });

        it("should have practice step type", () => {
            const lesson = HARMONIUM_BEGINNER_LESSON_1;
            const practiceStep = lesson.steps.find(s => s.type === "practice");
            expect(practiceStep).toBeDefined();
        });
    });

    describe("getLesson function", () => {
        it("should return a lesson object for guitar beginner", () => {
            const lesson = getLesson("guitar", "lesson-1", "beginner");
            expect(lesson).toBeDefined();
        });

        it("should return a lesson object for tabla beginner", () => {
            const lesson = getLesson("tabla", "lesson-1", "beginner");
            expect(lesson).toBeDefined();
        });

        it("should return a lesson object for drums beginner", () => {
            const lesson = getLesson("drums", "lesson-1", "beginner");
            expect(lesson).toBeDefined();
        });

        it("should return a lesson for intermediate level", () => {
            const lesson = getLesson("piano", "lesson-1", "intermediate");
            expect(lesson).toBeDefined();
        });

        it("should return a lesson for advanced level", () => {
            const lesson = getLesson("piano", "lesson-1", "advanced");
            expect(lesson).toBeDefined();
        });
    });

    describe("Lesson Structure", () => {
        it("should have bilingual titles", () => {
            const lesson = HARMONIUM_BEGINNER_LESSON_1;
            expect(lesson.titleEn).toBeDefined();
            expect(lesson.titleHi).toBeDefined();
        });

        it("should have steps with titles", () => {
            const lesson = HARMONIUM_BEGINNER_LESSON_1;
            lesson.steps.forEach(step => {
                expect(step.titleEn).toBeDefined();
                expect(step.titleHi).toBeDefined();
            });
        });
    });
});
