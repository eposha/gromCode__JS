import { getSum } from './index';

it('should be a bigger b', () => {
    const result = getSum(24, 4);

    expect(result).toEqual(null);
})

it('a shoud be bigger 0', () => {
    const result = getSum(0, 5);

    expect(result).toEqual(null);
})

it('b shoud be bigger 0', () => {
    const result = getSum(5, 0);

    expect(result).toEqual(null);
})

it('b shoud be sum of interval between arg1 and arg2', () => {
    const result = getSum(1, 10);

    expect(result).toEqual(30);
})