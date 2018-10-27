import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Category from '@/components/category'
import Discover from '@/components/discover'
import Cart from '@/components/cart'
import User from '@/components/user'
import GoodDetail from '@/components/GoodDetail'
import Login from '@/components/login'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'H',
    component: Home,
    meta: { keepAlive: false }
  }, {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { keepAlive: false }
  }, {
    path: '/category',
    name: 'category',
    component: Category,
    meta: { keepAlive: true }
  }, {
    path: '/discover',
    name: 'discover',
    component: Discover,
    meta: { keepAlive: true }
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: { keepAlive: true }
  }, {
    path: '/user',
    name: 'user',
    component: User,
    meta: { keepAlive: true },
    children: [{
      path: '/login',
      name: 'login',
      component: Login,
      meta: { keepAlive: true }
    }]
  }, {
    path: '/goodDetail',
    name: 'goodDetail',
    component: GoodDetail,
    meta: { keepAlive: true }
  }]
})
