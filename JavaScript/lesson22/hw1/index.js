const todos = [
    { text: 'Buy milk', done: false },
    { text: 'Pick up Tom from airport', done: false },
    { text: 'Visit party', done: false },
    { text: 'Visit doctor', done: true },
    { text: 'Buy meat', done: true },
];



const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listItemsElems = listItems.map(({ text, done }) => {

        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');

        const checkboxItem = document.createElement('input');
        checkboxItem.setAttribute('type', 'checkbox')
        checkboxItem.checked = done;
        if (done) {
            listItemElem.classList.add('list__item_done');
        }
        checkboxItem.classList.add('list__item-checkbox');


        listItemElem.append(checkboxItem, text);

        return listItemElem;
    });

    listElem.append(...listItemsElems);


    document.addEventListener('click', function(event) {
        const checkElem = event.target;
        if (checkElem.checked) {
            checkElem.parentNode.classList.add('list__item_done');
        } else {
            checkElem.parentNode.classList.remove('list__item_done')
        };
    });

};

renderListItems(todos);