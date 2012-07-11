require({
  baseUrl: './js',
  packages: [
    { name: 'dojo', location: '../../../test/vendor/dojo' },
    { name: 'jade', location: '../../assets/templates', main: 'jade' },
    { name: 'templates', location: '../../assets/templates' },
    { name: 'OView', location: '../../../lib/', main: 'OViews' },
    { name: 'event', location: './events' },
    { name: 'app', location: '.' }
  ]
}, ['app']);