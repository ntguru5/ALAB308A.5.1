// This file will handle the functions that will be used for task management app

const fragment = document.createDocumentFragment();

export function setupTaskManager(taskForm, taskInput, taskList, completedTaskList, clearTaskBtn) {
    // Task submission handler
    taskForm.addEventListener('submit', (event) => handleTaskSubmit(event, taskInput, taskList, completedTaskList, clearTaskBtn));

    // Clear completed tasks listener
    clearTaskBtn.addEventListener('click', () => clearCompletedTasks(completedTaskList, clearTaskBtn));
}

// Task submission handler
function handleTaskSubmit(event, taskInput, taskList, completedTaskList, clearTaskBtn) {
    event.preventDefault(); // Prevent default form submission

    const taskText = taskInput.value; // Get task input value
    const priority = document.getElementById('priority').value; // Get selected priority

    // Validate input
    if (taskText.length < 3) {
        alert('Task name must be at least 3 characters long');
        return; // Exit if input is invalid
    }

    // Create task item using createElement and appendChild
    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;
    taskItem.classList.add(`${priority}-priority`);

    // Add checkbox to mark task as complete
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            markTaskAsCompleted(taskItem, completedTaskList, clearTaskBtn);
        }
    });
    taskItem.prepend(checkbox);

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        taskItem.remove();
    });
    taskItem.appendChild(deleteButton);
    deleteButton.style.marginLeft = '5px'; // Add spacing between task text and button
    deleteButton.style.padding = '5px 10px';
    deleteButton.style.backgroundColor = 'rgb(250, 100, 100)'; // Red button
    deleteButton.style.color = 'white';
    deleteButton.style.border = 'none';
    deleteButton.style.borderRadius = '7px';
    deleteButton.style.cursor = 'pointer';

    // Append task item to fragment and then to the task list
    fragment.appendChild(taskItem);
    taskList.appendChild(fragment);

    // Clear input field after submission
    taskInput.value = '';
}

// Mark task as complete
function markTaskAsCompleted(taskItem, completedTaskList, clearTaskBtn) {
    taskItem.remove();
    completedTaskList.appendChild(taskItem);

    // add strikethrough styling
    taskItem.style.textDecoration = 'line-through';
    taskItem.querySelector('input[type="checkbox"]').remove();

    // show "Clear Completed Tasks" button
    clearTaskBtn.classList.remove('hidden');
}

// Function to clear completed tasks
function clearCompletedTasks(completedTaskList, clearTaskBtn) {
    // Iterate over completed tasks and remove them
    while (completedTaskList.firstChild) {
        completedTaskList.removeChild(completedTaskList.firstChild);
    }

    // Hide the "Clear Completed Tasks" button
    clearTaskBtn.classList.add('hidden');
}
