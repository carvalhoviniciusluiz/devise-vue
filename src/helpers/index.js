// https://vuejs.org/v2/guide/plugins.html
'use strict'

import httpSocket from './http/socket'
import components from './web/components'

export default {
  install (Vue) {
    Vue.use(httpSocket)
    Vue.use(components)
  }
}
