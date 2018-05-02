<template>
  <div class="hello">
    <el-carousel :interval="4000" type="card" height="230px">
      <el-carousel-item v-for="item in projects" :key="item.id">
        <div :style="`background-image: url(${item.img})`">
          <h3>{{ item.dec }}</h3>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script src="./allProjects.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-carousel__item > div {
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-content: center;
    height: 100%;
    position: relative;
  }
  .el-carousel__item h3 {
    color: #FFFFFF;
    font-size: 12px;
    margin: 0;
    padding: 10px;
    width: 70%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    word-break: break-word;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    letter-spacing: 1px;
    text-shadow: 5px 1px 15px #ddd;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
