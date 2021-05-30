import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from './components/common/toast/toast'
import fastClick from 'fastclick'

import './assets/js/flexible'

Vue.config.productionTip = false

Vue.use(toast)

fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
