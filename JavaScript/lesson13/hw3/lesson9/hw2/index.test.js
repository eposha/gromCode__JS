import { getPeople } from './index';

it('type of result should be array', () => {
    const rooms = {
        room1: [
            { name: 'room1 name1' },
            { name: 'room1 name2' },
            { name: 'room1 name3' },
            { name: 'room1 name4' },

        ],
        room2: [
            { name: 'room2 name1' },

        ],
        room3: [
            { name: 'room3 name1' },
            { name: 'room3 name2' },
            { name: 'room3 name3' },

        ],

    };
    const result = Array.isArray(getPeople(rooms));


    expect(result).toEqual(true);
});

it('should be empty array', () => {
    const result = getPeople({});

    expect(result).toEqual([]);
});

it('should be empty array', () => {
    const rooms = {
        room1: [],
        room2: [],
        room3: [],
    };

    const result = getPeople(rooms);

    expect(result).toEqual([]);
});