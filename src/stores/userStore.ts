// 管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '../apis/users'
import { useCartStore } from './cartStore'
import { mergeCartAPI } from '../apis/cart'

export const useUserStore = defineStore('user', () => {
  const cartStore = useCartStore()
  // 定义state
  const userInfo = ref({})
  // 定义获取接口数据的action
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
    // 合并本地+远端的购物车
    await mergeCartAPI(cartStore.cartList.map(item => {
      return {
        skuId: item.skuId,
        selected: item.selected,
        count: item.count,
      }
    }))
    cartStore.updateNewList()
  }
  // clear
  const clearUserInfo = () => {
    userInfo.value = {}
    cartStore.clearCart()
  }
  // 以对象的形式将 state action 返回
  return {
    userInfo,
    getUserInfo,
    clearUserInfo,
  }
}, {
  persist: true,
})