define([
  'OView',
  'doh',
  'dojo/json',
  'dojo/query',
  'dojo/domReady!'
], function(OView, doh, JSON, query){
  doh.register('Basic OView Behavior', [
    {
      name: 'Can instantiate OView with empty Model and View',
      setUp: function(){
        var data = []
          , view = function(){}
          , model;
        this.oview = new OView({
          initialData: data,
          view: view
        });
        model = this.oview.model;
        this.hasDojoObservableProps =
          model.hasOwnProperty('add') &&
          model.hasOwnProperty('put') &&
          model.hasOwnProperty('notify') &&
          model.hasOwnProperty('query') &&
          model.hasOwnProperty('remove');
      },
      runTest: function(){
        doh.assertTrue(typeof this.oview === 'object');
        doh.assertTrue(this.hasDojoObservableProps);
      }
    },
    {
      name: 'Can instantiate OView with a selector',
      setUp: function(){
        var data = []
          , view = function(){}
          , selector = 'body';
        this.oview = new OView({
          initialData: data,
          view: view,
          selector: selector
        });
      },
      runTest: function(){
        doh.assertTrue(this.oview.parentElement.length > 0);
      }
    },
    {
      name: 'Can instantiate OView with a NodeList for parentElement',
      setUp: function(){
        var data = []
          , view = function(){}
          , element = query('body');
        this.oview = new OView({
          initialData: data,
          view: view,
          parentElement: element
        });
      },
      runTest: function(){
        doh.assertTrue(this.oview.parentElement.length > 0);
      }
    },
    {
      name: 'Can instantiate OView with a custom idProperty',
      setUp: function(){
        var data = [
            {customId: 0, info: 'Test Data 0'},
            {customId: 1, info: 'Test Data 1'}
          ]
          , view = function(){}
          , customIdProperty = 'customId'
          , model;
        this.oview = new OView({
          initialData: data,
          view: view,
          idProperty: customIdProperty
        });
        model = this.oview.model;
        this.retrievedObject = model.get(0);
      },
      runTest: function(){
        doh.assertTrue(this.retrievedObject);
      }
    },
    {
      name: 'Can instantiate OView with a custom model query',
      setUp: function(){
        var data = [
            {id: 0, info: 'Test Data 0'},
            {id: 1, info: 'Test Data 1'}
          ]
          , view = function(data){
            return data.info;
          }
          , modelQuery = {id: 0}
          , model
          , retrievedObject;
        this.oview = new OView({
          initialData: data,
          view: view,
          modelQuery: modelQuery
        });
        model = this.oview.model;

        // Not Observed
        retrievedObject = model.get(1);
        retrievedObject.info = 'New Test Data 1';
        model.put(retrievedObject);
        this.rendered1 = this.oview._renderedTemplate;

        // Observed
        retrievedObject = model.get(0);
        retrievedObject.info = 'New Test Data 0';
        model.put(retrievedObject);
        this.rendered0 = this.oview._renderedTemplate;
      },
      runTest: function(){
        doh.assertTrue(this.rendered0 === 'New Test Data 0');
        doh.assertFalse(this.rendered1);
      }
    },
    {
      name: 'Can retrieve object from model',
      setUp: function(){
        var testData = [
            {id: 0, info: 'Test Data 0'},
            {id: 1, info: 'Test Data 1'}
          ]
          , view = function(){}
          , model;
        this.oview = new OView({
          initialData: testData,
          view: view
        });
        model = this.oview.model;
        this.retrievedObject = model.get(1);
      },
      runTest: function(){
        doh.assertTrue(this.retrievedObject);
      }
    }
  ]);
});