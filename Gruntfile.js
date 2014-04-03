module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({

    jshint: {
      files: ['src/tableconverter.js']
    }

  });

  ['grunt-contrib-jshint'].forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['jshint']);

};