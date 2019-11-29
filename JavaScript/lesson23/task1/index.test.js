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

it('should be length 8', () => {
    const result = createArrayOfFunctions(8).length;

    expect(result).toEqual(8);
});

it('should be type of arguments function', () => {
    const result = createArrayOfFunctions(8);
    const check = true;
    for (let i of result) {
        if (typeof i !== 'function') {
            check = false;
            break;
        }
    }

    expect(check).toEqual(true);
});