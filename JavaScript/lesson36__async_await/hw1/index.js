export const getUsersBlogs = async arr => {
    let response = await arr.map(userId => fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
            if (response.ok) return response.json()
            throw new Error('Failed to load data');
        })
        .then(user => user.blog)
        .catch(err => console.log(err)));
    const usersData = await Promise.all(response);
    return usersData;

};

// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(data => console.log(data))
// .then(data => console.log(data))

// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(data => console.log(data))
//     .then(data => console.log(data))



// const request = await arr.map(userId => fetch(`https://api.github.com/users/${userId}`)