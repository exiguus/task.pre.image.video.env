[![tests][tests]][tests-url]

# task.pre.image.video.env [![task.pre.image.video.env][task.pre.image.video.env]][task.pre.image.video.env-url]

Task-Runner Environment to convert and optimise images and videos.

The Idea is to pre render content images and videos as assets for static site generator Environments like Jekyll, Hugo, Next, Gatsby or a Application Frameworks like Vue.js, Angular or React. The Environment is prepared for CI/CD.

With the default options JPEG and PNG content Images are reduced
~90% in size.
If WEBP is used with JPEG as fallback in picture elements, content Images are reduced ~30% again in size for ~60% of all users.

If WEBM is used with MP4 as fallback in video elements, content Videos may be reduced 4-20 times in size for ~60% of all users.

This is relevant because the load time of webpages has a significant connection to requested file sizes and UX.
On content driven webpages images and videos may cause more then 60% of the page size itself.
Therefor its important to reduce request sizes beside the use of modern load technologies especially on mobile devices and slow networks.

## Description

![task.pre.image.video.env][task.pre.image.video.env.gif]

### Images

Convert JPEG and PNG Images for each breakpoint (media-query):

* Size
  * width or height
  * quality
* Retina  
* Optimise JPEG and PNG

Generate an optimised WEBP Image for each breakpoint (media-query) from JPEG or PNG.

### Videos

Convert MP4 Videos for each breakpoint (media-query):

* Size
* Optimise

Generate an optimised WEBM / MP4 (muted) Video for each breakpoint (media-query) from MP4.

## Options

