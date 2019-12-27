fetch(`https://api.github.com/user/github`)
    .then(response => {
        debugger;
        if (response.status === 200) {
            return response.json();
        }
        throw new Error('No data');
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        debugger;
        console.log(err)
    })


// const successRequest = Promise.resolve({ name: 'Tom' });


// successRequest
//     .then(data => {
//         console.log(data);
//         throw new Error('Unexpected error')
//     })
//     .catch(err => {
//         console.warn(err.message);
//     });


// const failedRequest = Promise.reject(new Error('Fail'));

// failedRequest
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err.message);
//         throw err;
//     })
//     .then(data => {
//         console.log(data);
//     });


// window.addEventListener('unhandledrejection', function(e) {
//     console.log(e.reason.message)
// });