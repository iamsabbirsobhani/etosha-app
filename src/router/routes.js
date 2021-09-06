
const routes = [
  {
    path: '/',
    component: () => import('layouts/Home.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/features',
    component: () => import('layouts/Features.vue'),
  },
  {
    path: '/contactus',
    component: () => import('layouts/ContactUs.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
