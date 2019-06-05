import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }
  ],
  //每次刷新回到页面顶部
  scrollBehavior(to, from,savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  mode: 'history'
})
