const { findLowestNode } = require('./DijkstrasAlgorithm');
const { findLowestWay } = require('./DijkstrasAlgorithm');

const graph = {
  a: { b: 5, c: 5 },
  b: { d: 3 },
  c: { b: 2, f: 2 },
  d: { e: 2, i: 5, j: 11 },
  f: { g: 12 },
  e: { i: 1, f: 5 },
  i: { l: 8, k: 1, h: 3 },
  j: { l: 1 },
  g: { m: 20 },
  l: { m: 7 },
  k: { m: 6 },
  h: { k: 3, g: 3 },
  m: {}
};

describe('test findLowestNode function', () => {
  test('findLowestNodey works correct', () => {
    expect(findLowestNode({ a: 1, b: 2, c: 0 })).toBe('c');
    expect(findLowestNode({ a: 11, b: 2, c: 10 })).toBe('a');
  });
});

describe('test findLowestWay function', () => {
  test('findLowestWay works correct', () => {
    const result = findLowestWay(graph);
    expect(result.cost).toBe(18);
    expect(result.way).toBe('A-B-D-E-I-K-M');
  });
});
