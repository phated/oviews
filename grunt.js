module.exports = function(grunt) {

  grunt.initConfig({
    lint: {
      files: ['lib/js/*.js']
    },
    min: {
      dist: {
        src: ['lib/js/main.js'],
        dest: './main.js'
      }
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint min');

};