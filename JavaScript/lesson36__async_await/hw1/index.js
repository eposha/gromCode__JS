export const getUsersBlogs = async arr => {
    try {
        let response = await arr.map(userId => fetch(`https://api.github.com//${userId}`)
            .then(response => {
                if (response.ok) return response.json()
                throw new Error('Failed to load data');
            })
            .then(user => user.blog));
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