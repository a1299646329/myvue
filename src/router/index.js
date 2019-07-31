import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Page2 from '@/views/Page2'

Vue.use(Router)

export default new Router({
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
    }
  ]
})
