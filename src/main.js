// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 导入所有全局组件
import components from './plugins/components.js'
// 重置样式
import 'normalize.css'
import './style/common.scss'
// px2rem
import 'lib-flexible'

// 数据交互
import axios from 'axios'
Vue.use(components)

Vue.config.productionTip = false
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
