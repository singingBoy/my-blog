import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/containers/HelloWorld'
import NoFound from '@/containers/NoFound'
import AllProjects from '@/containers/home/AllProjects.vue'

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
      component: AllProjects
    },
    {
      path: '/hello',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      component: NoFound
    }
  ]
})
