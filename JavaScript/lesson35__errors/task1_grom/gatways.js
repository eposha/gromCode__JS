export const fetchUserData = userName => {
    return fetch(`https://api.github.com/users/${userName}`)
        .then(response => {
            if (response.status === 200) {
                return response.json()
            }
        });
};

export const fetchRepositories = url =>
    fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
        throw new Error('Faild to load')
    });