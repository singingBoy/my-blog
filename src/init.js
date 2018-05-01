import Vue from 'vue'
import Router from 'vue-router'
import GlobalComponents from './components'

Vue.config.productionTip = false
Vue.use(Router)

// 公用组件
Vue.use(GlobalComponents)

export default ({components, router, template, el = '#app'}) => {
  return new Vue({
    el,
    router,
    components,
    template
  })
}
