import { getAdults } from './index';

it('return shoud be object', () => {
    const result = getAdults({ a: 1, b: 2, c: 25 });

    let checkType = typeof result == 'object';

    expect(checkType).toEqual(true);
});

it('should be more or equal 18 if result object contains property', () => {
    const result = getAdults({ a: 1, b: 2, c: 25 });

    let correctResult = 'true';

    for (let key in result) {
        if (result === {}) {
            break;
        } else if (result[key] < 18) {
            correctResult = 'false';
        }
    }

    expect(correctResult).toEqual('true');
});

it('should be empty object', () => {
    const result = getAdults({ a: 1, b: 2, c: 2 });

    expect(result).toEqual({});;
});