module.exports = {
  //
  // teaser module with static height
  preview: {
    options: {
      sizes: [{
        name: 'preview',
        height: 120,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/teaser',
      dest: '<%= paths.distImages %>/teaser',
    }],
  },
  ld: {
    options: {
      sizes: [{
        name: 'ld',
        height: 640,
        quality: 100,
      }, {
        name: 'ld_x2',
        height: 1280,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/teaser',
      dest: '<%= paths.distImages %>/teaser',
    }],
  },
  md: {
    options: {
      sizes: [{
        name: 'md',
        height: 640,
        quality: 100,
      }, {
        name: 'md_x2',
        height: 1280,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/teaser',
      dest: '<%= paths.distImages %>/teaser',
    }],
  },
  t: {
    options: {
      sizes: [{
        name: 't',
        height: 480,
        quality: 100,
      }, {
        name: 't_x2',
        height: 960,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/teaser',
      dest: '<%= paths.distImages %>/teaser',
    }],
  },
  m: {
    options: {
      sizes: [{
        name: 'm',
        height: 360,
        quality: 100,
      }, {
        name: 'm_x2',
        height: 760,
        quality: 100,
      }],
    },
    files: [{
      expand: true,
      src: ['**.jpg'],
      cwd: '<%= paths.tmpImages %>/teaser',
      dest: '<%= paths.distImages %>/teaser',
    }],
  },
};
