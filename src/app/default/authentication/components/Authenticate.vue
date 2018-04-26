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
      <p class="login-box-msg">Sign in to start your session</p>

      <section @keyup.13="authenticate">
        <email-field
          name="email"
          placeholder="Email"
          v-model="email"
          :error="error"/>

        <password-field
          name="password"
          placeholder="Password"
          v-model="password"
          :error="error"
          @unidentifiedError="ifError"/>

        <div class="row">
          <div class="col-xs-8"></div>
          <div class="col-xs-4">
            <button type="submit" class="btn btn-primary btn-block btn-flat" @click="authenticate">Sign In</button>
          </div>
        </div>
      </section>

      <router-link :to="{name: 'auth.recover'}">
        I forgot my password
      </router-link><br>

      <router-link :to="{name: 'auth.register'}" class="text-center">
        Register a new membership
      </router-link>
    </div>
  </div>
</template>

<script>
import { types } from 'store'
export default {
  name: 'Authenticate',
  data: () => ({
    email: '',
    password: '',
    error: {},
    message: null,
    localEnvironment: null
  }),
  methods: {
    async authenticate () {
      try {
        await this.$store.dispatch(types.AUTH_REQUEST, {
          payload: {
            email: this.email,
            password: this.password
          }
        })

        this.$router.push({
          name: 'main.dashboard1'
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
