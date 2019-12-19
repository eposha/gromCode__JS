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


const listElem = document.querySelector('.list');
const btnElem = document.querySelector('.btn');
const inputElem = document.querySelector('.task-input');


const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => b.date - a.date)
        .sort((a, b) => a.done - b.done)
        .sort((a, b) => b.dateСompleted - a.dateСompleted).map(({ text, done, id }) => {

            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');
            listItemElem.setAttribute('id', `${id}`);

            const checkboxItem = document.createElement('input');
            checkboxItem.setAttribute('type', 'checkbox');
            checkboxItem.checked = done;
            if (done) {
                listItemElem.classList.add('list__item_done');
            }
            checkboxItem.classList.add('list__item-checkbox');


            listItemElem.append(checkboxItem, text);

            return listItemElem;
        });

    listElem.append(...listItemsElems);

};

renderListItems(todos);

const checkDoneWork = (event) => {
    const checkTarget = event.target;
    if (checkTarget.tagName != 'INPUT') return;

    const getId = todos.find(elem => elem.id === +checkTarget.parentElement.id);
    getId.done = checkTarget.checked;
    getId.dateСompleted = getId.done ? new Date() : undefined;


    listElem.innerHTML = '';
    renderListItems(todos);
};

listElem.addEventListener('click', checkDoneWork);


const creatNewWork = () => {
    if (inputElem.value == '') return;

    todos.unshift({
        id: todos.length + 1,
        text: inputElem.value,
        done: false,
        date: new Date(),
        dateCompleted: undefined,
    });

    inputElem.value = '';

    listElem.innerHTML = '';
    renderListItems(todos);
};

btnElem.addEventListener('click', creatNewWork);