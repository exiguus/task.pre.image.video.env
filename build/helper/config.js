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
      // grunt-responsive-videos
      // https://github.com/sjwilliams/grunt-responsive-videos
      // ffmpeg webp
      // https://trac.ffmpeg.org/wiki/Encode/VP9
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
      // ffmpeg mp4
      // https://trac.ffmpeg.org/wiki/Encode/H.264
      mp4: [
          {'-vcodec': 'libx264'},
          {'-pix_fmt': 'yuv420p'},
          {'-q:v': '4'},
          {'-q:a': '100'},
          {'-threads': '0'},
        ],
    },
    images: {
      // grunt-webp
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
      // grunt-image
      // https://www.npmjs.com/package/grunt-image
      image: {
        //
        // simple
        // http://optipng.sourceforge.net/ | https://linux.die.net/man/1/optipng
        optipng: false,
        // https://pngquant.org/ | http://manpages.ubuntu.com/manpages/bionic/man1/pngquant.1.html
        // pngquant: true,
        // https://github.com/google/zopfli | https://github.com/google/zopfli/blob/master/src/zopflipng/zopflipng_bin.cc
        zopflipng: true,
        // https://github.com/imagemin/imagemin-jpeg-recompress
        jpegRecompress: false,
        // https://github.com/mozilla/mozjpeg | https://github.com/mozilla/mozjpeg/blob/master/usage.txt
        // mozjpeg: true,
        // https://github.com/google/guetzli | http://manpages.ubuntu.com/manpages/artful/man1/guetzli.1.html
        guetzli: false,
        // https://www.lcdf.org/gifsicle/ | https://www.lcdf.org/gifsicle/man.html
        // gifsicle: true,
        // https://github.com/svg/svgo
        // svgo: true,
        //
        // advance
        // optipng: [
        //   '-i 1',
        //   '-strip all',
        //   '-fix',
        //   '-o7',
        //   '-force',
        // ],
        pngquant: [
          '--speed=1',
          '--force',
          256,
        ],
        // zopflipng: [
        //   '-y',
        //   '--lossy_8bit',
        //   '--lossy_transparent',
        //   '--strip',
        // ],
        // jpegRecompress: [
        //   '--strip',
        //   '--quality',
        //   'medium',
        //   '--min', 40,
        //   '--max', 80,
        // ],
        mozjpeg: [
          '-optimize',
          '-progressive',
        ],
        // guetzli: [
        //   '--quality',
        //   85,
        // ],
        gifsicle: [
          '--optimize',
        ],
        svgo: [
          '--enable',
          'cleanupIDs',
          '--disable',
          'convertColors',
          'removeMetadata',
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
    // dist folder with optimised files
    dist: 'dist',
    distImages: 'dist/images',
    distVideos: 'dist/videos',
  },
};
