// https://router.vuejs.org/en/advanced/navigation-guards.html
'use strict'

import { ifAuthenticated } from 'router/middleware'

export default [{
  path: '/',
  component: (r) => import('@/layouts/Blank.vue'),
  beforeEnter: ifAuthenticated,
  children: [{
    name: 'main.dashboard1',
    path: '/',
    component: () => import('./Dashboard1.vue')
  }]
}]
