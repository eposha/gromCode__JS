import { createUser } from './tasksGateway.js';

const submitBtnElem = document.querySelector('.submit-button');

const errorElem = document.querySelector('.error-text');

const emailInputElem = document.querySelector('#email');
const nameInputElem = document.querySelector('#name');
const passwordInputElem = document.querySelector('#password');

const formElem = document.querySelector('.login-form');



const postData = () => {
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => (

            {...acc, [field]: value }), {});

    console.log(JSON.stringify(formData));



    const newUser = {
        name: formElem.name,
        email: formElem.email,
        password: formElem.password,
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