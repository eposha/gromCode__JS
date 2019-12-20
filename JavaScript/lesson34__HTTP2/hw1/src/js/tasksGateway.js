const baseUrl = 'https://crudcrud.com/api/4617d2f6a9dc41f5ab9f7736535c825d/tasks';

export const createUser = userData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData)
    })
};