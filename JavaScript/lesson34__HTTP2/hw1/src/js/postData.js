import { createUser } from './tasksGateway.js';

const submitBtnElem = document.querySelector('.submit-button');

const errorElem = document.querySelector('.error-text');

const emailInputElem = document.querySelector('#email');
const nameInputElem = document.querySelector('#name');
const passwordInputElem = document.querySelector('#password');

const checkStatus = data => {
    if (data.status !== 201) {
        errorElem.textContent = 'Failed to create user';
    } else {
        errorElem.textContent = '';
        emailInputElem.value = '';
        nameInputElem.value = '';
        passwordInputElem.value = '';
        submitBtnElem.disabled = true;
    };
};

const postData = () => {

    const email = emailInputElem.value;
    const name = nameInputElem.value;
    const password = passwordInputElem;

    const newUser = {
        name,
        email,
        password,
    };

    createUser(newUser)
        .then(data => checkStatus(data));

};

const submitForm = () => {
    submitBtnElem.addEventListener('click', () => {
        event.preventDefault();
    });
    submitBtnElem.addEventListener('click', postData);
}

export { submitForm }