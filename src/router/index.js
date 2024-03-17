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
        title: `Claire Sersun${String.fromCharCode(39)}s Portfolio`,
        metaTags: [
          {
            name: 'description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
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
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
            {
              name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
            },
            {
              name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
            },
            {
              name: 'og:description', content: 'Learn about Claire Sersun and her work.'
            },
            {
              name: 'og:type', content: 'website'
            }
            ,
            {
              name: 'og:url', content: 'https://www.clairesersun.com/'
            },
            {
              name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
            },
            {
              name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
            },
            {
              name: 'og:image:width', content: '300'
            },
            {
              name: 'og:image:height', content: '300'
            }
        ]
      }
    },
    {
      path: '/projects/movingforlife',
      name: 'Moving For Life',
      component: () => import('../views/projects/MovingForLifeView.vue'),
      meta: {
        title: 'Moving For Life | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/timeslot',
      name: 'timeslot',
      component: () => import('../views/projects/timeslotView.vue'),
      meta: {
        title: 'timeslot | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/presevere',
      name: 'PRESEVERE',
      component: () => import('../views/projects/PRESEVEREView.vue'),
      meta: {
        title: 'PRESEVERE | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/riseup',
      name: 'Rise Up',
      component: () => import('../views/projects/RiseUpView.vue'),
      meta: {
        title: 'Rise Up | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/reflectremove',
      name: 'Reflect: Remove',
      component: () => import('../views/projects/ReflectRemoveView.vue'),
      meta: {
        title: 'Reflect: Remove | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/myboy',
      name: 'my boy',
      component: () => import('../views/projects/myboyView.vue'),
      meta: {
        title: 'my boy | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/dance',
      name: 'Dance',
      component: () => import('../views/projects/DanceView.vue'),
      meta: {
        title: 'Dance | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/modeling',
      name: 'Modeling',
      component: () => import('../views/projects/ModelingView.vue'),
      meta: {
        title: 'Modeling | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/rain',
      name: 'Rain',
      component: () => import('../views/projects/RainView.vue'),
      meta: {
        title: 'Rain | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/xxii',
      name: 'xxii',
      component: () => import('../views/projects/xxiiView.vue'),
      meta: {
        title: 'xxii | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/fivehours',
      name: 'Five Hours',
      component: () => import('../views/projects/FiveHoursView.vue'),
      meta: {
        title: 'Five Hours | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/oneandtwo',
      name: '.1 & .2',
      component: () => import('../views/projects/OneAndTwoView.vue'),
      meta: {
        title: '.1 & .2 | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/openyoureyes',
      name: 'Open Your Eyes',
      component: () => import('../views/projects/OpenYourEyesView.vue'),
      meta: {
        title: 'Open Your Eyes | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/portraitof',
      name: 'Portrait of a Dancer',
      component: () => import('../views/projects/PortraitOfView.vue'),
      meta: {
        title: 'Portrait of a Dancer | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/home',
      name: 'HOME',
      component: () => import('../views/projects/homeView.vue'),
      meta: {
        title: 'HOME | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    { 
      path: '/clairesersunphotography',
			name: "Claire Sersun Photography",
      beforeEnter() {
        window.open('https://www.clairesersunphotography.com/', '_blank'),
        window.location.replace('/')
      },
		},
    {
      path: '/projects/museummile',
      name: 'Museum Mile',
      component: () => import('../views/projects/museumMileView.vue'),
      meta: {
        title: 'Museum Mile | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
    {
      path: '/projects/illusion',
      name: 'Illusion',
      component: () => import('../views/projects/illusionView.vue'),
      meta: {
        title: 'Illusion | Project',
        ///////////////////////////////////////////
        //TO DO::need to finish these meta tags//
        ///////////////////////////////////////////
        metaTags: [
          {
            name: 'description', content: 'Claire Sersun worked as a web designer for VALLETO Dance Company from 2021-2022.'
          },
          {
            name: 'og:title', content: `Claire Sersun${String.fromCharCode(39)}s Portfolio`
          },
          {
            name: 'og:description', content: 'Learn about Claire Sersun and her work.'
          },
          {
            name: 'og:type', content: 'website'
          }
          ,
          {
            name: 'og:url', content: 'https://www.clairesersun.com/'
          },
          {
            name: 'og:image', content: 'https://www.clairesersun.com/assets/claire-c18a6666.png'
          },
          {
            name: 'og:img:alt', content: 'Headshot drawing of Claire Sersun'
          },
          {
            name: 'og:image:width', content: '300'
          },
          {
            name: 'og:image:height', content: '300'
          }
      ]
      }
    },
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
}
})

// This callback runs before every route change, including on page load.
router.beforeEach((to, from) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));
})

export default router
