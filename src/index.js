document.addEventListener("DOMContentLoaded", () => {
  
  const taskForm= document.getElementById("create-task-form")

  const tasklist =document.getElementById("tasks")

  taskForm.addEventListener('submit',e => {
  e.preventDefault()
  const newTask = document.getElementById("new-task-description").value
  const taskItem = document.createElement("p")
  const btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'X'
  taskItem.innerText = `${newTask} `
  taskItem.appendChild(btn)
  tasklist.appendChild(taskItem)
  taskForm.reset()
})
function handleDelete(e){
  e.target.parentNode.remove()
}

})
