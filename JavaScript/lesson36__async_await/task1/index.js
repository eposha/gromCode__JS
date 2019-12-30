const getUser = async userId => {
    try {
        const response = await fetch(`https://api.github.com/users/${userId}`);
        if (!response.ok) {
            return null;
        };
        const userData = await response.json();
        return userData;
    } catch (err) {
        throw new Error('Failed to fetch user');
    }
};

getUser('google')
    .then(userData => console.log(userData))
    .catch(err => console.log(err.message));

// result
//     .then(data => console.log(data))



// export const fetchUser = async userId => {
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