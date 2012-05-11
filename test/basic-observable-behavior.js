define([
  'ObservableView',
  'doh'
], function(ObservableView, doh){
  doh.register('Basic Observable Behavior', [
    {
      name: 'Can instantiate ObservableView with empty Model and View',
      setUp: function(){
        this.observableModel = new ObservableView([], function(){});
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
      name: 'Can retrieve object from model',
      setUp: function(){
        this.testData = [
          {id: 0, info: 'Test Data 0'},
          {id: 1, info: 'Test Data 1'}
        ];
        this.observableModel = new ObservableView(this.testData, function(){});
        this.retrievedObject = this.observableModel.store.get(1);
      },
      runTest: function(){
        doh.assertTrue(this.retrievedObject === this.testData[1]);
      }
    }
  ]);
});