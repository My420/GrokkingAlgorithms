const { quickSort } = require('./quickSort');

const testArray1 = [2, 1, 0, 7, 8, 3, 4, 2, -22, 5, 6, 9];
const testArray2 = [
  88,
  -4,
  64,
  18,
  32,
  12,
  21,
  -67,
  88,
  3,
  -21,
  8932,
  61,
  -32,
  2,
  0
];

const sortedTestArray1 = [-22, 0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const sortedTestArray2 = [
  -67,
  -32,
  -21,
  -4,
  0,
  2,
  3,
  12,
  18,
  21,
  32,
  61,
  64,
  88,
  88,
  8932
];

describe('test quickSort function', () => {
  test('sortArray works correct', () => {
    expect(quickSort(testArray1)).toEqual(sortedTestArray1);
    expect(quickSort(testArray2)).toEqual(sortedTestArray2);
  });

  test('quickSort works correct with array with 1 element', () => {
    expect(quickSort([234])).toEqual([234]);
  });

  test('quickSort works correct with empty array', () => {
    expect(quickSort([])).toEqual([]);
  });
});
