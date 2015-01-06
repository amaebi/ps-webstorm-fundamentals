module.exports = function (grunt) {

    "use strict";

    grunt.initConfig({
        jshint: {
            all: ["./js/**/*.js"],
            options: {unused: true}
        }
    });

    grunt.loadNpmTasks("grunt-contrib-jshint");

    grunt.registerInitTask("default", ["jshint"]);
};