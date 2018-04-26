'use strict'

import EmailField from './EmailField.vue'
import PasswordField from './PasswordField.vue'

export default {
  install (Vue) {
    Vue.component('email-field', EmailField)
    Vue.component('password-field', PasswordField)
  }
}
