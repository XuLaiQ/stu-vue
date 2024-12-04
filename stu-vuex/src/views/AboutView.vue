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
    <br>
    <button @click="addAsync">异步添加</button>
    <button @click="subAsync">异步减少</button>
    <h1>模块相关模块cart</h1>
    <h2>cart: {{ cart }}</h2>
    <button @click="changeCartCount">同步添加</button>
    <button @click="changeCartCountAsync">异步添加</button>
    <h1>模块相关模块user</h1>
    <h2>user: {{ user }}</h2>
    <button @click="changeUserName">修改名字</button>
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

// modules
const cart = computed(() => store.getters['cartDIY/getCount'])
console.log(cart.value)
const changeCartCount = () => {
  store.commit('cartDIY/add', { count: 5 })
}
const changeCartCountAsync = () => {
  store.dispatch('cartDIY/addAsync', { count: 50 })
}

const user = computed(() => store.getters['user/getUser'])
console.log(cart.value)
const changeUserName = () => {
  store.dispatch('user/changeAsync', '李白')
}

</script>

<style scoped>

</style>
