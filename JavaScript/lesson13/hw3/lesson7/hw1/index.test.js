import { squareArray } from './index';

it('shoud be square of number', () => {
    const result = squareArray([5]);

    expect(result).toEqual([25]);
});

it('result should be array', () => {
    const result = squareArray([5]);
    const checkType = typeof result === 'object';

    expect(checkType).toEqual(true);
});

it('arg should be array', () => {
    const result = squareArray(5);

    expect(result).toEqual(null);
});