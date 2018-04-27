<!--
  微信安卓特性：
    安卓端点击播放自动全屏 x5-video-player-type="h5"
    播放器全屏方向控制    x5-video-orientation="landscape"
-->
<template>
  <div id="videoBox">
    <video
      class="videoBg"
      id="videoPlayer"
      controls
      x5-video-player-fullscreen="true"
      webkit-playsinline="true"
      playsinline="true"
      preload="auto"
      style="width: 100%;height: 100%"
    >
      <source
        :src="source"
        type="video/mp4"
      />
    </video>
  </div>
</template>
<script src="./video.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .videoBg {
    background: #000;
  }
</style>
