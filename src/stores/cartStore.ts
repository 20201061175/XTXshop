//购物车
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart',
  () => {
    const cartList = ref([])

    const addCart = (goods) => {
      const item = cartList.value.find(item => item.skuId === goods.skuId)
      if (item) {
        item.count++
      } else {
        cartList.value.push(goods)
      }
    }

    const delCart = (skuId) => {
      const idx = cartList.value.findIndex(item => skuId === item.skuId)
      cartList.value.splice(idx, 1)
    }

    return {
      cartList,
      addCart,
      delCart,
    }
  },
  {
    persist: true
  }
)