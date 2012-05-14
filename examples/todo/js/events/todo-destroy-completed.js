define([
  'app/oviews/todo-items',
  'dojo/_base/array'
], function(todoItems, array){

  return function(e){
    var allCompleted = todoItems.query({completed: 'completed'});

    array.forEach(allCompleted, function(item, idx){
      todoItems.remove(item.id);
    });
  };

});