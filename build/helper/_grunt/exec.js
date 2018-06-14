module.exports = {
  muteVideos: {
    cmd: "cd <%= paths.tmpVideos %>; for v in ./**/*; do ffmpeg -i $v -vcodec copy -an $(echo $v | sed 's/.mp4$/-muted&/'); done", // eslint-disable-line max-len, quotes
  },
};
