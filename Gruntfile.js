module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    jshint: {
      files: ['*.js', 'js/*.js']
    }

  });

  grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ['jshint']);

};
