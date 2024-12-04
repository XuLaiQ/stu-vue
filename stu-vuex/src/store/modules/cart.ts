const state = {
  count: 100
}

const mutations = {
  add (state: any, payload: any) {
    state.count += payload.count
  }
}

const getters = {
  getCount (state: any) {
    return state.count
  }
}

const actions = {
  addAsync (context: any, payload: any) {
    setTimeout(() => {
      context.commit('add', payload)
    }, 1000)
  }
}

const store = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

export default store
