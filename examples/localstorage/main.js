define([
  'app/list-items',
  'dojo/on',
  'dojo/dom',
  'dojo/domReady!'
], function(listItems, on, dom){

  console.log(listItems.query({}));

  on(document, 'button:click', function(e){
    listItems.add({
      info: dom.byId('newListItem').value
    });
    console.log(listItems.query({}));
  });

  on(document, 'li:click', function(e){
    this.style.color = 'red';
  });

});