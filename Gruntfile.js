/*
 * Gruntfile.js
 */

'use strict';
const config = require('./build/helper/config');
config.options.pkg = require('./package.json');

module.exports = function(grunt) {
  // load only used tasks and add fallbacks for those which cannot be find
  require('jit-grunt')(grunt, {

  });
  // measures the time each task takes
  require('time-grunt')(grunt);

  // Load grunt configurations automatically
  const configs = require('load-grunt-configs')(grunt, config.options);

  // Define the configuration for all the tasks
  grunt.initConfig(configs);

  /*
   * TASKS
   */

  // running task with "grunt"
  const tasksPrepare = ['clean:tmp', 'copy:src'];
  const tasksPrepareImages = ['clean:tmpImages', 'copy:srcImages'];
  const tasksPrepareVideos = ['clean:tmpVideos', 'copy:srcVideos'];
  const tasksCleanupImages = ['clean:distImages'];
  const tasksCleanupVideos = ['clean:distVideos'];
  const tasksConvertVideos = ['responsive_videos'];
  const tasksConvertImages = ['responsive_images', 'webp:dist', 'image:dist'];
  const tasksBuildVideos = ['prepareVideos', 'cleanupVideos', 'convertVideos'];
  const tasksBuildImages = ['prepareImages', 'cleanupImages', 'convertImages'];
  const tasksBuild = ['prepare', 'buildImages', 'buildVideos'];


  // options
  if (configs.options.videos.muted === true) {
    tasksPrepare.push('exec:muteVideos');
    tasksPrepareVideos.push('exec:muteVideos');
  }

  grunt.registerTask('prepare', tasksPrepare);
  grunt.registerTask('prepareImages', tasksPrepareImages);
  grunt.registerTask('prepareVideos', tasksPrepareVideos);
  grunt.registerTask('cleanupImages', tasksCleanupImages);
  grunt.registerTask('cleanupVideos', tasksCleanupVideos);
  grunt.registerTask('convertImages', tasksConvertImages);
  grunt.registerTask('convertVideos', tasksConvertVideos);
  grunt.registerTask('buildImages', tasksBuildImages);
  grunt.registerTask('buildVideos', tasksBuildVideos);
  grunt.registerTask('build', tasksBuild);
  grunt.registerTask('images', 'buildImages');
  grunt.registerTask('videos', 'buildVideos');
  grunt.registerTask('dist', 'build');

  grunt.registerTask('default', 'dist');
};
