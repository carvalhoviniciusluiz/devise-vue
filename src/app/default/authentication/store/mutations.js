// https://vuex.vuejs.org/en/mutations.html
'use strict'

import types from 'store/types'
import { storage } from 'helpers/services'

const tokenStorage = storage(process.env.TOKEN_KEY)

export default {
  [types.AUTH_REQUEST] (state) {
    state.status = 'loading'
  },

  [types.AUTH_SUCCESS] (state, token) {
    state.status = 'success'
    state.token = token
    tokenStorage.set(token)
  },

  [types.AUTH_ERROR] (state) {
    state.status = 'error'
    tokenStorage.remove()
  },

  [types.AUTH_LOGOUT] (state) {
    state.token = ''
    tokenStorage.remove()
  }
}
