module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['*.js', 'routes/*.js', 'bin/*.js', 'public/javascripts/**/*.js']
    },

    watch: {
      options: {
        livereload: false
      },

      scripts: {
        files: ['*.js', 'routes/*.js', 'bin/*.js', 'public/javascripts/**/*.js'],
        tasks: ['jshint'],
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', ['watch']);
};
