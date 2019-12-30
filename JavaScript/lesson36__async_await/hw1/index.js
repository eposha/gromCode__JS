export const getUsersBlogs = async arr => {
    const request = await arr.map(userId => fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Failed to load data');
        }));
    console.log(request)
    let email = [];

    const result = request
        .map(arg => arg
            .then(data => email.push(data.blog)))
        // .then(response => response.map(arg => arg.json()))
        // .then(data => data.map(arg => arg.then(data => email.push(data.blog))));
        // return email;
        // .then(data => console.log(data.map(arg => arg.blog))))
        // .then(data => console.log(data))
        // .then(response => response.blog);
    return email;
    // return result.map(data => data.blog);
    // return request;
    // const some = result.map(data => (data.json())
    //     .then(data => data.blog));
    // return some;
};

// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(data => console.log(data))
//     .then(data => console.log(data))




// async function showAvatar() {
//     let response = await fetch(`https://api.github.com/users/google`);
//     let user = await response.json();
//     return user.blog;
// };

// showAvatar()
//     .then(user => console.log(user));