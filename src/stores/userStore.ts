// 管理用户数据相关
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '../apis/users'

export const useUserStore = defineStore('user', () => {
  // 定义state
  const userInfo = ref({})
  // 定义获取接口数据的action
  const getUserInfo = async ({ account, password }) => {
    const res = await loginAPI({ account, password })
    userInfo.value = res.result
  }
  // clear
  const clearUserInfo = () => {
    userInfo.value = {}
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