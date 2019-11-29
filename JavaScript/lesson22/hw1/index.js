const todos = [
    { text: 'Buy milk', done: false, id: 1 },
    { text: 'Pick up Tom from airport', done: false, id: 2 },
    { text: 'Visit party', done: false, id: 3 },
    { text: 'Visit doctor', done: true, id: 4 },
    { text: 'Buy meat', done: true, id: 5 },
];


const listElem = document.querySelector('.list');
const btnElem = document.querySelector('.btn');
const inputElem = document.querySelector('.task-input');


const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done).map(({ text, done, id }) => {

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
    });

    inputElem.value = '';

    listElem.innerHTML = '';
    renderListItems(todos);
};

btnElem.addEventListener('click', creatNewWork);

























// const todos = [
//     { text: 'Buy milk', done: false },
//     { text: 'Pick up Tom from airport', done: false },
//     { text: 'Visit party', done: false },
//     { text: 'Visit doctor', done: true },
//     { text: 'Buy meat', done: true },
// ];



// const renderListItems = listItems => {
//     const listElem = document.querySelector('.list');
//     const btnElem = document.querySelector('.btn');
//     const inputElem = document.querySelector('.task-input');

//     const listItemsElems = listItems
//         .sort((a, b) => a.done - b.done).map(({ text, done }) => {

//             const listItemElem = document.createElement('li');
//             listItemElem.classList.add('list__item');

//             const checkboxItem = document.createElement('input');
//             checkboxItem.setAttribute('type', 'checkbox');
//             checkboxItem.checked = done;
//             if (done) {
//                 listItemElem.classList.add('list__item_done');
//             }
//             checkboxItem.classList.add('list__item-checkbox');


//             listItemElem.append(checkboxItem, text);

//             return listItemElem;
//         });

//     listElem.append(...listItemsElems);


//     const checkDoneWork = event => {
//         const checkElem = event.target;
//         console.log(checkElem);
//         if (checkElem.tagName != 'INPUT') return;

//         if (checkElem.checked) {
//             checkElem.parentNode.classList.add('list__item_done');
//             listElem.append(checkElem.parentNode);
//         } else {
//             checkElem.parentNode.classList.remove('list__item_done');
//             listElem.prepend(checkElem.parentNode);
//         };
//     };
//     listElem.addEventListener('click', checkDoneWork);


//     const creatLiWithWork = () => {
//         const inputValue = inputElem.value;

//         if (inputValue == '') return;

//         const listItemElem = document.createElement('li');
//         listItemElem.classList.add('list__item');

//         const checkboxItem = document.createElement('input');
//         checkboxItem.classList.add('list__item-checkbox');
//         checkboxItem.setAttribute('type', 'checkbox');
//         console.log(checkboxItem);


//         listItemElem.prepend(checkboxItem, inputValue);

//         listElem.prepend(listItemElem);

//         inputElem.value = '';

//         // console.log(listItemElem);
//     };

//     btnElem.addEventListener('click', creatLiWithWork);

// };

// renderListItems(todos);





// const tasks = [{
//         id: 0,
//         text: 'Buy milk',
//         done: false,
//         dateСreation: new Date(2012, 9, 1, 0, 0, 0, 0),
//     },
//     {
//         id: 4,
//         text: 'Pick up Tom from airport',
//         done: false,
//         dateСreation: new Date(2013, 1, 1, 0, 0, 0, 0),
//     },
//     {
//         id: 2,
//         text: 'Visit party',
//         done: false,
//         dateСreation: new Date(2018, 7, 1, 0, 0, 0, 0),
//     },
//     {
//         id: 3,
//         text: 'Visit doctor',
//         done: true,
//         dateСreation: new Date(2011, 4, 1, 0, 0, 0, 0),
//     },
//     {
//         id: 1,
//         text: 'Buy meat',
//         done: true,
//         dateСreation: new Date(2019, 3, 1, 0, 0, 0, 0),
//     },
// ];

// const tasksList = document.querySelector('.list');
// tasksList.addEventListener('change', taskHandler);

// const taskInput = document.querySelector('.task-input');

// const createTaskBtn = document.querySelector('.create-task-btn');
// createTaskBtn.addEventListener('click', addTask);

// renderList(createListTasksHTML(tasks));

// function taskHandler(event) {
//     const task = tasks.find(elem => elem.id === +event.target.parentElement.id);
//     console.log(event.target.parentElement);
//     task.done = event.target.checked;
//     renderList(createListTasksHTML(tasks));
// };

// function renderList(tasksHTML) {
//     tasksList.innerHTML = '';
//     tasksList.append(...tasksHTML);
// };

// function createListTasksHTML(tasks) {
//     return tasks
//         .sort((a, b) => b.dateСreation - a.dateСreation)
//         .sort((a, b) => a.done - b.done)
//         .map(({ id, text, done }) => {
//             const listItem = document.createElement('li');
//             listItem.classList.add('list__item');
//             listItem.setAttribute('id', `${id}`);
//             const chBox = document.createElement('input');
//             chBox.setAttribute('type', 'checkbox');
//             chBox.checked = done;
//             if (done) listItem.classList.add('list__item_done');
//             chBox.classList.add('list__item-checkbox');
//             listItem.append(chBox, text);

//             return listItem;
//         });
// };

// function addTask() {
//     if (!taskInput.value.trim()) return;
//     tasks.push({
//         id: tasks.length,
//         text: taskInput.value,
//         done: false,
//         dateСreation: new Date(),
//     });
//     taskInput.value = '';
//     renderList(createListTasksHTML(tasks));
// };