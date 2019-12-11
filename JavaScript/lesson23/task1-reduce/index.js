const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => value ?
    undefined :
    'Required';

const isEmail = value => value.includes('@') ?
    undefined :
    'Should be an email';

const validatorsByField = {
    email: [isRequired, isEmail],
    password: [isRequired],
}

const validate = (fieldName, value) => {
    const validators = validatorsByField[fieldName];
    return validators
        .map(validator => validator(event.target.value))
        .filter(errorText => errorText)
        .join(', ');
};

const onEmailChange = event => {
    const errorText = validate('email', event.target.value);
    emailErrorElem.textContent = errorText;
}

const onPasswordChange = event => {
    const errorText = validate('password', event.target.value);
    passwordErrorElem.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange);
passwordInputElem.addEventListener('input', onPasswordChange);



const formElem = document.querySelector('.login-form');

// let formData = [...new FormData(formElem)];
// // [Array1, Array2]
// // ['email', ''], ['password', '']
// console.log(formData);



// let formDate = formData.reduce((acc, [field, value]) => ({...acc, [field]: value }), {});
// console.log(formDate);


// const onFormSubmit = event => {
//     event.preventDefault();
//     const formData = [...new FormData(formElem)]
//         .reduce(function (acc, [field, value]) {
//            return {...acc, [field]: value };
//            //1. [field, value] = {...acc, [field]: value }; [field, value] = ["email", ""];
//            //2. [field, value] = {...acc, [field]: value }; [field, value] = ["email", ""];
//         }, {});

//     alert(JSON.stringify(formData));
// };

const onFormSubmit = event => {
    event.preventDefault();
    const formData = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);


// let anotherData = formDate
//     .reduce(function(acc, input) {
//         const inputName = input[0]; // 'Tom'
//         const inputValue = input[1];

//         acc[inputName] = inputValue;

//         return acc;
//     }, {});