import Vue from 'vue'
import App from './App.vue'
import store from './store'
import '@/assets/styles/common_styles.scss'
import '@/assets/styles/normalize.css'
import VueObserveVisibility from 'vue-observe-visibility'
import VueNumber from 'vue-number-animation'


Vue.use(VueNumber)
Vue.use(VueObserveVisibility)


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
