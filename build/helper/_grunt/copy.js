module.exports = {
  src: {
    files: [
      {expand: true, src: ['<%= paths.src %>/**'], dest: '<%= paths.tmp %>/'},
    ],
  },
  srcImages: {
    files: [
      {
        expand: true,
        src: ['<%= paths.srcImages %>/**'], dest: '<%= paths.tmp %>/',
      },
    ],
  },
  srcVideos: {
    files: [
      {
        expand: true,
        src: ['<%= paths.srcVideos %>/**'], dest: '<%= paths.tmp %>/',
      },
    ],
  },
};
