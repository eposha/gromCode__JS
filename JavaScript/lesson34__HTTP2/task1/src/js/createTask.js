import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, creatTask } from './tasksGateway.js';

function onCreateTask() {
    const taskTitleInputElem = document.querySelector('.task-input');
    const text = taskTitleInputElem.value;

    if (!text) return;

    // const tasksList = getItem('tasksList') || [];

    const newTask = {
        text,
        done: false,
        createDate: new Date().toISOString(),
        // id: Date.now(),
    };

    creatTask(newTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList)
            renderTasks();
        });

    // const newTasksList = tasksList.concat();

    // setItem('tasksList', newTasksList);
    // renderTasks();
    taskTitleInputElem.value = '';
};

export { onCreateTask };