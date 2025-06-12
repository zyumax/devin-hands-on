/**
 * 配列内のすべての数値を合計します
 * @param {number[]} arr - 合計を計算する数値の配列
 * @returns {number} 配列内のすべての要素の合計値
 */
export function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

/**
 * 配列内の数値の平均値を計算します
 * @param {number[]} arr - 平均値を計算する数値の配列
 * @returns {number} 配列の平均値。空の配列の場合は0を返します
 */
export function average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
