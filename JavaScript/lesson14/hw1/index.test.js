import getSquaredOfMinNum from './getMinSquaredNumber';

it('should get square of min number of array', () => {
    const result = getSquaredOfMinNum([-777, 3, -2, 6, 45, -20]);

    expect(result).toEqual(4);
});

it('should get array with min length 1', () => {
    const result = getSquaredOfMinNum([]);

    expect(result).toEqual(null);
});

it('should get array only', () => {
    const result = getSquaredOfMinNum('sdfgsdfg');

    expect(result).toEqual(null);
});