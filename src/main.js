/*
 * @Author: louiebb
 * @Date: 2018-10-24 10:10:02
 * @Last Modified by:   louiebb
 * @Last Modified time: 2018-10-24 10:10:02
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 路由
import router from './router'
// 引入vuex整理的模块
import store from './store'

// 导入所有全局组件
import components from './plugins/components.js'
// 重置样式
import 'normalize.css'
// 公共样式
import './style/common.scss'
// px2rem
import 'lib-flexible'

// 数据交互
import axios from 'axios'
// 使用全局插件
Vue.use(components)

Vue.config.productionTip = false
// 常用axios加入原型
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
