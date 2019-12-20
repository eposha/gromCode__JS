import { renderTasks } from './renderer.js';
import { getItem, setItem } from './storage.js';
import { getTasksList, creatTask, deleteTask } from './tasksGateway.js';

function onDeleteTask() {

    const isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
    if (!isDeleteBtn) return;

    const nearestInputId = event.target.parentNode.firstElementChild.dataset.id;

    deleteTask(nearestInputId)
        .then(() => getTasksList())
        .then(newTasksList => {
            setItem('tasksList', newTasksList)
            renderTasks();
        });
};

export { onDeleteTask };