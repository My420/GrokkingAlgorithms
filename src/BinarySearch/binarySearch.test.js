const binarySearch = require('./binarySearch');

const testList1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const testList2 = [11, 22, 33, 42, 54, 65, 76, 87, 98, 101];

test('binary search work correct', () => {
  expect(binarySearch(testList1, 7)).toBe(6);
  expect(binarySearch(testList2, 33)).toBe(2);
});

test('binary search work correct in corner cases', () => {
  expect(binarySearch(testList1, 1)).toBe(0);
  expect(binarySearch(testList2, 101)).toBe(9);
});
