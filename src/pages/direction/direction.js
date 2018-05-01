// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import appStart from '../../init'
import { getUrlParam } from '../../assets/lib/utils'

Vue.config.productionTip = false

const imgUrl = getUrlParam('type') === 'web' ? 'static/web.png' : 'static/java.jpg'
appStart({
  template: `<img style="width: 100%" src="${imgUrl}" />`
})
