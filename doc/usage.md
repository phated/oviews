### Usage ###

```javascript
require([ 'template/sample-template', 'OView' ], function ( sampleTemplate, OView ) {

  // Your Initial Data (At minimum, an empty array must be passed in)
  var sampleData = [
    {id: 0, info: 'Sample Data 0'}
  ];

  var cssSelector = '#sample-div'

  // Instatiated a new OView
  var sampleOView = new OView({
    initialData: sampleData,
    view: sampleTemplate,
    selector: cssSelector
  });

  // I like to return the model (store) so including this module can interact directly with the DataStore
  return sampleOView.model;

});
```
