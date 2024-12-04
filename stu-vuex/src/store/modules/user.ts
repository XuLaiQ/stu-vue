const state = {
  user: '李四'
}

const mutations = {
  changeUser (state: any, payload: any) {
    state.user = payload
  }
}

const getters = {
  getUser (state: any) {
    return state.user
  }
}

const actions = {
  changeAsync (context: any, payload: any) {
    setTimeout(() => {
      context.commit('changeUser', payload)
    }, 1000)
  }
}

const store = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

export default store
