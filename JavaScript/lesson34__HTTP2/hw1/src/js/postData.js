import { createUser } from './tasksGateway.js';

const submitBtnElem = document.querySelector('.submit-button');

const errorElem = document.querySelector('.error-text');

const emailInputElem = document.querySelector('#email');
const nameInputElem = document.querySelector('#name');
const passwordInputElem = document.querySelector('#password');

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
        .then(response => {
            errorElem.textContent = '';
            emailInputElem.value = '';
            nameInputElem.value = '';
            passwordInputElem.value = '';
            submitBtnElem.disabled = true;
            alert(response);
        })
        .catch(() => {
            errorElem.textContent = 'Failed to create user';
        });
};

const submitForm = () => {
    submitBtnElem.addEventListener('click', () => {
        event.preventDefault();
    });
    submitBtnElem.addEventListener('click', postData);
}

export { submitForm }