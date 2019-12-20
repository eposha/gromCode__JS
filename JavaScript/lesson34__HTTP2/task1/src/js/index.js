import { initTodoListHandlers } from './todoList.js';
import { renderTasks } from './renderer.js';
import { getTasksList } from './tasksGateway.js';
import { setItem } from './storage.js';


function onStorageChange(event) {
    if (event.key === 'tasksList') renderTasks();
};
document.addEventListener('DOMContentLoaded', () => {
    getTasksList()
        .then(tasksList => {
            setItem('tasksList', tasksList)
            renderTasks();
        })
    initTodoListHandlers();
});

window.addEventListener('storage', onStorageChange);