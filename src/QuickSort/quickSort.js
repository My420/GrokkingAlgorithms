const quickSort = function quickSortAlghoritm(list) {
  if (list.length < 2) {
    return list;
  }
  const baseElement = list[0];
  const smallerElements = list.slice(1).filter(elem => elem <= baseElement);

  const biggerElements = list.slice(1).filter(elem => elem > baseElement);

  return [
    ...quickSortAlghoritm(smallerElements),
    baseElement,
    ...quickSortAlghoritm(biggerElements)
  ];
};

module.exports = {
  quickSort
};
