//购物车
import { computed, ref } from 'vue'
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

    const singleCheck = (skuId, selected) => {
      // 修改store中商品项的selected
      const item = cartList.value.find(item => item.skuId === skuId)
      item.selected = selected
    }
    
    const selectAll = (selected) => {
      cartList.value.forEach(item => item.selected = selected)
    }

    //计算属性
    const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
    const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
    const isAll = computed(() => cartList.value.every(item => item.selected))

    return {
      cartList,
      allCount,
      allPrice,
      isAll,
      addCart,
      delCart,
      singleCheck,
      selectAll,
    }
  },
  {
    persist: true
  }
)