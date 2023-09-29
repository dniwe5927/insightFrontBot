import { createRouter, createWebHistory } from 'vue-router'
import Main from '@/views/Main.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Main,
    },
    {
      path: '/about',
      component: () => import('@/views/index.vue'),
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact.vue'),
    },
  ],
})
