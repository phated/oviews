define([
  'app/oviews/todo-items',
  'dojo/query',
  'dojo/NodeList-dom',
  'dojo/NodeList-traverse'
], function(todoItems, query){

  var idSelector = 'data-model-id';

  return function(e){
    var modelId = query(this).parents('[' + idSelector + ']').attr(idSelector);

    var currentTodo = todoItems.get(modelId);

    if(currentTodo.completed){
      currentTodo.completed = '';
    } else {
      currentTodo.completed = 'completed';
    }
    todoItems.put(currentTodo);
  };

});