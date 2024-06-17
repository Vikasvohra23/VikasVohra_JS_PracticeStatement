document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const addButton = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const notification = document.getElementById('notification');

    // Add event listener for the Add button
    addButton.addEventListener('click', addTodo);
    // Add event listener for handling Edit and Delete actions in the list
    todoList.addEventListener('click', handleTodoActions);

    // Function to add a new todo item
    function addTodo() {
        const todoText = todoInput.value.trim(); // Get the trimmed value of the input field
        if (todoText === '') { // Check if the input is empty
            showNotification(); // Show notification if input is empty
            return; // Exit the function
        }

        // Create a new list item (li) element
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todoText}</span> <!-- Display the task text -->
            <div class="actions">
                <button class="edit-btn">Edit</button> <!-- Button to edit the task -->
                <button class="delete-btn">Delete</button> <!-- Button to delete the task -->
            </div>
        `;
        todoList.appendChild(li); // Add the new list item to the todo list
        todoInput.value = ''; // Clear the input field
    }

    // Function to show the notification
    function showNotification() {
        notification.classList.remove('hidden'); // Show the notification
        setTimeout(() => {
            notification.classList.add('hidden'); // Hide the notification after 3 seconds
        }, 3000);
    }

    // Function to handle edit and delete actions
    function handleTodoActions(e) {
        if (e.target.classList.contains('edit-btn')) { // Check if the Edit button was clicked
            const li = e.target.closest('li'); // Get the closest list item (li) element
            const span = li.querySelector('span'); // Get the span element containing the task text
            const newText = prompt('Edit your task:', span.textContent); // Prompt the user to enter new text
            if (newText !== null && newText.trim() !== '') { // Check if the new text is valid
                span.textContent = newText.trim(); // Update the task text
            }
        }

        if (e.target.classList.contains('delete-btn')) { // Check if the Delete button was clicked
            if (confirm('Are you sure you want to delete this task?')) { // Confirm deletion
                const li = e.target.closest('li'); // Get the closest list item (li) element
                li.remove(); // Remove the list item from the todo list
            }
        }
    }
});
