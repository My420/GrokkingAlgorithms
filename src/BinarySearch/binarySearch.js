const binarySearch = function binarySearchAlgorithm(list, element) {
  let low = 0;
  let high = list.length - 1;

  while (low < high) {
    const mid = Math.floor((high + low) / 2);

    if (list[mid] === element) {
      return mid;
    }

    if (list[mid] < element) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return list[high] === element ? high : null;
};

module.exports = binarySearch;
