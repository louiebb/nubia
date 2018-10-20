import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Category from '@/components/category'
import Discover from '@/components/discover'
import Cart from '@/components/cart'
import User from '@/components/user'
import Login from '@/components/Login'

Vue.use(Router)
export default new Router({
  routes: [{
    path: '/',
    name: 'H',
    component: Home
  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/category',
    name: 'category',
    component: Category
  }, {
    path: '/discover',
    name: 'discover',
    component: Discover
  }, {
    path: '/cart',
    name: 'cart',
    component: Cart
  }, {
    path: '/user',
    name: 'user',
    component: User,
    children: [{
      path: '/login',
      name: 'login',
      component: Login
    }]
  }]
})
