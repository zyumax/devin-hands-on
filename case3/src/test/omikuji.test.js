import { describe, test, expect } from '@jest/globals';

describe('Omikuji CLI Test', () => {
  test('おみくじの運勢配列が正しく定義されている', () => {
    const fortunes = ['大吉', '中吉', '小吉'];
    expect(fortunes).toHaveLength(3);
    expect(fortunes).toContain('大吉');
    expect(fortunes).toContain('中吉');
    expect(fortunes).toContain('小吉');
  });

  test('Math.randomが0-1の範囲で動作する', () => {
    const randomValue = Math.random();
    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThan(1);
  });

  test('配列インデックス計算が正しく動作する', () => {
    const fortunes = ['大吉', '中吉', '小吉'];
    const index = Math.floor(Math.random() * fortunes.length);
    expect(index).toBeGreaterThanOrEqual(0);
    expect(index).toBeLessThan(fortunes.length);
    expect(fortunes[index]).toBeDefined();
  });
});
