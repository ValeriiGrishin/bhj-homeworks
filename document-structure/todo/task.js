const form = document.getElementById('tasks__form');
const input = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const taskText = input.value.trim();
    if (taskText === '') return;
    
    const task = document.createElement('div');
    task.className = 'task';
    
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = taskText;
    
    const removeBtn = document.createElement('a');
    removeBtn.href = '#';
    removeBtn.className = 'task__remove';
    removeBtn.innerHTML = '&times;';
    
    removeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        task.remove();
    });
    
    task.appendChild(taskTitle);
    task.appendChild(removeBtn);
    tasksList.appendChild(task);
    
    input.value = '';
});