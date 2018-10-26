import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Category from '@/components/category'
import Discover from '@/components/discover'
import Cart from '@/components/cart'
import User from '@/components/user'
import GoodDetail from '@/components/GoodDetail'
import Login from '@/components/login'
import Register from '@/components/register'
import Accessory from '@/components/accessory'



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
  },{
    path: '/user',
    name: 'user',
    component: User
  },{
      path: '/login',
      name: 'login',
      component: Login
  },{
      path: '/register',
      name: 'register',
      component: Register
  },{
    path: '/accessory',
    name: 'accessory',
    component: Accessory
  }]
})
