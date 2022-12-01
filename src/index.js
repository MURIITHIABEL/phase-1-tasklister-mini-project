document.addEventListener("DOMContentLoaded", () => {
 
  const form = document.getElementById('create_task_form');
  const taskList = document.getElementById('tasks');


  form.addEventListener('submit', addTask);

  taskList.addEventListener('click', removeTask);

  function addTask(e){
    e.preventDefault();
    const newTaskDescription = document.getElementById('new_task_description').value;
    console.log(newTaskDescription);
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newTaskDescription));
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  }

  function removeTask(e) {
    if (e.target.nodeName === 'BUTTON') {
      if(confirm('Delete ?')) {
        let li = e.target.parentElement;
        taskList.removeChild(li);
      }
    }

  }

});
