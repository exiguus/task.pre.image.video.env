module.exports = {
  dist: {
    options: '<%= options.images.imagemin %>',
    files: [{
      expand: true,
      cwd: '<%= paths.distImages %>/',
      src: ['**/*.{png,jpg,jpeg,gif,svg}'],
      dest: '<%= paths.distImages %>/',
    }],
  },
};
