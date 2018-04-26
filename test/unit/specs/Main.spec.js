import Vue from 'vue'
import Main from '@/components/Main'

describe('Main.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Main)
    const vm = new Constructor().$mount()

    expect(vm._data.title).toEqual(null)
    expect(vm._data.message).toEqual(null)
    expect(vm._data.token).toEqual(null)
  })
})
