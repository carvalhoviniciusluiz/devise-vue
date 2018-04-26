<template>
  <section>loading..</section>
</template>

<script>
import { types } from 'store'
export default {
  name: 'Logout',
  mounted () {
    setTimeout(() => {
      this.logout()
    }, 1000)
  },
  methods: {
    async logout () {
      await this.$store.dispatch(types.AUTH_LOGOUT)
      this.$router.push({
        name: 'auth.authenticate'
      })
    }
  }
}
</script>

<style scoped>
</style>
