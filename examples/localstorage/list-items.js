define([
  'templates/list-item',
  'OView'
], function(listItemTemplate, OView){

  var listData = [
    {id: 0, info: 'List Item 0'},
    {id: 1, info: 'List Item 1'},
    {id: 2, info: 'List Item 2'},
    {id: 3, info: 'List Item 3'}
  ];

  var listOView = new OView(listData, function(data){
    localStorage.data = JSON.stringify(this.store.query({}));
    return listItemTemplate(data);
  }, 'ul');

  return listOView.store;
});