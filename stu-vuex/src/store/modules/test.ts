const store = {
  namespaced: true,
  // state，存储数据
  state: {
    name: 'test',
    count: 100,
    CountList: Array.from({ length: 10 }, (_, index) => index + 1),
    userName: '张三',
    userList: ['wang', 'li', 'cheng', 'xin'],
    userInfo: {
      name: '张三',
      age: 18
    }
  },
  // getters，获取数据
  getters: {
    getCount (state: any) {
      return state.count
    },
    getCountList (state: any) {
      return state.CountList
    },
    getUserName (state: any) {
      return state.userName
    },
    getUserList (state: any) {
      return state.userList
    },
    getUserInfo (state: any) {
      return state.userInfo
    }
  },
  // mutations，修改数据（同步）
  mutations: {
    add (state: any, payload: any) {
      state.count += payload.count
    },
    sub (state: any, payload: any) {
      state.count -= payload
    },
    // 修改名字
    setName (state: any, payload: any) {
      state.userName = payload
    },
    // 添加用户
    addUser (state: any, payload: any) {
      state.userList.push(payload)
    }
  },
  // actions，异步修改数据
  actions: {
    addAsync (context: any, payload: any) {
      setTimeout(() => {
        context.commit('add', payload)
      }, 1000)
    },
    subAsync (context: any, payload: any) {
      setTimeout(() => {
        context.commit('sub', payload)
      }, 1000)
    }
  }
}

export default store
