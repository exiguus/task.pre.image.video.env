module.exports = {
  //
  // logos
  header: {
    options: {
      // customIn: ['-interlace', 'line'],
      sizes: [{
        name: 'header',
        width: 197,
        quality: 100,
      }, {
        name: 'header_x2',
        width: 394,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.png'],
      cwd: '<%= paths.tmpImages %>/logo',
      dest: '<%= paths.distImages %>/logo',
    }],
  },
};
