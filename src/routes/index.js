// 职责：初始化路由对象  提供 main.js 使用
import VueRouter from 'vue-router'
import Vue from 'vue'

import login from '@/views/login'
import Home from '@/views/home'
import Welcome from '@/views/welcome'
import Article from '@/views/article'
import NotFound from '@/views/404'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    //   跳转路由 $router.push('/login) 或者 $router.push({name: 'login'})
    { path: '/login', name: 'login', component: login },
    {
      path: '/',
      component: Home,
      children: [
        { path: '/', name: 'welcome', component: Welcome },
        { path: '/article', name: 'article', component: Article }
      ]
    },
    // 路径 404
    { path: '*', name: '404', component: NotFound }
  ]
})

export default router
