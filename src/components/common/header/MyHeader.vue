<template>
  <header class="flex-mid my-header">
    <div class="header-left flex-mid">
      <a class="header-log" title="Logo">
        <img src="../../../assets/images/blog.ps.png"/>
      </a>
      <ul class="flex-mid">
        <li class="map">
          <a class="flex-mid">
            <svg-icon icon-style="fill:orange" icon-name="icon-article" />
            文章分类
          </a>
          <div>
            <i></i>
            <a href="">React</a>
            <a href="">Vue</a>
            <a href="">HTML5、CSS3</a>
            <a href="">Node</a>
            <a href="">Canvas</a>
            <a href="">more...</a>
          </div>
        </li>
        <li class="map">
          <a class="flex-mid">
            <svg-icon icon-style="width:15px;height:15px" icon-name="icon-shizhanxunlian"/>
            实战
          </a>
          <div style="left: -30px">
            <i></i>
            <a href="">React实战</a>
            <a href="">Vue实战</a>
            <a href="">Canvas实战</a>
            <a href="">H5实战</a>
            <a href="">more...</a>
          </div>
        </li>
        <li class="map">
          <a class="flex-mid">
            <svg-icon icon-style="width:15px;height:15px" icon-name="icon-luxian"/>
            攻略路线
          </a>
          <div>
            <i></i>
            <a target="_blank" href="/direction.html?type=web">前端路线</a>
            <a target="_blank" href="/direction.html?type=java">后端路线</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="header-right flex-mid">
      <div class="header-search flex-mid">
        <div class="header-search-inputDiv">
          <input placeholder="搜索" autofocus v-model="keywords"/>
        </div>
        <span class="search-title" @click="onSearch">搜索</span>
      </div>
      <ul class="flex-mid">
        <li class="map">
          <a class="flex-mid">
            <svg-icon icon-style="width:15px;height:15px;fill:#000" icon-name="icon-mobile"/>
            D-App
          </a>
        </li>
        <li class="map">
          <a href="">我</a>
          <div>
            <i></i>
            个人信息
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>
<style scoped lang="scss">
  @import "./header";
</style>
<script src="./header.js"></script>
