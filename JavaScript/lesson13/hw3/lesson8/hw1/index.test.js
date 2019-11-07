import { pickProps } from './index';

it('return shoud be object', () => {
    const result = pickProps({ a: 1, b: 2, c: 3 }, ['a', 'c']);

    expect(result).toEqual({ a: 1, c: 3 })
});