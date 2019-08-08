import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Page2 from '@/views/Page2'
import Login from '@/views/Login'
import Admin from '@/views/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/page2',
      name: "Page2",
      component: Page2
    },
    {
      path: '/login',
      name: "Login",
      component: Login
    },
    {
      path: '/admin',
      name: "Admin",
      component: Admin
    }
  ]
})
