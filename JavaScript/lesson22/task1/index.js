const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_div');
const spanElem = document.querySelector('.rect_div');
const clearBtn = document.querySelector('.clear');
const removeBtn = document.querySelector('.remove-handleds');
const attatchBtn = document.querySelector('.attatch-handleds');

const logTarget = (text, color) => {
    const eventList = document.querySelector('.events-list');
    eventList.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');


const attatchEventList = () => {
    divElem.addEventListener('click', logGreyDiv, true);
    pElem.addEventListener('click', logGreyP, true);
    spanElem.addEventListener('click', logGreySpan, true);

    spanElem.addEventListener('click', logGreenSpan);
    pElem.addEventListener('click', logGreenP);
    divElem.addEventListener('click', logGreenDiv);
};

attatchEventList();

const pushAttatch = attatchEventList;
attatchBtn.addEventListener('click', pushAttatch);


const removeEventList = () => {
    divElem.removeEventListener('click', logGreenDiv, true);
    divElem.removeEventListener('click', logGreyDiv);

    pElem.removeEventListener('click', logGreenP, true);
    pElem.removeEventListener('click', logGreyP);

    spanElem.removeEventListener('click', logGreenSpan, true);
    spanElem.removeEventListener('click', logGreySpan);
};
const pushRemove = removeEventList;
removeBtn.addEventListener('click', pushRemove);


const clearEventList = () => {
    document.querySelector('.events-list').innerHTML = '';
};
const pushClear = clearEventList;
clearBtn.addEventListener('click', pushClear);