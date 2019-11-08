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