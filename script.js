const inputTask = document.getElementById('input-box') // ID for input Box
const listContainer = document.getElementById('list-container') // id for list container
const addTaskButton = document.getElementById('addTaskBtn') // id for add task button


function saveTask(){ // Responsible for storing tasks on local storage
    localStorage.setItem("myTasks", listContainer.innerHTML)
}



addTaskButton.addEventListener('click', () =>{ // Responsible for adding tasks
    let li = document.createElement("li") // Converts tasks into lists element
    let span = document.createElement("span") // Creates the x button

    if(inputTask.value === "") // Responsible for triggering alert if add button is clicked w/o input
        {
        alert("Please type your task first!")
    }
    else // Responsible for creating the task 
    {
        li.innerHTML = inputTask.value // Gets the value or task from input
        span.innerHTML = "\u00d7" // Creates the x button
        li.appendChild(span) // Renders the X button besides the task list
        listContainer.appendChild(li) // Renders the task as list items on the List Container
    }
    inputTask.value = "" // Clears the Input box whenever you add a task
    saveTask() // Calls the function saveTask 
})

listContainer.addEventListener('click', (e) =>{ // Responsible for listening to clicks
    if(e.target.tagName === "LI"){ // Responsible for toggling the check and uncheck marks
        e.target.classList.toggle("checked")
        saveTask()
    }
    else if (e.target.tagName === "SPAN"){ // Reponsible for deleting tasks one by one
        e.target.parentElement.remove()
        saveTask()
    }
})



function showTasks(){ // Responsible for showing tasks if there are any stored whenever the browser is refreshed or re-opened
  const savedTasks = listContainer.innerHTML = localStorage.getItem("myTasks")
  if(savedTasks){ // Checks if the local storage is true or null
    listContainer.innerHTML = savedTasks
  }
  else{ //handles the null part by rendering ""
    listContainer.innerHTML = ""
  }
}

showTasks() // Calls the showtask whenever the page is loaded
