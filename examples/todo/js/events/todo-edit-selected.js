define([
  'dojo/query',
  'dojo/dom-class',
  'dojo/NodeList-dom',
  'dojo/NodeList-traverse'
], function(query, domClass){

  return function(e){
    query(this).siblings().removeClass('editing');
    domClass.add(this, 'editing');
    query(this).children('.edit')[0].focus();
  };

});