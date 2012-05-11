module.exports = function(grunt) {

  grunt.initConfig({
    min: {
      dist: {
        src: ['lib/js/main.js'],
        dest: './main.js'
      }
    }
  });

};