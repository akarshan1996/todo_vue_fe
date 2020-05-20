import Vue from "vue";
import App from "./App.vue";

//import 'vue-material/dist/vue-material.min.css'
import "vue-material/dist/vue-material.css";
import "vue-material/dist/theme/default.css";

if (process.env.NODE_ENV === "development") {
}

Vue.config.productionTip = false;
Vue.prototype.$appName = "ToDo";

new Vue({
  beforeCreate: function() {
    console.log("appName: ", this.$appName);
  },
  render: (h) => h(App),
}).$mount("#app");
