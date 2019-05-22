const { findSmallestIndex } = require('./SelectionSort');
const { sortArray } = require('./SelectionSort');

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
  3,
  -21,
  8932,
  61,
  -32,
  2,
  0
];

const sortedTestArray1 = [-22, 0, 1, 2, 2, 3, 4, 5, 6, 7, 8, 9];

describe('test findSmallestIndex function', () => {
  test('findSmallestIndex works correct', () => {
    expect(findSmallestIndex(testArray2)).toBe(7);
  });

  test('findSmallestIndex works correct with empty array', () => {
    expect(findSmallestIndex([])).toBe(0);
  });

  test('findSmallestIndex works correct with array with one element', () => {
    expect(findSmallestIndex([33])).toBe(0);
  });
});

describe('test sortArray function', () => {
  test('sortArray works correct', () => {
    expect(sortArray(testArray1)).toEqual(sortedTestArray1);
  });

  test('sortArray works correct with array with 1 element', () => {
    expect(sortArray([234])).toEqual([234]);
  });

  test('sortArray works correct with empty array', () => {
    expect(sortArray([])).toEqual([]);
  });
});
