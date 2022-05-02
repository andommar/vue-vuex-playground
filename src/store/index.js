import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 100
  },
  getters: {
  },
  mutations: {
    increment(state, payload){
      state.contador = state.contador + payload
    },
    decrease(state, payload){
      state.contador = state.contador - payload
    }
  },
  actions: {
    incrementAction({ commit }) {
      commit('increment', 10)
    },
    decreaseAction({ commit }, number) {
      commit('decrease', number)
    },
    actionBtn({commit}, object){
      if(object.status){
        commit('increment', object.number)
      } else {
        commit('decrease', object.number)
      }
    }
  },
  modules: {
  }
})
