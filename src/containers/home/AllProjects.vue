<template>
  <div class="projects">
    <div class="bg" :style="`background-image: url(${bgUrl})`" />
    <div class="carouselBox">
      <el-carousel :interval="5000" @change="imgChange" arrow="always">
        <el-carousel-item v-for="item in projects" :key="item.id">
          <div :style="`background-image: url(${item.img})`">
            <h3>{{ item.dec }}</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "./index.scss";
</style>
<script src="./allProjects.js"></script>
