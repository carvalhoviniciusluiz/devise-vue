'use strict'

import Vue from 'vue'
import Vuex from 'vuex'
import modules from './modules'
import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export {default as types} from './types'

export default new Vuex.Store({
  modules,
  state,
  getters,
  mutations,
  actions,

  // https://vuex.vuejs.org/en/strict.html
  strict: process.env.NODE_ENV !== 'production'
})
