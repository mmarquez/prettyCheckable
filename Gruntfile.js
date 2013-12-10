/* global module:true */
module.exports = function (grunt) {
  'use strict';

  grunt.initConfig({

    pkg : grunt.file.readJSON( 'package.json' ),

    uglify : {

      options : {
        mangle : true
      },

      target : {
        files : {
          'dist/prettyCheckable.min.js' : ['dev/prettyCheckable.js']
        }
      }
    },

    less : {
      development: {
        options: {
          paths: ["dist"]
        },
        files: {
          "dist/prettyCheckable.min.css": "dev/prettyCheckable.less"
        }
      },
      production: {
        options: {
          paths: ["dist"],
          cleancss: true
        },
        files: {
          "dist/prettyCheckable.min.css": "dev/prettyCheckable.less"
        }
      }
    },

    watch : {
      dist : {
        files : [
          'dev/prettyCheckable.js',
          'dev/prettyCheckable.scss'
        ],

        tasks : [ 'default' ]
      }
    },

  });

  // Main tasks
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', [
    'compass',
    'uglify'
  ]);

  grunt.registerTask('w', ['watch']);

};
