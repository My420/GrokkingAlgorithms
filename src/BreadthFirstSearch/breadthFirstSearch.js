const isPersonSeller = (person, pointer) => {
  return person.slice(-1) === pointer;
};

const findSeller = function breadthFirstSearch(graph, pointer, firstPerson) {
  let searchQueue = [];
  const provenPeople = [];
  searchQueue.push(firstPerson);

  while (searchQueue.length) {
    const checkedPerson = searchQueue.shift();

    if (provenPeople.indexOf(checkedPerson) === -1) {
      if (isPersonSeller(checkedPerson, pointer)) {
        return checkedPerson;
      }
      provenPeople.push(checkedPerson);
      const checkedPersonFriends = graph[checkedPerson];
      searchQueue = [...searchQueue, ...checkedPersonFriends];
    }
  }

  return false;
};

module.exports = {
  findSeller
};
