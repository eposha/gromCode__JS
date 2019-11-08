import { pickProps } from './index';

it('return shoud be same obj ', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);

    expect(result).toEqual({ a: 1, c: 3 })
});

it('return shoud be obj', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);
    const checkType = typeof result === 'object';
    expect(checkType).toEqual(true);
});