# Task Manager with Priority

This is a simple task management web application that allows users to add, complete, and delete tasks. Tasks are categorized by priority (High, Medium, Low). Completed tasks are moved to a separate list and can be cleared with a single button click.

## Features
- Add tasks with different priority levels (High, Medium, Low).
- Mark tasks as complete using a checkbox, which moves them to the "Completed Tasks" section.
- Delete individual tasks from the task list.
- Clear all completed tasks at once.
- Responsive to window resizing, with alert behavior for mobile screens.
- Basic input validation for task submission (minimum 3 characters).

## Technologies Used
- **HTML**: Structure and form creation for user interaction.
- **CSS (dynamically applied via JavaScript)**: Basic styling, including font and button design.
- **JavaScript**: Core functionality including DOM manipulation, event listeners, and BOM methods.
  - Adding and deleting tasks.
  - Handling task completion and clearing completed tasks.
  - Using BOM properties like window resize and hash management.

## Browser Object Model (BOM) Usage
- The app listens for resize events on the window to display alerts when the screen width goes below 600 pixels (mobile view).
- It uses the location.hash property to manage URL hash navigation for the task app.

## How to Run the Application
1. **Download the files**: Make sure you have the HTML, CSS, and JavaScript files.
2. **Open `index.html`** in your web browser.
3. **Add tasks**: Fill in the task input field and select the priority (High, Medium, Low).
4. **Submit**: Click the "Add Task" button to add the task to the list.
5. **Complete or delete tasks**: Use the checkbox to mark tasks as complete, or click the "Delete" button to remove them.
6. **Clear completed tasks**: Once you have completed tasks, you can clear them all by clicking the "Clear Completed Tasks" button.

## Installation
No installation is required. Just open the HTML file in any modern web browser, and the application will be ready to use.

## Future Enhancements
- Add due dates to tasks.
- Automatically sort tasks by priority.
- Mobile view alert should go away once you click it.

## Folder Structure
├── index.html       - Main HTML file<br>
├── README.md        - Project description<br>
├── script.js        - JavaScript functionality<br>
└── styles.css       - styling
