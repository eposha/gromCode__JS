const baseUrl = 'https://crudcrud.com/api/6698f1969127469c938ba2f1b54da39e/tasks';

const formElem = document.querySelector('.login-form');
const submitBtnElem = document.querySelector('.submit-button');
const inputs = [...document.querySelectorAll('input')];
const errorTextElem = document.querySelector('.error-text');


const reportValidity = () => {
    if (formElem.reportValidity()) {
        submitBtnElem.disabled = false;
    } else {
        submitBtnElem.disabled = true;
    }
    errorTextElem.textContent = '';
};

const postData = event => {
    event.preventDefault();
    const newUser = [...new FormData(formElem)]
        .reduce((acc, [field, value]) => ({...acc, [field]: value }), {});

    fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => {
            inputs.map(elem => elem.value = '');
            submitBtnElem.disabled = true;
            alert(JSON.stringify(data))
        })
        .catch(() => {
            errorTextElem.textContent = 'Failed to create user';
        });
};




// const preventDefault = () => {
//     console.log(inputs)
//     const prevDef = event => {
//             event.preventDefault();
//         }
//         [...inputs].map(input => {
//             input.classList.add('chrome')
//             console.log(input)
//             input.addEventListener('input', prevDef);
//         });
// };

// preventDefault();


formElem.addEventListener('input', reportValidity);
formElem.addEventListener('submit', postData);