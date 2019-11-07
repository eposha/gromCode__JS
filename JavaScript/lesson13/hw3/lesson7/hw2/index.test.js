import { reverseArray } from './index';

it('shoud be array', () => {
    const result = reverseArray(5);

    expect(result).toEqual(null)
});


it('shoud be reverse of array', () => {
    const result = reverseArray([5, 6, 7, 8, 9]);

    expect(result).toEqual([9, 8, 7, 6, 5])
});