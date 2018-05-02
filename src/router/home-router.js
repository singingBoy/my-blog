import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/*
* vue router : https://router.vuejs.org/zh-cn/essentials/getting-started.html
*
* 1、配置mode，设置url是hash模式还是history模式
* */
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'AllProjects',
      component: function (resolve) {
        require([`@/containers/home/AllProjects.vue`], resolve)
      }
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: function (resolve) {
        require([`@/containers/HelloWorld.vue`], resolve)
      }
    },
    {
      path: '*',
      component: function (resolve) {
        require([`@/containers/NoFound.vue`], resolve)
      }
    }
  ]
})
