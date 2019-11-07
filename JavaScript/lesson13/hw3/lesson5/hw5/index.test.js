import { findDivCount } from './index';

it('if a smaller index return a', () => {
    const result = compareSums(5, 6, 7, 8);

    expect(result).toEqual(false);
});