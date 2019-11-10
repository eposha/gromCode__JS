import { getEvenNumbers } from './index.js';

it('Create array with even numbers', () => {
    const result = getEvenNumbers([1, 2, 3, 4, 5]);

    expect(result).toEqual([2, 4]);
});

it('17 равно 17', () => {
    expect(17).toEqual(17);
});

it('18 не равно 17', () => {
    expect(18).not.toEqual(17);
});