import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import storage from '../../utils/storage'
// Vue.prototype.$http = api
Vue.use(VueAxios, axios)
Vue.prototype.$storage = storage

// eslint-disable-next-line new-cap

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
