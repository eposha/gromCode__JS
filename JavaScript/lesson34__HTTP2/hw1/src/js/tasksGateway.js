const baseUrl = 'https://crudcrud.com/api/fcf76d7b403a4996956ac34a3bca29a9/tasks';

export const createUser = userData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(userData)
    })
};