import Vue from 'vue'
import App from './App'
import Notifications from 'vue-notification'
import router from './router'
import './registerServiceWorker'


Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')







