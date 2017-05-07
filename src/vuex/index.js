import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    text: 'Welcome to Your Vue.js App'
  },
  getters: {
    text: state => state.text
  },
  actions: {
    addText (context, payload) {
      context.commit('addText', payload)
    },
    delText (context) {
      context.commit('delText')
    }
  },
  mutations: {
    addText (state, payload) {
      state.text = payload
    },
    delText (state) {
      state.text = ''
    }
  }
})

export default store
