const quickSort = function quickSortAlghoritm(list) {
  if (list.length < 2) {
    return list;
  }
  const baseElement = list.splice(0, 1);
  const smallerElements = list.filter(elem => {
    return elem <= baseElement[0];
  });

  const biggerElements = list.filter(elem => {
    return elem > baseElement[0];
  });

  return [
    ...quickSortAlghoritm(smallerElements),
    ...baseElement,
    ...quickSortAlghoritm(biggerElements)
  ];
};

module.exports = {
  quickSort
};
