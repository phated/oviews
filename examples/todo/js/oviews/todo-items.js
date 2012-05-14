define([
  'templates/todo-item',
  'templates/todo-footer',
  'OView',
  'dojo/dom-style',
  'dojo/dom-construct'
], function(todoItemTemplate, todoFooterTemplate, OView, domStyle, domConstruct){

  var initialData = [
    {
      id: 0,
      completed: 'completed',
      title: 'Create a TodoMVC template'
    },
    {
      id: 1,
      completed: '',
      title: 'Rule the web'
    }
  ];

  var todoItems = new OView({
    initialData: initialData,
    view: function(data){
      // Overriding the view to do special stuff
      // TODO: Make OViews take a model instead of initialData so it's possible to attach multiple observers
      var count = {
        completed: this.model.query({completed: 'completed'}).length,
        remaining: this.model.query({completed: ''}).length
      };
      if(count.completed + count.remaining === 0){
        domStyle.set('main', 'display', 'none');
      } else {
        domStyle.set('main', 'display', 'block');
      }
      domConstruct.place(todoFooterTemplate(count), 'footer', 'replace');
      return todoItemTemplate(data);
    },
    selector: '#todo-list'
  });

  return todoItems.model;

});