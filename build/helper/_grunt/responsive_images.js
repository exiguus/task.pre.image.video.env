module.exports = function() {
  const path = require('path');
  const GruntConfigHelper = require('js.node.grunt.config.helper');
  const requireDirectory = path.resolve(__dirname, 'responsive_images');
  const extendConfigHelper = new GruntConfigHelper(requireDirectory);
  return extendConfigHelper.getTasks();
};
