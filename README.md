OViews
========

Views that observe your model for changes and render accordingly.

This project depends on Dojo being included in the project and named 'dojo' in your packages.

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

### Building ###

Building requires Grunt.js be installed

If you are using NPM, install the them with

```
npm install
```

The build process generates a minified file named `main.js` in the root of the project.
The reason for this is that RequireJS and the Dojo Loader look for `main.js` unless otherwise specified.
This is mainly for cloning this repo directly and not using CPM.

### Change Log ###

2012 05 10 - **Initial OViews Commit - v0.1.0**

* Basic implementation
* Some test coverage
* Simple List Example to demonstrate usage
* Gruntfile for build process (remove build)
* Jade templates working

2012 02 19 - **Modified For My Use**

* Tweak commonjs-package-template to better suit my needs

### License ###
The MIT License

Copyright (c) 2012 Blaine Bublitz <blaine@iceddev.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
