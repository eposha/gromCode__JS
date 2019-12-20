import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { updateTask, getTasksList } from './tasksGateway.js'

function onToggleTask(event) {
    const isCheckbox = event.target.classList.contains('list-item__checkbox');
    if (!isCheckbox) return;

    const taskId = event.target.dataset.id;
    const tasksList = getItem('tasksList');
    const { text, createDate } = tasksList
        .find(task => task.id === taskId);

    const done = event.target.checked;


    const updatedTask = {
        text,
        createDate,
        done,
        finishDate: done ? new Date().toISOString() : null,
    };

    updateTask(taskId, updatedTask)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList)
            renderTasks();
        });
};

export { onToggleTask };