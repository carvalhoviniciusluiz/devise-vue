'use strict'

import store from 'store'

export const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next({ name: 'main.dashboard1' })
}

export const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next({ name: 'auth.authenticate' })
}
