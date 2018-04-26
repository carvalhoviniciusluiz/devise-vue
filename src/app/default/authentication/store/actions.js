// https://vuex.vuejs.org/en/actions.html
'use strict'

import { http } from 'helpers/http'
import types from 'store/types'

export default {
  [types.AUTH_REQUEST]: ({ commit }, { payload }) =>
    new Promise(async (resolve, reject) => {
      commit(types.AUTH_REQUEST)
      try {
        const res = await http.post('/session', { payload })
        const { token } = res.data

        commit(types.AUTH_SUCCESS, token)

        http.defaults.headers.common['Authorization'] = token
        resolve()
      } catch (error) {
        commit(types.AUTH_ERROR)
        reject(error)
      }
    }),

  [types.AUTH_LOGOUT]: ({ commit }) =>
    new Promise((resolve, reject) => {
      commit(types.AUTH_LOGOUT)

      delete http.defaults.headers.common['Authorization']
      resolve()
    })
}
