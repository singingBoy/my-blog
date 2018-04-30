<template>
  <div id="app">
    <h1>Test</h1>
    <video-player
      source="https://v.suv666.com/material/d5025707035da6d363afc9d248e28b22.mp4"
      min-height="14rem"
      >
    </video-player>
    <img src="../../assets/logo.png">
    <local-component></local-component>
    <router-view/>
  </div>
</template>

<script>
import VideoPlayer from '../../components/VideoPlayer'
import HelloWorld from '../../components/HelloWorld'

const localComponent = {
  template: '<div>我是局部组件,使用const申明</div>'
}

export default {
  name: 'App',
  components: {VideoPlayer, localComponent, HelloWorld}
}
</script>

<style>
  body{
    margin: 0
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
  }
</style>
