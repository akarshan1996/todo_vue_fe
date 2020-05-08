import Vue from 'vue'
import App from './App.vue'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.prototype.$appName = 'ToDo'

new Vue({
  beforeCreate: function () {
    console.log(this.$appName)
  },
  render: h => h(App),
}).$mount('#app')
