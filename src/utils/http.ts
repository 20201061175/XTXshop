import axios from "axios"
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'

export const httpInstance = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000,
})

// 拦截器
httpInstance.interceptors.request.use(config => {
  return config
}, e => Promise.reject(e))


httpInstance.interceptors.response.use(
  res => {
    return res.data
  },
  e => {
    // 统一错误提示
    ElMessage({
      type: 'warning',
      message: e.response.data.message
    })
    return Promise.reject(e)
  })