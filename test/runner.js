require({
  baseUrl: './',
  packages: [
    { name: 'dojo', location: 'vendor/dojo' },
    { name: 'doh', location: 'vendor/util/doh' },
    { name: 'jade', location: 'views/js', main: 'jade' },
    { name: 'templates', location: 'views/js' },
    { name: 'OView', location: '../lib', main: 'OViews' }
  ]
}, [
  'doh',
  'test/basic-oview-behavior',
  'test/jade-templates'
], function(doh){
  doh.run();
});