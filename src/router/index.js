import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects/valleto',
      name: 'Valleto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/projects/ValletoView.vue')
    },
    {
      path: '/projects/movingforlife',
      name: 'Moving For Life',
      component: () => import('../views/projects/MovingForLifeView.vue')
    },
    {
      path: '/projects/timeslot',
      name: 'timeslot',
      component: () => import('../views/projects/timeslotView.vue')
    },
    {
      path: '/projects/presevere',
      name: 'presevere',
      component: () => import('../views/projects/PRESEVEREView.vue')
    },
    {
      path: '/projects/riseup',
      name: 'riseup',
      component: () => import('../views/projects/RiseUpView.vue')
    },
    {
      path: '/projects/reflectremove',
      name: 'reflectremove',
      component: () => import('../views/projects/ReflectRemoveView.vue')
    },
    {
      path: '/projects/myboy',
      name: 'myboy',
      component: () => import('../views/projects/myboyView.vue')
    },
    {
      path: '/projects/dance',
      name: 'dance',
      component: () => import('../views/projects/DanceView.vue')
    },
    {
      path: '/projects/modeling',
      name: 'modeling',
      component: () => import('../views/projects/ModelingView.vue')
    }
  ]
})

export default router
