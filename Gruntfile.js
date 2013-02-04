/*global module:false*/
module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Project configuration.
  grunt.initConfig({
    jasmine: {
      test: {
        src: 'change-calculator.js',
        options: {
          specs: 'spec.js'
        }
      }
    },
    watch: {
      files: [
        'change-calculator.js',
        'spec.js'
      ],
      tasks: ['jasmine']
    }
  });

  grunt.registerTask('default', 'jasmine:test');
};