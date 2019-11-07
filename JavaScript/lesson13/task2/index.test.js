import { getSquaredNumbers, getAddNumbers } from './calculator.js';

it('should get squared numbers', () => {
    const result = getSquaredNumbers([1, 2, 3]);

    expect(result).toEqual([1, 4, 9]);
})