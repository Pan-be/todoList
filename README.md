# To Do Application
This is a simple To Do application that allows users to add, remove, and toggle the completion status of their tasks. The project consists of an HTML file, three JavaScript files, and a CSS file, and is deployed on Netlify.

## How to Use
To use the To Do application, simply open the deployed site and start adding your tasks using the "Add Todo" button. You can also remove a task by clicking on the "x" button next to it, or mark it as completed by checking the box next to it. The search bar allows you to filter your tasks by keyword, and the "Hide completed" checkbox allows you to hide completed tasks from the list.

## Code Overview
The code for this application consists of three JavaScript files:

### todo-functions.js
This file contains the following functions:

* getSavedTodos(): fetches existing tasks from localStorage
* saveTodos(todos): saves tasks to localStorage
* removeTodo(): removes a task from the list
* toggleTodo(): toggles the completion status of a task
* generateTodoDOM(): generates the DOM structure for a new task
* renderTodos(): renders the application tasks based on filters
* generateSummaryDOM(): generates the DOM element for the list summary
### todo-app.js
This file contains the main application code, which creates a list of tasks, sets the filter criteria, and renders the tasks using the functions defined in todo-functions.js. The code also includes event listeners for user actions, such as adding, removing, or marking a task as completed.

### uuidv4.js
This file is a library that generates a unique ID for each task added to the list.

## Deployment
The To Do application is deployed on Netlify, which allows for easy access and sharing of the project. The code is stored on a public GitHub repository, which can be accessed by anyone who wants to view or contribute to the project.

## Credits
This project was created by [Pan.Be](https://pan-be.vercel.app). The code for this project is open source and can be found on GitHub.
