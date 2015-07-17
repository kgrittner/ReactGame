/**
 * Created by KarlFast on 7/16/2015.
 */



var path = require('path');
module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    });


    // This will load the config for grunt so we don't have to do grunt.load(module) for every dependency.
    // Doing it this way will also make sure that we've added our depencies to our package file.
    require('load-grunt-config')(grunt, {
        configPath: path.join(__dirname, 'tasks'),
        loadGruntTasks: {
            config: require('./package.json'),
            pattern: 'grunt-*',
        }
    });

    grunt.registerTask('default', ['s']);

    grunt.registerTask('cn', ['connect:app']);
    grunt.registerTask('w', ['watch']);
    grunt.registerTask('s', ['cn', 'w']);           // Connect & Watch all



};