// https://router.vuejs.org/en/advanced/navigation-guards.html
'use strict'

import { ifAuthenticated, ifNotAuthenticated } from 'router/middleware'
import * as cp from './components'

const defaultRouters = [{
  path: '/authentication',
  component: (r) => require(['@/layouts/Blank.vue'], r),
  children: [{
    name: 'auth.authenticate',
    path: '/auth',
    component: cp.Authenticate,
    beforeEnter: ifNotAuthenticated
  }, {
    name: 'auth.logout',
    path: '/logout',
    component: cp.Logout,
    beforeEnter: ifAuthenticated
  }, {
    name: 'auth.recover',
    path: '/recover',
    component: cp.Recover,
    beforeEnter: ifNotAuthenticated
  }, {
    name: 'auth.register',
    path: '/register',
    component: cp.Register,
    beforeEnter: ifNotAuthenticated
  }]
}]

export default [
  ...defaultRouters
]
