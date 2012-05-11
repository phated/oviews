define([
  'app/list-items',
  'dojo/on',
  'dojo/query',
  'dojo/domReady!'
], function(listItems, on, query){

  console.log(listItems.query({}));

  query('button').on('click', function(e){
    listItems.add({
      info: query('#newListItem')[0].value
    });
    console.log(listItems.query({}));
  });

  on(document, 'li:click', function(e){
    this.style.color = 'red';
  });

});