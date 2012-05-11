define([
  'ObservableView',
  'jadeTemplates/jade1',
  'jadeTemplates/jade2',
  'doh'
], function(ObservableView, template1, template2, doh){
  doh.register('Jade Templates', [
    {
      name: 'Playground',
      setUp: function(){
        this.testData = [
          {id: 0, info: 'Test Data 0'},
          {id: 1, info: 'Test Data 1'}
        ];
        window.observableModel = new ObservableView(this.testData, template2, 'ul');
        window.retrievedObject = window.observableModel.store.get(1);
        window.retrievedObject.info = 'New Test Data 1';
        window.observableModel.store.put(window.retrievedObject);
        window.observableModel.store.add({id: 2, info: 'Test Data 2'});
        window.observableModel.store.remove(0);
      },
      runTest: function(){
        var playgroundMessage = 'Available on window: observableModel && retrievedObject';
        console.log(playgroundMessage);
        document.getElementById('playground-message').innerHTML = playgroundMessage;
        doh.assertTrue(true);
      }
    }
  ]);
});