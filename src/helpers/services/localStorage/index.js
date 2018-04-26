// https://developer.mozilla.org/pt-BR/docs/Web/API/Storage
'use strict'

function LocalStore (key) {
  this.key = key
}

LocalStore.prototype.set = function (value) {
  window.localStorage.setItem(this.key, value)
  return this.get(this.key)
}

LocalStore.prototype.get = function () {
  return window.localStorage.getItem(this.key)
}

LocalStore.prototype.setObject = function (obj) {
  this.set(this.key, JSON.stringify(obj))
  return this.getObject(this.key)
}

LocalStore.prototype.getObject = function () {
  return JSON.parse(this.get(this.key) || null)
}

LocalStore.prototype.remove = function () {
  window.localStorage.removeItem(this.key)
}

export const storage = (key) => {
  return new LocalStore(key)
}
