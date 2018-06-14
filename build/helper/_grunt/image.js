module.exports = {
  dist: {
    options: {
      optipng: false,
      pngquant: true,
      zopflipng: true,
      jpegRecompress: false,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
    },
    files: [{
      expand: true,
      cwd: '<%= paths.distImages %>/',
      src: ['**/*.{png,jpg,jpeg,gif,svg}'],
      dest: '<%= paths.distImages %>/',
    }],
  },
};
