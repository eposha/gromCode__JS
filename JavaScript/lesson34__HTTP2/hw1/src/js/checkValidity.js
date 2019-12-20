const emailInputElems = document.querySelector('#email');
const nameInputElems = document.querySelector('#name');
const passwordInputElems = document.querySelector('#password');

const errorElem = document.querySelector('.error-text');

const submitBtnElem = document.querySelector('.submit-button');

const addEvents = () => {
    emailInputElems.addEventListener('input', reportValidity);
    nameInputElems.addEventListener('input', reportValidity);
    passwordInputElems.addEventListener('input', reportValidity);
};

const reportValidity = () => {
    if (!emailInputElems.validity.valid || !nameInputElems.validity.valid || !passwordInputElems.validity.valid) {
        submitBtnElem.disabled = true;
        errorElem.textContent = '';
    } else {
        submitBtnElem.disabled = false;
        errorElem.textContent = '';
    }
};

export { addEvents }