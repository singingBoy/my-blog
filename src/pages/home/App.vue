<template>
  <div id="app">
    <my-header></my-header>
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
<script src="./app.js"></script>
