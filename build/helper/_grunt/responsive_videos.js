// video ffmpeg generation
// see https://github.com/sjwilliams/grunt-responsive-videos
// note:
//    mp4 avcodec is removed because build fail with this option
module.exports = function() {
  const path = require('path');
  const GruntConfigHelper = require('js.node.grunt.config.helper');
  const requireDirectory = path.resolve(__dirname, 'responsive_videos');
  const extendConfigHelper = new GruntConfigHelper(requireDirectory);
  return extendConfigHelper.getTasks();
};
