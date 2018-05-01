// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App.vue'
import router from '../../router/home-router'
import appStart from '../../init'

appStart({
  components: {App},
  router,
  template: '<App/>'
})
