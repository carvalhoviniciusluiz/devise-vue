// https://vuex.vuejs.org/en/state.html
'use strict'

import { storage } from 'helpers/services'

const tokenStorage = storage(process.env.TOKEN_KEY)

export default {
  token: tokenStorage.get() || '',
  status: ''
}
