<template>
  <div id="app">
    <video-player
      source="https://v.suv666.com/test/material/6a51588d802807be0993216537c29859.mp4"
      min-height="14rem"
      >
    </video-player>
    <img src="./assets/logo.png">
    <local-component></local-component>
    <router-view/>
  </div>
</template>

<script>
import VideoPlayer from './components/VideoPlayer'
import HelloWorld from './components/HelloWorld'

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
