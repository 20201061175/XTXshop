import { httpInstance } from "../utils/http"

// get Banner
export const getBannerAPI = () => {
  return httpInstance({
    url: '/home/banner'
  })
}

/**
 * 
 * @description 获取新鲜好物
 */
export const findNewAPI = () => {
  return httpInstance({
    url: '/home/new'
  })
}

export const getHotAPI = () => {
  return  httpInstance({
    url: 'home/hot'
  })
}

export const getGoodsAPI = () => {
  return  httpInstance({
    url: 'home/goods'
  })
}