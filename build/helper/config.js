/**
 * Configuration file
 */
let config = module.exports;

config.options = {
  config: {
    // in this directory you can find your grunt config tasks
    src: [
      'build/helper/_grunt/*.js',
    ],
  },
  options: {
    videos: {
      muted: true,
      webp: [
        {'-vcodec': 'libvpx'},
        {'-acodec': 'libvorbis'},
        {'-q:a': '100'},
        {'-quality': 'good'},
        {'-cpu-used': '0'},
        {'-b:v': '500k'},
        {'-qmax': '42'},
        {'-maxrate': '500k'},
        {'-bufsize': '1000k'},
        {'-threads': '0'},
      ],
    mp4: [
      {'-vcodec': 'libx264'},
      {'-pix_fmt': 'yuv420p'},
      {'-q:v': '4'},
      {'-q:a': '100'},
      {'-threads': '0'},
      ],
    },
    images: {
      // https://github.com/somerandomdude/grunt-webp
      // https://github.com/yuanyan/node-webp-bin
      // important optimize values are:
      //  preset (default, photo, picture, drawing, icon, text)
      //  sns (around 75)
      //  filterStrength (normaly 20-30)
      // compressionMethod (5 or 6)
      webp: {
        // binpath: require('webp-bin').path,
        // preset: 'picture',
        // verbose: false,
        quality: 80,
        // alphaQuality: 80,
        compressionMethod: 6,
        // segments: 4,
        // psnr: 42,
        // sns: 75,
        // filterStrength: 20,
        // filterSharpness: 4,
        // simpleFilter: true,
        // partitionLimit: 50,
        // analysisPass: 10,
        // multiThreading: true,
        // lowMemory: false,
        // alphaMethod: 0,
        // alphaFilter: 'best',
        // alphaCleanup: true,
        // noAlpha: false,
        // lossless: false
      },
      imagemin: {
        progressive: true,
        optimizationLevel: 6,
        svgoPlugins: [
          {removeViewBox: false},
        ],
      },
    },
  },
  paths: {
    // src folder
    src: 'src',
    srcImages: 'src/images',
    srcVideos: 'src/videos',
    // tmp folder
    tmp: 'tmp',
    tmpImages: 'tmp/src/images',
    tmpVideos: 'tmp/src/videos',
    // dist folder with optimized files
    dist: 'dist',
    distImages: 'dist/images',
    distVideos: 'dist/videos',
  },
};
