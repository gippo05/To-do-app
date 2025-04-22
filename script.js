const inputTask = document.getElementById('inputTask') // For INPUT TASK
const showTask = document.getElementById('showTask') // For OUTPUT TASK
const addTaskBtn = document.getElementById('addTaskBtn') // Add Task Btn
const removeTaskBtn = document.getElementById('removeTaskBtn') // Remove Task btn

let taskList = [] //The "database" which holds the task coming from inputTask 

let tasksFromLocalStorage = JSON.parse(localStorage.getItem("taskList")) // Gets the tasks stored from localStorage

if(tasksFromLocalStorage){ // Boolean - checking if tasksFromLocalStorage has a value stored or if its null
    taskList = tasksFromLocalStorage // gets the tasks stored from localStorage and stores it in taskList
    render(taskList) // Renders the tasksList for HTML
}

addTaskBtn.addEventListener('click', () =>{ //Adds the tasks to the "database"
    taskList.push(inputTask.value) // puts the value from input task to "database"
    localStorage.setItem("taskList", JSON.stringify(taskList)) //Converts the tasks to string for localStorage purposes
    inputTask.value = "" // clears the inputTask for a fresh new entry
    render(taskList) // renders the List of tasks
})

removeTaskBtn.addEventListener('dblclick', () =>{
    localStorage.clear() // clears the localStorage
    taskList=[] // clears the "database"
    render(taskList)
})

function render(tasks){ // Responsible for rendering the tasks to the screen
    let taskArray = [] // temporary database holder for the tasks for rendering
    for(let i = 0; i < tasks.length; i++){ //Loops through every tasks and converts it to list items
        taskArray += `
        <li>${tasks[i]}</li>`
    }
    showTask.innerHTML = taskArray // renders the tasks that is converted to list items
}