import { defineStore } from 'pinia';

interface User {
  name: string;
  age: number;
  gender: string;
}

const useUserStore = defineStore("user", {
  state: () => ({
    userList: [
      {
        name: "张三",
        age: 17,
        gender: "男"
      },
      {
        name: "李四",
        age: 19,
        gender: "男"
      },
      {
        name: "陈七",
        age: 3,
        gender: "女"
      }
    ]
  }),
  getters: {
    sortedUserList: (state) => {
      return [...state.userList].sort((a, b) => a.age - b.age);
    }
  },
  actions: {
    // actions 用来修改 state
    setUser(user: User) {
      this.userList.push(user);
    }
  }
});

export default useUserStore;