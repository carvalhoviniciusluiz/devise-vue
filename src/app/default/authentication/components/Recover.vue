<template>
  <div class="login-box">
    <div class="login-logo">
      <a href="https://github.com/carvalhoviniciusluiz/devise-vue"><b>Devise</b>Vue</a>
    </div>

    <div class="alert alert-info alert-dismissible" v-if="message">
      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
      {{message}}
    </div>

    <div class="login-box-body">
      <p class="login-box-msg">Recover lost access</p>

      <section @keyup.13="recover">
        <email-field
          name="email"
          placeholder="Email"
          v-model="email"
          :error="error"
          @unidentifiedError="ifError"/>

        <div class="row">
          <div class="col-xs-8"></div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat" @click="recover">Recover</button>
          </div>
        </div>
      </section>

      <router-link :to="{name: 'auth.authenticate'}">
        I already have a membership
      </router-link><br>

      <router-link :to="{name: 'auth.register'}" class="text-center">
        Register a new membership
      </router-link>
    </div>
  </div>
</template>

<script>
import { http } from 'helpers/http'
export default {
  name: 'Recover',
  data: () => ({
    email: '',
    error: {},
    message: null
  }),
  methods: {
    async recover () {
      let token = ''
      try {
        const res = await http.post('/recoveryToken')
        token = res.data.token
      } catch (error) {
        return
      }
      try {
        await http.post(`/password?token=${token}`, {
          payload: {
            email: this.email
          }
        })

        this.$router.push({
          name: 'auth.authenticate'
        })
      } catch (error) {
        if (!error.serverFailed) {
          this.error = error.response.data
        }
      }
    },
    ifError (message) {
      this.message = message
    }
  }
}
</script>

<style scoped>
</style>
