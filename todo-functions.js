//fetch existing notes from localStorage
const getSavedTodos = function () {
    const todoJSON = localStorage.getItem('todos')

    if (todoJSON !== null) {
        return JSON.parse(todoJSON)
    } else {
    return []
}
}

//save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//remove a todo from the list
const removeTodo = function (id){
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

//generate DOM structure for new todo
const generateTodoDOM = function (todo) {
    const p = document.createElement('div')
    const textEl = document.createElement('span')
    const checkbox = document.createElement('input')
    const button = document.createElement('button')

    // set up the checkbox
    checkbox.setAttribute('type', 'checkbox')
    p.appendChild(checkbox)

    // set up the todo title text
    textEl.textContent = todo.text
    p.appendChild(textEl)

    // set up the remove todo button
    button.textContent = 'x'
    p.appendChild(button)
    button.addEventListener('click', function () {
        removeTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    return p
}

//render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed
        
        return searchTextMatch && hideCompletedMatch

    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    const summary = generateSummaryDOM(incompleteTodos)
    document.querySelector('#todos').appendChild(summary)

    filteredTodos.forEach(function (todo) {
        const p = generateTodoDOM(todo)

        document.querySelector('#todos').appendChild(p)
    })
}

//get the DOM  element from the list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h1')
    summary.textContent = `You have ${incompleteTodos.length} todos`
    return summary
}