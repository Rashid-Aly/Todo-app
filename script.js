const form = document.querySelector('form');
const input = document.querySelector('input[type="text"]');
const tasksList = document.querySelector('.tasks');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (input.value.trim() === '') {
    alert('Please enter a task!');
    return;
  }
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  taskItem.innerHTML = `${input.value} <button>Delete</button>`;
  tasksList.appendChild(taskItem);
  input.value = '';
});

tasksList.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    e.target.parentNode.remove();
  }
});