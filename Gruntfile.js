module.exports = function(grunt) {

  'use strict';

  var srcScript = 'src/tableconverter.js';

  grunt.initConfig({

    jshint: {
      files: [srcScript]
    },

    qunit: {
      all: ['test/runner.html']
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
    'grunt-contrib-uglify',
    'grunt-contrib-qunit'
  ].forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('minify', ['uglify']);
  grunt.registerTask('default', ['jshint', 'qunit', 'uglify']);
};