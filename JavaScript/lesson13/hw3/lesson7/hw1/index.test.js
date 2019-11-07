import { squareArray } from './index';

it('shoud be square of number', () => {
    const result = squareArray([5]);

    expect(result).toEqual([25]);
});