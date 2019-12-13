import { setItem, getItem, todos } from './localStorage.js';


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

    listElem.innerHTML = '';
    listElem.append(...listItemsElems);

};



const checkDoneWork = (event) => {
    const checkTarget = event.target;
    if (checkTarget.tagName != 'INPUT') return;

    const getTasks = getItem('todos');

    const getId = getTasks.find(elem => elem.id === +checkTarget.parentElement.id);
    getId.done = checkTarget.checked;
    getId.dateСompleted = getId.done ? new Date() : undefined;

    setItem('todos', getTasks);
    renderListItems(getItem('todos'));
};

listElem.addEventListener('click', checkDoneWork);


const creatNewWork = () => {
    if (inputElem.value == '') return;
    const pushTask = getItem('todos');

    pushTask.push({
        id: todos.length + 1,
        text: inputElem.value,
        done: false,
        date: new Date(),
        dateCompleted: undefined,
    });

    inputElem.value = '';

    setItem('todos', pushTask);
    renderListItems(getItem('todos'));
};

btnElem.addEventListener('click', creatNewWork);

const onDocumentLoaded = () => {
    renderListItems(getItem('todos'));
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);

const onStorageChange = event => {
    if (event.key !== 'todos') {
        return;
    }
    listElem.innerHTML = '';
    renderListItems(getItem('todos'));
};



window.addEventListener('storage', onStorageChange);