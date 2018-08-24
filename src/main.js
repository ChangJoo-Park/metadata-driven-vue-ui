import Vue from 'vue'
import feather from 'vue-icon'

import App from './App.vue'
import router from './router'

Vue.use(feather, 'v-icon')

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
