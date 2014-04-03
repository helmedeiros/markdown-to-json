module.exports = function(grunt) {
  'use strict';

  var srcScript = 'src/tableconverter.js';

  grunt.initConfig({

    jshint: {
      files: [srcScript]
    },

    uglify: {
      build: {
        files: {
          'src/default.min.js': srcScript
        }
      }
    }

  });

  [
    'grunt-contrib-jshint',
    'grunt-contrib-uglify'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['jshint']);
  grunt.registerTask('minify', ['uglify']);

};