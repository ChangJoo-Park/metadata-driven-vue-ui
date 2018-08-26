import Vue from 'vue'
import feather from 'vue-icon'
import Vuebar from 'vuebar'

import App from './App.vue'
import router from './router'
import './assets/device.min.css'

Vue.use(feather, 'v-icon')
Vue.use(Vuebar)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
