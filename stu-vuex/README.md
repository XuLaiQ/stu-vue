# stu-vuex
主要记录怎么使用vuex

## 步骤
### 安装

```shell
npm install vuex@next --save
```

这里主要展示的是vue3 + typescript中vuex的基本使用

### 创建store （不使用模板modules）

- 创建index.ts文件

```typescript
import { createStore } from 'vuex'

export default createStore({
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
  },
  // modules，模块，引用
  modules: {
    // 命名空间，默认为false，不启用，启用后，模块中的mutations、actions、getters必须加上命名空间，才能被外部调用，否则会报错
    // 启用命名空间，在组件中，通过store.commit('cart/addCart')来调用，否则会报错
    // 启用命名空间，在组件中，通过store.getters['cart/cartList']来调用，否则会报错
    // 启用命名空间，在组件中，通过store.dispatch('cart/addCart')来调用，否则会报错
  }
})
```

- 导入到main.ts中

  ```typescript
  import { createApp } from 'vue'
  import App from './App.vue'
  import router from './router'
  import store from './store'
  
  createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
  ```

  

- 在vue组件中使用

  ```vue
  <template>
    <div class="about">
      <h1>This is an about page</h1>
      <h2>count: {{ count }}</h2>
      <h2>userName: {{ userName }}</h2>
      <h2>userInfo: {{ userInfo }}</h2>
      <h2>CountList: {{ CountList }}</h2>
      <h2>userList: {{ userList }}</h2>
      <button @click="add">加</button>
      <button @click="sub">减</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useStore } from 'vuex'
  import { computed } from 'vue'
  
  const store = useStore()
  
  // 使用 computed 获取响应式数据
  const count = computed(() => store.getters.getCount)
  const userName = computed(() => store.getters.getUserName)
  const CountList = computed(() => store.getters.getCountList)
  const userList = computed(() => store.getters.getUserList)
  const userInfo = computed(() => store.getters.getUserInfo)
  
  </script>
  ```

  

### 创建store （使用模板modules）

安装 Vuex 之后，让我们来创建一个 store。 创建过程直截了当——仅需要提供一个初始 state 对象和一些 mutation：

- **定义模板test.ts**

```ts
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
```

- **模板引入index.ts**

```typescript
import { createStore } from 'vuex'
import cart from '@/store/modules/cart'
import user from '@/store/modules/user'
import test from '@/store/modules/test'

export default createStore({
  // modules，模块，引用
  modules: {
    cartDIY: cart,
    user: user,
    // 命名空间，默认为false，不启用，启用后，模块中的mutations、actions、getters必须加上命名空间，才能被外部调用，否则会报错
    // 启用命名空间，在组件中，通过store.commit('cart/addCart')来调用，否则会报错
    // 启用命名空间，在组件中，通过store.getters['cart/cartList']来调用，否则会报错
    // 启用命名空间，在组件中，通过store.dispatch('cart/addCart')来调用，否则会报错
    test: test
  }
})
```

- **导入main.ts**

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
```



- **在组件中使用**

```vue
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>count: {{ count }}</h2>
    <h2>userName: {{ userName }}</h2>
    <h2>userInfo: {{ userInfo }}</h2>
    <h2>CountList: {{ CountList }}</h2>
    <h2>userList: {{ userList }}</h2>
    <button @click="add">加</button>
    <button @click="sub">减</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

// 使用 computed 获取响应式数据
const count = computed(() => store.getters['test/getCount'])
const userName = computed(() => store.getters['test/getUserName'])
const CountList = computed(() => store.getters['test/getCountList'])
const userList = computed(() => store.getters['test/getUserList'])
const userInfo = computed(() => store.getters['test/getUserInfo'])

// 同步
const add = () => {
  store.commit({
    type: 'test/add',
    count: 1
  })
}
const sub = () => {
  store.commit('test/sub', 1)
}

// 异步
const addAsync = () => {
  store.dispatch('test/addAsync', { count: 50 })
}
const subAsync = () => {
  store.dispatch('test/subAsync', 50)
}

</script>

<style scoped>

</style>
```





