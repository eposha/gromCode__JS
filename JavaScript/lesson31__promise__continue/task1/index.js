const requestUserData = userId => new Promise((resolve, reject) => {
    if (userId == 'broken') {
        setTimeout(() => {
            reject(new Error('User not found'));
        }, 500);
    } else {
        setTimeout(() => {
            resolve({
                name: 'John',
                age: 17,
                userId,
                email: `${userId}@example.com`,
            })
        }, 1000);
    }
})

export { requestUserData }

// requestUserData('broken')
//     .catch(value => console.log(value));

// requestUserData('broken-1')
//     // .catch(data => console.log(data))
//     .finally(() => console.log('finally'));


// requestUserData('broken-1')
//     // .catch(data => console.log(data))
//     .then(data => console.log(data))