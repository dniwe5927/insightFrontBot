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
      path: '/cardsNotLimit',
      component: () => import('@/views/cardsNotLimit.vue'),
    },
    {
      path: '/cardsList',
      component: () => import('@/views/cardsList.vue'),
    },
    {
      path: '/cards',
      component: () => import('@/views/cards.vue'),
    },
    {
      path: '/empty',
      component: () => import('@/views/Empty.vue'),
    },
    {
      path: '/trust',
      component: () => import('@/views/trust.vue'),
    },
    {
      path: '/loyalty',
      component: () => import('@/views/loyalty.vue'),
    },
    {
      path: '/faq',
      component: () => import('@/views/faq.vue'),
    },
    {
      path: '/support',
      component: () => import('@/views/support.vue'),
    },
  ],
})
