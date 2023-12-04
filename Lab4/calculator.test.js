const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 6', () => {
      expect(mathOperations.sum(1, 2)).toBe(6);
    });
})