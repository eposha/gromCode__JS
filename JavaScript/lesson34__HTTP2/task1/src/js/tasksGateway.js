const baseUrl = 'https://crudcrud.com/api/4617d2f6a9dc41f5ab9f7736535c825d/tasks';

const mapTasks = tasks =>
    tasks.map(({ _id, ...rest }) => ({...rest, id: _id }))

export const getTasksList = () => {
    return fetch(baseUrl)
        .then(response => response.json())
        .then(tasks => mapTasks(tasks))
};

export const creatTask = taskData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(taskData)
    })

};


export const updateTask = (taskId, updateTaskData) => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(updateTaskData)
    })

};

export const deleteTask = taskId => {
    return fetch(`${baseUrl}/${taskId}`, {
        method: 'DELETE',
    })

};


// const arr = [{ _id: "5dfc9c5ee6280703e8ec0a32", text: "task", done: false, createDate: "2019-12-20T09:03:12.565Z" }];

// // const map = task => {
// //     task.map(({_id, ...rest}) =>  ;
// // }

// // const {_id, ...rest} = arr[0];

// // const ({...some, id: _id}) = ({_id, ...rest});

// // console.log({ _id, ...rest } = arr[0]);
// // console.log({...task, id: _id } = {
// //     _id: '5dfc9c5ee6280703e8ec0a32',
// //     text: 'task',
// //     done: false,
// //     createDate: '2019-12-20T09:03:12.565Z'
// //   })


// const {...task} = {
//     _id: '5dfc9c5ee6280703e8ec0a32',
//     text: 'task',
//     done: false,
//     createDate: '2019-12-20T09:03:12.565Z'
//   }
//   console.log(task)