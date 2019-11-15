import { createArrayOfFunctions } from './index.js';

it('should be 7', () => {
    const result = createArrayOfFunctions(9)[7]();

    expect(result).toEqual(7);
});

it('should be empty array', () => {
    const result = createArrayOfFunctions();

    expect(result).toEqual([]);
});

it('should be null', () => {
    const result = createArrayOfFunctions('string');

    expect(result).toEqual(null);
});