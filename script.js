const taskInput = document.getElementById('task');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const clearBtn = document.getElementById('clearBtn');

addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskActions);
clearBtn.addEventListener('click', clearAllTasks);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="checkbox" class="task-checkbox">
        <span class="task-text">${taskText}</span>
      </label>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';
  }
}

function handleTaskActions(event) {
  const target = event.target;
  if (target.classList.contains('delete-btn')) {
    const listItem = target.parentElement;
    taskList.removeChild(listItem);
  } else if (target.classList.contains('task-checkbox')) {
    const taskText = target.nextElementSibling;
    taskText.classList.toggle('completed', target.checked);
  }
}

function clearAllTasks() {
  taskList.innerHTML = '';
}

// Optional: Mark all tasks as completed
document.getElementById('markAllCompletedBtn').addEventListener('click', () => {
  const checkboxes = document.querySelectorAll('.task-checkbox');
  checkboxes.forEach(checkbox => (checkbox.checked = true));
});
