import Vue from 'vue'
import App from './App.vue'

import VTooltip from 'v-tooltip'
import VueCarousel from 'vue-carousel';

Vue.use(VTooltip)

Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

