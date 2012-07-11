define([
  'OView',
  'templates/jade1',
  'templates/jade2',
  'doh'
], function(OView, template1, template2, doh){
  doh.register('OViews with Jade Templates', [
    {
      name: 'Can instantiate OView with a Model and Jade View',
      setUp: function(){
        var data = []
          , model;
        this.oview = new OView({
          initialData: data,
          view: template1
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
      name: 'Can Re-render view when Model is updated',
      setUp: function(){
        var testData = [
            {id: 0, info: 'Test Data 0'},
            {id: 1, info: 'Test Data 1'}
          ]
          , model
          , retrievedObject;
        this.oview = new OView({
          initialData: testData,
          view: template1
        });
        model = this.oview.model;
        retrievedObject = model.get(1);
        retrievedObject.info = 'New Test Data 1';
        model.put(retrievedObject);
      },
      runTest: function(){
        doh.assertTrue(this.oview._renderedTemplate === '<h1>Hello, World</h1>');
      }
    },
    {
      name: 'Can update output when model is updated',
      setUp: function(){
        var testData = [
            {id: 0, info: 'Test Data 0'},
            {id: 1, info: 'Test Data 1'}
          ]
          , model
          , retrievedObject;
        this.oview = new OView({
          initialData: testData,
          view: template2
        });
        model = this.oview.model;
        retrievedObject = model.get(1);
        retrievedObject.info = 'New Test Data 1';
        model.put(retrievedObject);
      },
      runTest: function(){
        doh.assertTrue(this.oview._renderedTemplate === '<li>New Test Data 1</li>');
      }
    }
  ]);
});