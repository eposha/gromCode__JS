const requestUserData = (userId, callback) => {
    let object = {
        name: 'John',
        age: 17,
        userId,
        email: 'userid777@example.com'
    };
    setTimeout(() => {
        if (userId == 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }
        callback(object);
    }, Math.floor(Math.random() * 3 + 1) * 1000);
}

// requestUserData('broken');

export { requestUserData };