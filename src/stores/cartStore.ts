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
    return {
      cartList,
      addCart,
    }
  },
  {
    persist: true
  }
)