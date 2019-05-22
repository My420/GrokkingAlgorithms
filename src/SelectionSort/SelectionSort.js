const findSmallestIndex = function findSmallestIndexInArray(list) {
  let smallestIndex = 0;

  for (let i = 1; i < list.length; i += 1) {
    if (list[smallestIndex] > list[i]) {
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

const sortArray = function sortArraySelectionAlghoritm(list) {
  const newArray = [];
  const listLength = list.length;

  for (let i = 0; i < listLength; i += 1) {
    newArray.push(list.splice(findSmallestIndex(list), 1)[0]);
  }
  return newArray;
};

module.exports = {
  findSmallestIndex,
  sortArray
};
