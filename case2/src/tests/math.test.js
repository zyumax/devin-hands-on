import { average } from '../utils/math.js';

describe('average function', () => {
  test('空の配列の場合は0を返す', () => {
    expect(average([])).toBe(0);
  });

  test('単一の値の場合はその値を返す', () => {
    expect(average([5])).toBe(5);
    expect(average([42])).toBe(42);
    expect(average([0])).toBe(0);
  });

  test('複数の正の数の平均値を正しく計算する', () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([10, 20, 30])).toBe(20);
    expect(average([2, 4, 6, 8])).toBe(5);
  });

  test('負の数を含む配列の平均値を正しく計算する', () => {
    expect(average([-1, -2, -3])).toBe(-2);
    expect(average([-5, 5])).toBe(0);
    expect(average([-10, 0, 10])).toBe(0);
    expect(average([1, -1, 2, -2])).toBe(0);
  });

  test('小数点を含む数値の平均値を正しく計算する', () => {
    expect(average([1.5, 2.5, 3.5])).toBe(2.5);
    expect(average([0.1, 0.2, 0.3])).toBeCloseTo(0.2, 5);
  });

  test('大きな配列の平均値を正しく計算する', () => {
    const largeArray = Array.from({ length: 100 }, (_, i) => i + 1);
    expect(average(largeArray)).toBe(50.5);
  });
});
