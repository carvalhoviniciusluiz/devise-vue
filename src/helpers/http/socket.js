// https://vuejs.org/v2/guide/plugins.html
'use strict'

// https://stackoverflow.com/questions/41381444/websocket-connection-failed-error-during-websocket-handshake-unexpected-respon
export const socket = require('socket.io-client')(process.env.SERVER_URI, {
  transports: ['websocket']
})

export default {
  install (Vue) {
    Object.defineProperty(Vue.prototype, '$socket', {
      get () {
        return socket
      }
    })
  }
}
