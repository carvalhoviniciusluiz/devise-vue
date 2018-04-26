'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import { beforeEach } from './beforeEach'
import { routes as app } from 'app'

Vue.use(Router)

let routes = [
  ...app,

  // page not found
  {
    name: 'catchall',
    path: '*',
    redirect: {
      name: 'main.dashboard1'
    },
    meta: {
      requiresAuth: true
    }
  }
]

// https://router.vuejs.org/en/api/options.html
const router = new Router({
  routes
})

// http://router.vuejs.org/en/api/route-object.html
router.beforeEach(beforeEach)

export default router
