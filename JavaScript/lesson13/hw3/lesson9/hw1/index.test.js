import { getCustomersList } from './index';

it('should be sorted by age ', () => {
    const customers = {
        'customer-id-1': {
            name: 'William',
            age: 54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
        'customer-id-3': {
            name: 'Inna',
            age: 22
        },
        'customer-id-4': {
            name: 'Ivan',
            age: 18
        },
    };
    const result = getCustomersList(customers);

    expect(result).toEqual([
        { name: 'Tom', age: 17, id: 'customer-id-2' },
        { name: 'Ivan', age: 18, id: 'customer-id-4' },
        { name: 'Inna', age: 22, id: 'customer-id-3' },
        { name: 'William', age: 54, id: 'customer-id-1' }
    ])
});

it('should be sorted by age ', () => {
    const customers = {
        'customer-id-1': {
            name: 'William',
            age: -54
        },
        'customer-id-2': {
            name: 'Tom',
            age: 17
        },
        'customer-id-3': {
            name: 'Inna',
            age: 22
        },
        'customer-id-4': {
            name: 'Ivan',
            age: 18
        },
    };
    const result = getCustomersList(customers);
    let checkAgeByMinus = true;
    const checkAge = (arr) => {
        for (let i of result) {
            if (i.age < 0) {
                checkAgeByMinus = false;
                break;
            }
        }
    }
    checkAge(result);
    expect(checkAgeByMinus).toEqual(true);
});