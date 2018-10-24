/*
 * @Author: louiebb
 * @Date: 2018-10-23 22:33:02
 * @Last Modified by: louiebb
 * @Last Modified time: 2018-10-24 10:06:53
 */

import Vue from 'vue'
import Vuex from 'vuex'

// 导入模块的store
import cart from './cart'
import account from './account'
import common from './common'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    account,
    cart
  }
})
