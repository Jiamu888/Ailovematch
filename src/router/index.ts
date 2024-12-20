import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useHomeStore } from '@/views/home/store/homeStore'
import HomeView from '@/views/home/HomeView.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'AI姓名配对 - 探索你们的缘分密码',
    },
  },
  {
    path: '/result',
    name: 'result',
    component: () => import('@/views/home/components/result/ResultView.vue'),
    meta: {
      title: '配对结果 - AI姓名配对',
      requiresResult: true,
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
})

// 路由守卫
router.beforeEach((to, from, next) => {
  // 设置页面标题
  document.title = to.meta.title as string

  // 检查是否需要计算结果
  if (to.meta.requiresResult) {
    const store = useHomeStore()
    if (!store.hasResult) {
      next('/')
      return
    }
  }

  next()
})

export default router
