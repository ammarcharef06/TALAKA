/* طَلَاقَة — اختبارات الوقت السائل: الضغط والتوسيع بلا فقدان أي هدف */
import { describe, expect, it } from 'vitest';
import { UNITS } from '../src/data/academy/course';
import { buildFluidPlan, FLUID_MODES, planMinutes, type FluidMinutes } from '../src/engine/timeFluid';

const LESSONS = UNITS.flatMap((unit) => unit.lessons);
const MODES: FluidMinutes[] = FLUID_MODES.map((mode) => mode.minutes);

describe('الوقت السائل — الثبات عبر كل الدروس', () => {
  it('كل درس في كل وضع: كل الأهداف الأصلية محفوظة بالترتيب نفسه', () => {
    for (const lesson of LESSONS) {
      for (const minutes of MODES) {
        const plan = buildFluidPlan(lesson, minutes);
        expect(plan.objectives).toEqual(lesson.objectives);
        expect(plan.allObjectivesPreserved).toBe(true);
        expect(plan.coverage.length).toBe(lesson.objectives.length);
        expect(plan.coverage.map((c) => c.objective)).toEqual(lesson.objectives);
      }
    }
  });

  it('ميزانية الوقت تساوي المدة المختارة بالضبط', () => {
    for (const lesson of LESSONS) {
      for (const minutes of MODES) {
        const plan = buildFluidPlan(lesson, minutes);
        expect(planMinutes(plan)).toBe(minutes);
        expect(plan.phases.length).toBeGreaterThanOrEqual(4);
        expect(plan.phases.every((phase) => phase.minutes > 0)).toBe(true);
      }
    }
  });

  it('كل هدف له كتلة شرح ومثال وسؤال تدريب داخل الخطة نفسها', () => {
    for (const lesson of LESSONS) {
      for (const minutes of MODES) {
        const plan = buildFluidPlan(lesson, minutes);
        const blockTitles = new Set(
          plan.blocks.map((block) => (block.type === 'table' ? (block.title ?? 'جدول الدرس') : block.title))
        );
        const exampleTexts = new Set(plan.examples.map((example) => example.text));
        const practiceIds = new Set(plan.practice.map((item) => item.id));
        for (const row of plan.coverage) {
          expect(blockTitles.has(row.blockTitle ?? '')).toBe(true);
          expect(exampleTexts.has(row.exampleText ?? '')).toBe(true);
          expect(practiceIds.has(row.practiceId ?? '')).toBe(true);
        }
      }
    }
  });

  it('وضع 10 دقائق يضغط ولا يفرّغ: شرح وأمثلة وتدريب موجودة', () => {
    for (const lesson of LESSONS) {
      const plan = buildFluidPlan(lesson, 10);
      expect(plan.blocks.length).toBeGreaterThan(0);
      expect(plan.examples.length).toBeGreaterThan(0);
      expect(plan.practice.length).toBeGreaterThan(0);
      expect(plan.deepTasks).toEqual([]);
    }
  });

  it('وضع 60 دقيقة يضيف ورشة إنتاج ولا يحذف شيئاً', () => {
    for (const lesson of LESSONS) {
      const short = buildFluidPlan(lesson, 10);
      const deep = buildFluidPlan(lesson, 60);
      expect(deep.deepTasks.length).toBeGreaterThan(0);
      expect(deep.blocks.length).toBe(lesson.blocks.length);
      expect(deep.examples.length).toBe(lesson.examples.length);
      expect(deep.practice.length).toBe(lesson.practice.length);
      expect(deep.practice.length).toBeGreaterThanOrEqual(short.practice.length);
    }
  });

  it('حتمي: البناء مرتان يعطي الخطة نفسها', () => {
    for (const lesson of LESSONS.slice(0, 8)) {
      for (const minutes of MODES) {
        expect(buildFluidPlan(lesson, minutes)).toEqual(buildFluidPlan(lesson, minutes));
      }
    }
  });

  it('وضع غير معروف يسقط إلى 20 دقيقة بدل أن يرمي', () => {
    const lesson = LESSONS[0];
    const plan = buildFluidPlan(lesson, 37 as FluidMinutes);
    expect(plan.minutes).toBe(20);
    expect(plan.phases).toEqual(buildFluidPlan(lesson, 20).phases);
    expect(plan.objectives).toEqual(lesson.objectives);
  });
});
