module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        mkdir: {
            all: {
                options: {
                    mode: 0700,
                    create: ['target']
                }
            }
        },

        concat: {
            js: {
                src: ['app/modules/*.js'],
                dest: 'target/js/concat.js'
            },

            css: {
                src: 'app/styles/*.css',
                dest: 'target/css/concat.css'
            }
        },

        uglify : {
            js: {
                files: {
                    'target/js/concat.min.js' : [ 'target/js/concat.js' ]
                }
            }
        },

        cssmin: {
            css: {
                src: 'target/css/concat.css',
                dest: 'target/css/concat.min.css'
            }
        }
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-vulcanize');
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-css');

    grunt.registerTask('default', ['mkdir', 'concat', 'uglify', 'cssmin']);

};