import { getAdults } from './index';

it('return shoud be object', () => {
    const result = getAdults({ a: 1, b: 2, c: 25 });

    let checkType = 'false';
    if (typeof result == 'object') {
        checkType = 'true';
    }
    expect(checkType).toEqual('true');
});

it('should be more or equal 18 if result object contains property', () => {
    const result = getAdults({ a: 1, b: 2, c: 25 });
    let correctResult = 'true';
    const valuesOfObject = Object.values(result);
    for (let i of valuesOfObject) {
        if (result === {}) {
            break;
        } else if (i < 18) {
            correctResult = 'false';
        }
    }

    expect(correctResult).toEqual('true');
});