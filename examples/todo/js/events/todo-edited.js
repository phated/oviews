define([
  'app/oviews/todo-items',
  'dojo/query',
  'dojo/NodeList-dom',
  'dojo/NodeList-traverse'
], function(todoItems, query){

  var ENTER_KEY = 13
    , idSelector = 'data-model-id';

  return function(e){
    if(e.keyCode === ENTER_KEY){
      if(this.value){ // No empty strings
        var modelId = query(this).parents('[' + idSelector + ']').attr(idSelector);

        var currentItem = todoItems.get(modelId);
        currentItem.title = this.value;
        todoItems.put(currentItem);
      }
    }
  };

});