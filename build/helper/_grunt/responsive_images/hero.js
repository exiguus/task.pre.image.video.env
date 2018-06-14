module.exports = {
  //
  // hero module
  preview: {
    options: {
      sizes: [{
        name: 'preview',
        width: 114,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/hero',
      dest: '<%= paths.distImages %>/hero',
    }],
  },
  ld: {
    options: {
      sizes: [{
        name: 'ld',
        width: 2048,
        quality: 100,
      }, {
        name: 'ld_x2',
        width: 4096,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/hero',
      dest: '<%= paths.distImages %>/hero',
    }],
  },
  md: {
    options: {
      sizes: [{
        name: 'md',
        width: 1200,
        quality: 100,
      }, {
        name: 'md_x2',
        width: 2048,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/hero',
      dest: '<%= paths.distImages %>/hero',
    }],
  },
  t: {
    options: {
      sizes: [{
        name: 't',
        width: 992,
        quality: 100,
      }, {
        name: 't_x2',
        width: 2048,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/hero',
      dest: '<%= paths.distImages %>/hero',
    }],
  },
  m: {
    options: {
      sizes: [{
        name: 'm',
        width: 768,
        quality: 100,
      }, {
        name: 'm_x2',
        width: 1140,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/hero',
      dest: '<%= paths.distImages %>/hero',
    }],
  },
};
