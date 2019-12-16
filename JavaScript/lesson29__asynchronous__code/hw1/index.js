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
    setTimeout(() => {
        function callback() {
            return object;
        }
    }, 1000);
}

export { requestUserData };