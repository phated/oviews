define([
  'ObservableView',
  'jadeTemplates/jade1',
  'jadeTemplates/jade2',
  'doh'
], function(ObservableView, template1, template2, doh){
  doh.register('Jade Templates', [
    {
      name: 'Can instantiate ObservableView with a Model and View',
      setUp: function(){
        this.observableModel = new ObservableView([], template1);
        this.hasDojoObservableProps =
          this.observableModel.store.hasOwnProperty('add') &&
          this.observableModel.store.hasOwnProperty('put') &&
          this.observableModel.store.hasOwnProperty('notify') &&
          this.observableModel.store.hasOwnProperty('query') &&
          this.observableModel.store.hasOwnProperty('remove');
      },
      runTest: function(){
        doh.assertTrue(typeof this.observableModel === 'object');
        doh.assertTrue(this.hasDojoObservableProps);
      }
    },
    {
      name: 'Can Re-render view when Model is updated',
      setUp: function(){
        this.testData = [
          {id: 0, info: 'Test Data 0'},
          {id: 1, info: 'Test Data 1'}
        ];
        this.observableModel = new ObservableView(this.testData, template1);
        this.retrievedObject = this.observableModel.store.get(1);
        this.retrievedObject.info = 'New Test Data 1';
        this.observableModel.store.put(this.retrievedObject);
      },
      runTest: function(){
        doh.assertTrue(this.observableModel.output === '<h1>Hello, World</h1>');
      }
    },
    {
      name: 'Can update output when model is updated',
      setUp: function(){
        this.testData = [
          {id: 0, info: 'Test Data 0'},
          {id: 1, info: 'Test Data 1'}
        ];
        this.observableModel = new ObservableView(this.testData, template2);
        this.retrievedObject = this.observableModel.store.get(1);
        this.retrievedObject.info = 'New Test Data 1';
        this.observableModel.store.put(this.retrievedObject);
      },
      runTest: function(){
        doh.assertTrue(this.observableModel.output === '<li>New Test Data 1</li>');
      }
    }
  ]);
});