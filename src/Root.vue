<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import 'assets/css/AdminLTE.css'
import 'assets/css/_all-skins.css'
import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'

import { http } from 'helpers/http'

const isProduction = process.env.NODE_ENV === 'production'

if (isProduction) {
  require('helpers/services/consoleWarning')
}

export default {
  name: 'Root',
  created () {
    http.interceptors.request.use(
      request => {
        console.log('before-request')
        return request
      },
      error => {
        console.log('request-error')
        return Promise.reject(error)
      }
    )

    http.interceptors.response.use(
      response => {
        console.log('after-request')
        return response
      },
      error => {
        console.log('response-error')

        // server does not respond
        if (error.message === 'Network Error' && error.config && !error.config.__isRetryRequest) {
          console.log('Opssss! Try again later.')
          error.serverFailed = true
        }

        // unauthorized case
        if (error.status === 401 && error.config && !error.config.__isRetryRequest) {
          this.$router.push({
            name: 'auth.logout'
          })
        }
        return Promise.reject(error)
      }
    )
  }
}
</script>

<style scoped>
</style>
