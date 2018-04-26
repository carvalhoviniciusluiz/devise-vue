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
      <p class="login-box-msg">Register a new membership</p>

      <section @keyup.13="register">
        <email-field
          name="email"
          placeholder="Email"
          v-model="email"
          :error="error"/>

        <password-field
          name="password"
          placeholder="Password"
          v-model="password"
          :error="error"/>

        <password-field
          name="passwordConfirmation"
          placeholder="Password confirmation"
          v-model="passwordConfirmation"
          :error="error"
          @unidentifiedError="ifError"/>

        <div class="row">
          <div class="col-xs-8"></div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat" @click="register">Register</button>
          </div>
        </div>
      </section>

      <router-link :to="{name: 'auth.authenticate'}">
        I already have a membership
      </router-link>
    </div>
  </div>
</template>

<script>
import { http } from 'helpers/http'
export default {
  name: 'Register',
  data: () => ({
    email: '',
    password: '',
    passwordConfirmation: '',
    error: {},
    message: null
  }),
  methods: {
    async register () {
      try {
        await http.post('/registration', {
          payload: {
            email: this.email,
            password: this.password,
            passwordConfirmation: this.passwordConfirmation
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
