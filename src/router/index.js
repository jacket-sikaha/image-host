import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // 任何人都可以阅读文章
      meta: { requiresAuth: false }
    },
    {
      path: '/login',
      name: '/login',
      component: () => import('../views/Login.vue'),
      // 任何人都可以阅读文章
      meta: { requiresAuth: false }
    },
    {
      path: '/upload',
      name: 'upload',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Upload.vue'),
      // 只有经过身份验证的用户才能创建帖子
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

// router.beforeEach((to, from) => {
//   // 而不是去检查每条路由记录
//   // to.matched.some(record => record.meta.requiresAuth)
//   if (to.meta.requiresAuth && !auth.isLoggedIn()) {
//     // 此路由需要授权，请检查是否已登录
//     // 如果没有，则重定向到登录页面
//     return {
//       path: '/login',
//       // 保存我们所在的位置，以便以后再来
//       query: { redirect: to.fullPath }
//     }
//   }
// })

export default router
