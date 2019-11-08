import { getPrimes } from './index';

it('n should be number', () => {
    const result = getPrimes('6');

    expect(result).toEqual(null);
});

it('n should be bigger then 0', () => {
    const result = getPrimes(0);

    expect(result).toEqual(null);
});

it('should be prime numbers ', () => {
    const result = getPrimes(5);

    expect(result).toEqual(null);
});