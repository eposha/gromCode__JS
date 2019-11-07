import { calc } from './calc';

it('should be sum', () => {
    const result = calc('36 + 9');

    expect(result).toEqual('36 + 9 = 45');
});

it('should be difference', () => {
    const result = calc('36 - 9');

    expect(result).toEqual('36 - 9 = 27');
});

it('should be division', () => {
    const result = calc('36 / 9');

    expect(result).toEqual('36 / 9 = 4');
});

it('should be multiplication', () => {
    const result = calc('6 * 9');

    expect(result).toEqual('6 * 9 = 54');
});

it('should be string', () => {
    const result = calc(['5', 7, 9]);

    expect(result).toEqual(null);
});