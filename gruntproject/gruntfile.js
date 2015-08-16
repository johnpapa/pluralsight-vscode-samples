module.exports = function (grunt) {

	grunt.initConfig({
		jshint: {
			files: ['gruntfile.js', 'src/**/*.js']
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('grunt-hint', ['jshint']);

};