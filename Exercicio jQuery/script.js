$(document).ready(function() {
    const taskForm = $('#task-form');
    const taskInput = $('#task');
    const taskList = $('#task-list');

    taskForm.on('submit', function(event) {
        event.preventDefault();

        const taskText = taskInput.val().trim();
        if (taskText === '') return;

        const taskItem = $('<li>').text(taskText);

        taskItem.on('click', function() {
            $(this).toggleClass('completed');
        });

        taskList.append(taskItem);
        taskInput.val('');
    });
});
