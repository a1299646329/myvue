import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/front/Home'
import Login from '@/components/back/Login'
import Admin from '@/components/back/Admin'
// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'

Vue.use(Router)
// Vue.use(mavonEditor)

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
      path: '/admin',
      name: "Admin",
      component: Admin
    }
  ]
})
