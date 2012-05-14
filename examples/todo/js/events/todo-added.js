define([
  'app/oviews/todo-items'
], function(todoItems){

  var ENTER_KEY = 13;

  return function(e){
    if(e.keyCode === ENTER_KEY){
      if(this.value){ // No empty strings
        var currentLength = todoItems.query({}).length;
        var newTodo = {
          id: currentLength,
          title: this.value,
          completed: ''
        };
        todoItems.add(newTodo);
      }
    }
  };

});