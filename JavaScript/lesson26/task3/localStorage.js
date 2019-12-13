const todos = [{
        text: 'Buy milk',
        done: false,
        id: 0,
        date: new Date(2015, 9, 1, 0, 0, 0, 0),
        dateСompleted: undefined,
    },
    {
        text: 'Pick up Tom from airport',
        done: false,
        id: 1,
        date: new Date(2016, 9, 1, 0, 0, 0, 0),
        dateСompleted: undefined,
    },
    {
        text: 'Visit party',
        done: false,
        id: 2,
        date: new Date(2017, 9, 1, 0, 0, 0, 0),
        dateСompleted: undefined,
    },
    {
        text: 'Buy meat',
        done: true,
        id: 4,
        date: new Date(2016, 9, 1, 0, 0, 0, 0),
        dateСompleted: new Date(2017, 5, 3),
    },
    {
        text: 'Visit doctor',
        done: true,
        id: 3,
        date: new Date(2018, 9, 1, 0, 0, 0, 0),
        dateСompleted: new Date(2019, 6, 4),
    },
];

const getItem = key => {
    if (localStorage.getItem(key) === null) {
        setItem('todos', todos);
    }
    return JSON.parse(localStorage.getItem(key));
}

const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


export { setItem, getItem, todos };