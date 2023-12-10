import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: {
        title: 'Home',
      }
    },
    {
      path: '/projects/valleto',
      name: 'Valleto',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/projects/ValletoView.vue'),
      meta: {
        title: 'Valleto | Project',
      }
    },
    {
      path: '/projects/movingforlife',
      name: 'Moving For Life',
      component: () => import('../views/projects/MovingForLifeView.vue'),
      meta: {
        title: 'Moving For Life | Project',
      }
    },
    {
      path: '/projects/timeslot',
      name: 'timeslot',
      component: () => import('../views/projects/timeslotView.vue'),
      meta: {
        title: 'timeslot | Project',
      }
    },
    {
      path: '/projects/presevere',
      name: 'PRESEVERE',
      component: () => import('../views/projects/PRESEVEREView.vue'),
      meta: {
        title: 'PRESEVERE | Project',
      }
    },
    {
      path: '/projects/riseup',
      name: 'Rise Up',
      component: () => import('../views/projects/RiseUpView.vue'),
      meta: {
        title: 'Rise Up | Project',
      }
    },
    {
      path: '/projects/reflectremove',
      name: 'Reflect: Remove',
      component: () => import('../views/projects/ReflectRemoveView.vue'),
      meta: {
        title: 'Reflect: Remove | Project',
      }
    },
    {
      path: '/projects/myboy',
      name: 'my boy',
      component: () => import('../views/projects/myboyView.vue'),
      meta: {
        title: 'my boy | Project',
      }
    },
    {
      path: '/projects/dance',
      name: 'Dance',
      component: () => import('../views/projects/DanceView.vue'),
      meta: {
        title: 'Dance | Project',
      }
    },
    {
      path: '/projects/modeling',
      name: 'Modeling',
      component: () => import('../views/projects/ModelingView.vue'),
      meta: {
        title: 'Modeling | Project',
      }
    },
    {
      path: '/projects/rain',
      name: 'Rain',
      component: () => import('../views/projects/RainView.vue'),
      meta: {
        title: 'Rain | Project',
      }
    },
    {
      path: '/projects/xxii',
      name: 'xxii',
      component: () => import('../views/projects/xxiiView.vue'),
      meta: {
        title: 'xxii | Project',
      }
    }
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
}
})

router.beforeEach((to, from) => {

  document.title = to.meta?.title ?? 'Default Title'

})

export default router
