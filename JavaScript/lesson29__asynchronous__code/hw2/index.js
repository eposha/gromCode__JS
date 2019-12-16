const requestUserData = (userId, callback) => {
    if (userId == 'broken') {
        callback(null, 'Failed to load user data');
        return;
    }
    let object = {
        name: 'John',
        age: 17,
        userId,
        email: 'userid777@example.com'
    };

    callback = (object);
    setTimeout(callback, Math.floor(Math.random() * 3 + 1) * 1000);
}

// requestUserData('broken');

export { requestUserData };