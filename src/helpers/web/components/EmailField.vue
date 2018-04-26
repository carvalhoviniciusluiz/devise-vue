<template>
  <div class="form-group has-feedback" :class="hasError">
    <input
      type="email"
      class="form-control"
      :id="idValue"
      :placeholder="placeholder"
      :name="name"
      v-model="modelValue">
    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
    <span class="help-block" v-if="message">{{message}}</span>
  </div>
</template>

<script>
import abstractField from './core/abstractField'
export default {
  mixins: [abstractField],
  name: 'EmailField'
}
</script>

<style scoped>
</style>
