document.addEventListener("DOMContentLoaded", () => {
  // Add event listener to form submit
  document.getElementById('create-task-form').addEventListener('submit',(e) => {
    e.preventDefault();
    handleList(e.target['new-task-description'].value);
    e.target.reset(); 
  });
});

function handleList(todo) {
  let li = document.createElement('li');
  li.textContent = todo;
  document.getElementById('tasks').appendChild(li); 
}


