<template>
  <div class="form-group has-feedback" :class="hasError">
    <input
      type="password"
      class="form-control"
      :id="idValue"
      :placeholder="placeholder"
      :name="name"
      v-model="modelValue">
    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
    <span class="help-block" v-if="message">{{message}}</span>
  </div>
</template>

<script>
import abstractField from './core/abstractField'
export default {
  mixins: [abstractField],
  name: 'PasswordField'
}
</script>

<style scoped>
</style>
