import { increaser } from './index';

it('if a smaller index return a', () => {
    const result = increaser(5, 6);

    expect(result).toEqual(5);
});

it('if a bigger index return a + index', () => {
    const result = increaser(7, 6);

    expect(result).toEqual(13);
});

it('if a equal index return a', () => {
    const result = increaser(6, 6);

    expect(result).toEqual(6);
});