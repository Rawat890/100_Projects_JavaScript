const addBtn = document.querySelector('#add-btn');
const newTaskInput = document.querySelector('#wrapper input');
const tasksContainer = document.querySelector('#tasks');
const error = document.querySelector('#error');
const countValue = document.querySelector('.count-value');

let taskCount = 0;

// Function to update the task count display
const displayCount = (taskCount) => {
  countValue.innerText = taskCount;
};

// Function to add a new task
const addTask = () => {
  const taskName = newTaskInput.value.trim();
  error.style.display = "none"; // Hide error message initially

  // Validate input
  if (!taskName) {
    setTimeout(() => {
      error.style.display = "block"; // Show error message if input is empty
    }, 200);
    return;
  }

  // Create task container
  const taskDiv = document.createElement('div');
  taskDiv.className = 'task';

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-check';

  // Create task name span
  const taskSpan = document.createElement('span');
  taskSpan.className = 'taskname';
  taskSpan.innerText = taskName;

  // Create edit button
  const editButton = document.createElement('button');
  editButton.className = 'edit';
  const editIcon = document.createElement('i');
  editIcon.className = 'fa-solid fa-pen-to-square';
  editButton.appendChild(editIcon);

  // Create delete button
  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete';
  const deleteIcon = document.createElement('i');
  deleteIcon.className = 'fa-solid fa-trash';
  deleteButton.appendChild(deleteIcon);

  // Append elements to the task container
  taskDiv.appendChild(checkbox);
  taskDiv.appendChild(taskSpan);
  taskDiv.appendChild(editButton);
  taskDiv.appendChild(deleteButton);

  // Append the task container to the tasks container
  tasksContainer.appendChild(taskDiv);

  // Increment task count and update display
  taskCount++;
  displayCount(taskCount);

  // Clear input field after adding the task
  newTaskInput.value = '';

  // Handle delete button click
  deleteButton.onclick = () => {
    taskDiv.remove(); // Remove the task
    taskCount--;
    displayCount(taskCount);
  };

  // Handle edit button click
  editButton.onclick = () => {
    newTaskInput.value = taskSpan.innerText; // Set input field to the task name
    taskDiv.remove(); // Remove the task for editing
    taskCount--;
    displayCount(taskCount);
  };

  // Handle checkbox change
  checkbox.onchange = () => {
    taskSpan.classList.toggle("completed"); // Toggle completed class

    // Update task count based on checkbox state
    if (checkbox.checked) {
      taskCount--;
    } else {
      taskCount++;
    }
    displayCount(taskCount);
  };
};

// Add event listener to the add button
addBtn.addEventListener('click', addTask);

window.onload = () => {
  taskCount = 0;
  displayCount(taskCount)
  newTaskInput.value = ''
}