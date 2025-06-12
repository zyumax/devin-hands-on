export function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

export function average(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
