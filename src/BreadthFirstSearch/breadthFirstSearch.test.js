const { findSeller } = require('./breadthFirstSearch');

const sellersGraph = {
  jhon: ['ann', 'ron', 'din', 'mike'],
  ann: ['mike', 'rose', 'lars', 'sam'],
  ron: ['lars', 'ember$'],
  din: ['sara', 'sam'],
  mike: [],
  rose: ['ann', 'seller!'],
  lars: [],
  sam: [],
  ember$: [],
  sara: [],
  'seller!': []
};

describe('test findSeller function', () => {
  test('findSeller works correct', () => {
    expect(findSeller(sellersGraph, '!', 'jhon')).toEqual('seller!');
    expect(findSeller(sellersGraph, '$', 'jhon')).toEqual('ember$');
    expect(findSeller(sellersGraph, 'e', 'jhon')).toEqual('mike');
  });

  test('findSeller  returns false if there is no seller ', () => {
    expect(findSeller(sellersGraph, ':', 'jhon')).toBeFalsy();
  });
});
