define([
  'app/oviews/todo-items',
  'dojo/_base/array'
], function(todoItems, array){

  return function(e){
    var completedToggle = this.checked ? 'completed' : '';

    var allItems = todoItems.query({});

    array.forEach(allItems, function(item, idx){
      item.completed = completedToggle;
      todoItems.put(item);
    });
  };

});