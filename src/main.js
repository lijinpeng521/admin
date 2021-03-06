import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
//import store from './store/index.js'
import './assets/css/mormalize.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
new Vue({
  router,//注入路由
  render: h => h(App),
}).$mount('#app')
