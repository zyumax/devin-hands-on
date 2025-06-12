import { describe, test, expect } from '@jest/globals';

describe('Case3 Environment Test', () => {
  test('Node.js環境が正常に動作する', () => {
    expect(1 + 1).toBe(2);
  });

  test('ES modulesが正常に動作する', async () => {
    const result = await Promise.resolve('success');
    expect(result).toBe('success');
  });
});
