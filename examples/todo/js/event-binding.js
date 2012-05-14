define([
  'event/todo-added',
  'event/todo-edit-selected',
  'event/todo-edited',
  'event/todo-completed',
  'event/todo-destroyed',
  'event/todo-destroy-completed',
  'event/todo-toggle-all',
  'dojo/on'
], function(todoAdded, todoEditSelected, todoEdited, todoCompleted, todoDestroyed, todoDestroyCompleted, todoToggleAll, on){

  // Add new todo
  on(document, '#new-todo:keydown', todoAdded);

  // Select todo for editing
  on(document, '#todo-list li:dblclick', todoEditSelected);

  // Save edited todo
  on(document, '#todo-list li input.edit:keydown', todoEdited);

  // Completed Toggle
  on(document, '.view input.toggle:change', todoCompleted);

  // Todo Removal
  on(document, '.destroy:click', todoDestroyed);

  // Remove all completed
  on(document, '#clear-completed:click', todoDestroyCompleted);

  // Toggle all todos
  on(document, '#toggle-all:change', todoToggleAll);

});