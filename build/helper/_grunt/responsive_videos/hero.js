module.exports = {
  ld: {
    options: {
      customIn: ['-interlace', 'line'],
      encodes: [{
        webm: '<%= options.videos.webm %>',
        mp4: '<%= options.videos.mp4 %>',
      }],
      sizes: [{
        name: 'ld',
        width: 1600,
        poster: false,
      }],
    },
    files: [{
      expand: true,
      src: ['**.mp4'],
      cwd: '<%= paths.tmpVideos %>/hero',
      dest: '<%= paths.distVideos %>/hero',
    }],
  },
  md: {
    options: {
      customIn: ['-interlace', 'line'],
      encodes: [{
        webm: '<%= options.videos.webm %>',
        mp4: '<%= options.videos.mp4 %>',
      }],
      sizes: [{
        name: 'md',
        width: 1200,
        poster: false,
      }],
    },
    files: [{
      expand: true,
      src: ['**.mp4'],
      cwd: '<%= paths.tmpVideos %>/hero',
      dest: '<%= paths.distVideos %>/hero',
    }],
  },
  t: {
    options: {
      customIn: ['-interlace', 'line'],
      encodes: [{
        webm: '<%= options.videos.webm %>',
        mp4: '<%= options.videos.mp4 %>',
      }],
      sizes: [{
        name: 't',
        width: 992,
        poster: false,
      }],
    },
    files: [{
      expand: true,
      src: ['**.mp4'],
      cwd: '<%= paths.tmpVideos %>/hero',
      dest: '<%= paths.distVideos %>/hero',
    }],
  },
  m: {
    options: {
      customIn: ['-interlace', 'line'],
      encodes: [{
        webm: '<%= options.videos.webm %>',
        mp4: '<%= options.videos.mp4 %>',
      }],
      sizes: [{
        name: 'm',
        width: 768,
        poster: false,
      }],
    },
    files: [{
      expand: true,
      src: ['**.mp4'],
      cwd: '<%= paths.tmpVideos %>/hero',
      dest: '<%= paths.distVideos %>/hero',
    }],
  },
};
