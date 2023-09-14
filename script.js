document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task');
    const taskList = document.getElementById('task-list');
    const evenHighlightButton = document.getElementById('even-highlight');
    const oddHighlightButton = document.getElementById('odd-highlight');
    const deleteLastButton = document.getElementById('delete-last');
    const deleteFirstButton = document.getElementById('delete-first');
    const completeTaskButton = document.getElementById('complete-task');
    const popup = document.getElementById('popup');
    const closePopupButton = document.getElementById('close-popup');
    const completePopupButton = document.getElementById('complete-popup-btn');
    const taskNumberInput = document.getElementById('task-number');

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const li = document.createElement('li');
            li.textContent = taskText;
            taskList.appendChild(li);
            taskInput.value = '';
        }
    }

    function highlightEven() {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach((task, index) => {
        if ((index + 1) % 2 === 0) {
            task.classList.toggle('even-highlight'); 
        } else {
            task.classList.remove('even-highlight');
        }
     });
    }

    function highlightOdd() {
    const tasks = taskList.querySelectorAll('li');
    tasks.forEach((task, index) => {
        if ((index + 1) % 2 === 1) {
            task.classList.toggle('odd-highlight');
        } else {
            task.classList.remove('odd-highlight');
        }
     });
    }

    function deleteLastTask() {
        const lastTask = taskList.lastElementChild;
        if (lastTask) {
            taskList.removeChild(lastTask);
        }
    }

    function deleteFirstTask() {
        const firstTask = taskList.firstElementChild;
        if (firstTask) {
            taskList.removeChild(firstTask);
        }
    }

    function showPopup() {
        popup.style.display = 'block';
    }

    function hidePopup() {
        popup.style.display = 'none';
        taskNumberInput.value = '';
    }

    function completeTask() {
        if (taskList.childElementCount === 0) {
            alert('Список задач пуст.');
        } else {
            showPopup();
        }
    }

    addTaskButton.addEventListener('click', addTask);
    evenHighlightButton.addEventListener('click', highlightEven);
    oddHighlightButton.addEventListener('click', highlightOdd);
    deleteLastButton.addEventListener('click', deleteLastTask);
    deleteFirstButton.addEventListener('click', deleteFirstTask);
    completeTaskButton.addEventListener('click', completeTask);
    closePopupButton.addEventListener('click', hidePopup);
    completePopupButton.addEventListener('click', function () {
        const taskNumber = parseInt(taskNumberInput.value);
        if (!isNaN(taskNumber) && taskNumber >= 1 && taskNumber <= taskList.childElementCount) {
            const tasks = taskList.querySelectorAll('li');
            const completedTask = tasks[taskNumber - 1];
            completedTask.classList.add('completed');
            taskList.removeChild(completedTask);
            taskList.appendChild(completedTask);
            hidePopup();
        } else {
            alert('Введите правильный номер задачи.');
        }
    });
});






