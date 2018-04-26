// http://router.vuejs.org/en/advanced/lazy-loading.html
'use strict'

const load = (component) => {
  return () => import(`../components/${component}.vue`)
}

export const Authenticate = load('Authenticate')
export const Logout = load('Logout')
export const Recover = load('Recover')
export const Register = load('Register')
