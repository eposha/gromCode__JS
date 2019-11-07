import { getSum } from './index';

it('should be a bigger b', () => {
    const result = getSum(24, 4);

    expect(result).toEqual(null);
})

it('should be a number', () => {
    const result = getSum('5');

    expect(result).toEqual(null);
})

it('should be b number', () => {
    const result = getSum('string');

    expect(result).toEqual(null);
})