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
