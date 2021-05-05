import Vue from 'vue'
import App from './App.vue'

import '@/assets/styles/common_styles.scss'
import '@/assets/styles/normalize.css'
import VueObserveVisibility from 'vue-observe-visibility'
import VueNumber from 'vue-number-animation'
import VueMask from 'v-mask'

Vue.use(VueMask);
Vue.use(VueNumber)
Vue.use(VueObserveVisibility)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
