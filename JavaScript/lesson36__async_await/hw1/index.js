export const getUsersBlogs = async arr => {
    const request = arr.map(userId => fetch(`https://api.github.com/users/${userId}`)
        .then(response => {
            if (response.ok) return response.json();
            throw new Error('Failed to load data');
        })
    );
    const userData = await Promise.all(request);
    return userData.map(user => user.blog);
};

// getUsersBlogs(['google', 'facebook', 'gaearon'])
//     .then(data => console.log(data))




// .then(linksList => console.log(linksList));
// .then(emailList => console.log(emailList));
//     .then(linksList => console.log(linksList));


// const fetchUser = async userId => {
//     try {
//         const response = await fetch(`https://api.github.com/users/${userId}`);
//         if (!response.ok) {
//             return null;
//         }
//         const userData = await response.json();
//         return userData
//     } catch (err) {
//         throw new Error('Failed to fetch user')
//     }

// };