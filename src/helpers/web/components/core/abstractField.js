'use strict'

import assert from 'assert-plus'

export const uid = () => {
  const s4 = () => Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  return s4() + '-' + s4() + s4() + s4()
}

export default {
  data: () => ({
    hasError: '',
    message: ''
  }),
  props: {
    idValue: {
      type: String,
      'default': () => {
        return uid()
      }
    },
    name: String,
    value: String,
    placeholder: String,
    error: Object
  },
  watch: {
    modelValue () {
      this.hasError = ''
      this.message = ''
    },
    error (error) {
      assert.object(error, 'error')
      assert.ok(error.message, 'error.message')

      if (typeof error.message === 'string') {
        return this.$emit('unidentifiedError', error.message)
      }

      const { context, warn } = error.message

      if (context.key === this.name) {
        this.hasError = 'has-error'
        this.message = warn
      }
    }
  },
  computed: {
    modelValue: {
      get () {
        return this.value
      },
      set (v) {
        this.$emit('input', v.trim())
      }
    }
  }
}
