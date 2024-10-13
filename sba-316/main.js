// This file will handle the main logic of the project
import { setupBodyStyles, styleButtons, styleFormElements } from './uiSetup.js';
import { setupResizeListener, modifyUrlHash } from './bomInteraction.js';
import { setupTaskManager } from './taskManager.js';

// Cache elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedTaskList = document.getElementById('completedTaskList');
const clearTaskBtn = document.querySelector('#clearTaskBtn');
const buttons = document.querySelectorAll('button'); // Cache all buttons for styling

// Setup UI
setupBodyStyles();
styleButtons(buttons); // Style the buttons
styleFormElements();   // Apply font family to form elements

// Setup Task Manager
setupTaskManager(taskForm, taskInput, taskList, completedTaskList, clearTaskBtn);

// BOM interactions
setupResizeListener();
modifyUrlHash();
