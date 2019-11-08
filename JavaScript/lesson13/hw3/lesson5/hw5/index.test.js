import { findDivCount } from './index';

it('should be quantity on the interval [a, b] that are multiples of the number n ', () => {
    const result = findDivCount(12, 60, 3);

    expect(result).toEqual(17);
});

it('should be 0 if arg1 >= arg2', () => {
    const result = findDivCount(181, 17, 3);

    expect(result).toEqual(0);
});

it('should be 0 if arg3 <= 0', () => {
    const result = findDivCount(181, 17, 0);

    expect(result).toEqual(0);
});