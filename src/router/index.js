import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/front/Home'
import Login from '@/components/back/Login'
import Dash from '@/components/back/Dashboard'
import Edit from '@/components/back/Edit'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    },
    {
      path: '/dashboard',
      name: "back",
      component: Dash
    },
    {
      path: '/edit',
      name: "back",
      component: Edit
    }
  ]
})
