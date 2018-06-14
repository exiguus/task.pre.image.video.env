module.exports = {
  options: '<%= options.images.webp %>',
  dist: {
    files: [
      {
        expand: true,
        src: ['**/*.{png,jpg,jpeg}'],
        cwd: '<%= paths.distImages %>',
        dest: '<%= paths.distImages %>/',
      },
    ],
  },
};