The Task Environment is configurable in [`build/_grunt/config.js`](https://github.com/exiguus/task.pre.image.video.env/blob/master/build/helper/config.js) with the following options:

```javascript
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
      // ffmpeg webm
      // https://trac.ffmpeg.org/wiki/Encode/VP9
      webm: [
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


```

## Example

![task.pre.image.video.env][task.pre.image.video.env.png]

Find generated examples in `dist/` folder.

### Renderings

#### Images

Images are rendered by default in four breakpoints (like in bootstrap3):

* large-desktop (`ld`)
* medium-desktop (`md`)
* tablet (`t`)
* mobile (`m`)

in JPEG / PNG and WEBP x1 and x2.

```plain
[image-name]-[breakpoint-short-name](?_x2).(webp|jpg|png)
```

The following example exist:

* gallery
  * preview: `4:3`, `x2` and `120px` width
  * ld: `16:9`, `x2` and `4096px` width
  * md: `16:9`, `x2` and `2048px` width
  * t: `4:3`, `x2` and `2048px` width
  * m `9:16`, `x2` and `1140px` width
* hero
  * preview: `16:9`, `x2` and `120px` width
  * ld: `16:9`, `x2` and `4096px` width
  * md: `16:9`, `x2` and `2048px` width
  * t: `16:9`, `x2` and `2048px` width
  * m: `16:9`, `x2` and `1140px` width
* logo
  * `custom`, `x2` and `394px` width
* teaser
  * preview: `16:9`, `x2` and `120px` width
  * ld: `16:9`, `x2` and `4096px` width
  * md: `16:9`, `x2` and `2048px` width
  * t: `16:9`, `x2` and `2048px` width
  * m: `16:9`, `x2` and `1140px` width

##### WEBP / PNG picture element

Picture Element with WEBP and PNG fallback.

```html
<picture>
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/logo/logo-header.webp 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/logo/logo-header_x2.webp 2x" type="image/webp">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/logo/logo-header.png 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/logo/logo-header_x2.png 2x" type="image/png">
  <img alt="logo" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
```

##### WEBP / JPEG picture element

Picture Element with WEBP and JPEG fallback. Support Retina and 4 Breakpoints.

```html
<picture>
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master//dist/images/hero/teapott-ld.webp 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-ld_x2.webp 2x" media="(min-width: 1200px)" type="image/webp">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-md.webp 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-md_x2.webp 2x" media="(min-width: 992px) and (max-width: 1199px)" type="image/webp">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-t.webp 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-t_x2.webp 2x" media="(min-width: 768px) and (max-width: 991px)" type="image/webp">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-m.webp 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-m_x2.webp 2x" media="(max-width: 767px)" type="image/webp">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-ld.jpg 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-ld_x2.jpg 2x" media="(min-width: 1200px)" type="image/jpeg">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-md.jpg 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-md_x2.jpg 2x" media="(min-width: 992px) and (max-width: 1199px)" type="image/jpeg">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-t.jpg 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-t_x2.jpg 2x" media="(min-width: 768px) and (max-width: 991px)" type="image/jpeg">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-m.jpg 1x, https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/images/hero/teapott-m_x2.jpg 2x" media="(max-width: 767px)" type="image/jpeg">
  <img alt="Hero Image" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==">
</picture>
```

#### Videos

Images are rendered by default in four breakpoints (like in bootstrap3):

* large-desktop (`ld`)
* medium-desktop (`md`)
* tablet (`t`)
* mobile (`m`)

in MP4 and WEBM x1.

```plain
[video-name]-[breakpoint-short-name].(webm|mp4)
```

The following example exist:

* hero
  * ld: `16:9`, `x1` and `1600px` width
  * md: `16:9`, `x1` and `1200px` width
  * t: `16:9`, `x1` and `992px` width
  * m: `16:9`, `x1` and `768px` width

##### WEBM / MP4 video element

Video Element with WEBM and MP4 fallback. (Because `srcset` is not supported in `source` elements, you may use JavaScript to switch `srcset` to `src` in the current Breakpoint).

```html
<video autoplay="autoplay" preload="auto" loop="loop" muted="muted">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-ld.webm" media="(min-width: 1200px)" type="video/webm">
  <source src="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-md.webm" media="(min-width: 992px) and (max-width: 1199px)" type="video/webm">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-t.webm" media="(min-width: 768px) and (max-width: 991px)" type="video/webm">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-m.webm" media="(max-width: 767px)" type="video/webm">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-ld.mp4" media="(min-width: 1200px)" type="video/mp4">
  <source src="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-md.mp4" media="(min-width: 992px) and (max-width: 1199px)" type="video/mp4">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-t.mp4" media="(min-width: 768px) and (max-width: 991px)" type="video/mp4">
  <source srcset="https://raw.githubusercontent.com/exiguus/task.pre.image.video.env/master/dist/videos/hero/traffic-muted-m.mp4" media="(max-width: 767px)" type="video/mp4">
</video>
```

## Deep Development Dependencies

System Libs and Software to install

### Install with brew on MAC OS

```bash
# install general dependencies
brew install icu4c
brew install pkg-config
# install image dependencies
brew install GraphicsMagick
brew install webp
# install video dependencies
brew install ffmpeg --with-libvorbis --with-nonfree --with-gpl --with-libvpx --with-pthreads --with-libx264 --with-libfaac --with-theora --with-libogg
# install node js
brew install node

```

### Install with apt-get on (Ubuntu/Trusty) Linux

See also `.travis.yml`.

```bash
# install general dependencies
sudo apt-get install -y cmake
sudo apt-get install -y libicu-dev
sudo apt-get install -y libz-dev
sudo apt-get install -y pkg-config
# install image dependencies
sudo apt-get install -y graphicsmagick
sudo apt-get install -y webp
sudo apt-get install -y nasm
# install video dependencies
sudo add-apt-repository ppa:mc3man/trusty-media -y
sudo apt-get update -q
sudo apt-get install -y ffmpeg
sudo apt-get install -y gstreamer0.10-ffmpeg
# install node.js
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## run

```bash
npm start
```

## install

```bash
npm install
```

## build

```bash
npm run build
```

### build images

```bash
npm run build-images
```

### build videos

```bash
npm run build-videos
```

## Used Plugins

Used Grunt plugins to generate, convert, crop and optimise images and videos:

* [grunt-image](https://www.npmjs.com/package/grunt-image) optimise PNG, JPEG, GIF and SVG images with pngquant, zopflipng, mozjpeg, gifsicle and svgo [`_grunt/images.js`](https://github.com/exiguus/task.pre.image.video.env/blob/master/build/helper/_grunt/image.js)
* [grunt-responsive-images](https://www.npmjs.com/package/grunt-responsive-images) crop PNG and JPEG images [`_grunt/responsive_images/`](https://github.com/exiguus/task.pre.image.video.env/blob/master/build/helper/_grunt/responsive_images/)
* [grunt-responsive-videos](https://www.npmjs.com/package/grunt-responsive-videos) crop and optimise MP4 and WEBM videos [`_grunt/responsive_videos/`](https://github.com/exiguus/task.pre.image.video.env/blob/master/build/helper/_grunt/responsive_videos/)
* [grunt-webp](https://www.npmjs.com/package/grunt-webp) generate and optimise WEBP images [`_grunt/webp.js`](https://github.com/exiguus/task.pre.image.video.env/blob/master/build/helper/_grunt/webp.js)


[task.pre.image.video.env]:
https://img.shields.io/badge/task.pre-image.video-blue.svg
[task.pre.image.video.env-url]:
https://exiguus.github.com/task.pre.image.video.env/

[tests]: https://img.shields.io/travis/exiguus/task.pre.image.video.env/master.svg
[tests-url]: https://travis-ci.org/exiguus/task.pre.image.video.env

[task.pre.image.video.env.gif]: https://exiguus.github.io/task.pre.image.video.env/task.pre.image.video.env.gif

[task.pre.image.video.env.png]: https://exiguus.github.io/task.pre.image.video.env/task.pre.image.video.env.png
