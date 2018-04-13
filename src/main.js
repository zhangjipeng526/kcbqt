import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import vuer from 'vue-resource'

Vue.use(ElementUI)
Vue.use(vuer)
Vue.config.productionTip = false


new Vue({
  render: h => h(App)
}).$mount('#app')
