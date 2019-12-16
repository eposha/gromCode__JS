const requestUserData = (userId, callback) => {
    let object = {
        name: 'John',
        age: 17,
        userId,
        email: `${userId}@example.com`,
    };
    setTimeout(() => {
        if (userId == 'broken') {
            callback(null, 'Failed to load user data');
            return;
        }
        callback();
    }, Math.floor(Math.random() * 3 + 1) * 1000);
}

// requestUserData('broken');

export { requestUserData };