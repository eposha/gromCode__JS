export const getUsersBlogs = async arr => {
    try {
        let response = await arr.map(userId => fetch(`https://api.github.com/users/${userId}`)
            .then(promise => promise.json())
            .then(resolve => resolve.blog));
        const usersData = await Promise.all(response);
        return usersData;
    } catch (err) {
        console.log(err);
    }

};

// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(data => console.log(data))
// .then(data => console.log(data))

// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(data => console.log(data))
//     .then(data => console.log(data))



// const request = await arr.map(userId => fetch(`https://api.github.com/users/${userId}`)