// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './app/Main.vue'
import router from './router'
import store from './vuex'
import Loader from './plugins/loader'
import Toaster from 'v-toaster'
import money from 'v-money'
import 'assets/stylesheets/app.scss'
import 'font-awesome/css/font-awesome.css'
import 'v-toaster/dist/v-toaster.css'

Vue.use(Loader, store)
Vue.use(Toaster, {timeout: 5000})
Vue.use(money, {precision: 4})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
