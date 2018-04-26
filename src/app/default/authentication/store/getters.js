// https://vuex.vuejs.org/en/getters.html
'use strict'

export default {
  isAuthenticated: state => !!state.token,
  authStatus: state => state.status
}
