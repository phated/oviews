require({
  baseUrl: './js',
  packages: [
    { name: 'dojo', location: '../../../test/vendor/dojo' },
    { name: 'jade', location: '../../../test/vendor/jade', main: 'runtime-amd.min' },
    { name: 'templates', location: '../../assets/templates' },
    { name: 'OView', location: '../../../lib/js' },
    { name: 'event', location: './events' },
    { name: 'app', location: '.' }
  ]
}, ['app']);