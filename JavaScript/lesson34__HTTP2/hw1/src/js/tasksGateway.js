const baseUrl = 'https://crudcrud.com/api/6698f1969127469c938ba2f1b54da39e/tasks';

export const createUser = userData => {
    return fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(userData)
        }).then(response => response.json())
        .then(data => JSON.stringify(data));
};