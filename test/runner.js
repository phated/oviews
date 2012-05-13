require({
  baseUrl: './',
  packages: [
    { name: 'dojo', location: 'vendor/dojo' },
    { name: 'doh', location: 'vendor/util/doh' },
    { name: 'jade', location: 'vendor/jade', main: 'runtime-amd' },
    { name: 'jadeTemplates', location: 'views/jade' },
    { name: 'OView', location: '../lib/js' }
  ]
}, [
  'doh',
  'test/basic-oview-behavior',
  'test/jade-templates'
], function(doh){
  doh.run();
});