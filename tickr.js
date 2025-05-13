function updateCounter() {
  const totalTasks = document.querySelectorAll('#taskList li').length;
  const completedTasks = document.querySelectorAll('#taskList li.completed').length;

  document.getElementById('totalCount').textContent = totalTasks;
  document.getElementById('completedCount').textContent = completedTasks;
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-check';

  checkbox.addEventListener('change', () => {
    li.classList.toggle('completed');
    updateCounter();
  });

  const span = document.createElement('span');
  span.textContent = taskText;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '❌';
  removeBtn.addEventListener('click', () => {
    li.remove();
    updateCounter();
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(removeBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
  updateCounter();
}
