const todos = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];



const renderListItems = listItems => {
    const listElem = document.querySelector('.list');
    const btnElem = document.querySelector('.btn');
    const inputElem = document.querySelector('.task-input');

    const listItemsElems = listItems
        .sort((a, b) => a.done - b.done).map(({ text, done }) => {

            const listItemElem = document.createElement('li');
            listItemElem.classList.add('list__item');

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


    const checkDoneWork = event => {
        const checkElem = event.target;
        console.log(checkElem);
        if (checkElem.tagName != 'INPUT') return;

        if (checkElem.checked) {
            checkElem.parentNode.classList.add('list__item_done');
            listElem.append(checkElem.parentNode);
        } else {
            checkElem.parentNode.classList.remove('list__item_done');
            listElem.prepend(checkElem.parentNode);
        };
    };
    listElem.addEventListener('click', checkDoneWork);


    const creatLiWithWork = () => {
        const inputValue = inputElem.value;

        if (inputValue == '') return;

        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');

        // console.log(listItemElem.innerHTML = inputElem.value);
        const checkboxItem = document.createElement('input');
        checkboxItem.classList.add('list__item-checkbox');
        checkboxItem.setAttribute('type', 'checkbox');


        listItemElem.prepend(checkboxItem, inputValue);

        listElem.prepend(listItemElem);

        inputElem.value = '';
    };

    btnElem.addEventListener('click', creatLiWithWork);

};

renderListItems(todos);