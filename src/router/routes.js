
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'home', component: () => import('src/pages/Home.vue') },
      { path: 'plants', component: () => import('src/pages/Plants.vue') }

    ]
  },
  {
    path: '/plant',
    component: () => import('layouts/PlantPageLayout.vue'),
    children: [
      {
        name: 'PlantPage',
        path: '', component: () => import('src/pages/Plant.vue')
      }
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
