const baseUrl = 'https://crudcrud.com/api/53fe5de55123468eb1a6c19970a42b28/tasks';

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
};

export const creatTask = taskData => {
    return fetch(baseUrl, {
            method: 'POST',
            mode: 'no-cors', // no-cors, cors, *same-origin
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify(taskData)
        })
        // .then(response => response.json())
};