import { httpInstance } from "../utils/http";

// 获取订单详情-地址=远端购物车的商品
export const getCheckInfoAPI = () => {
  return httpInstance({
    url: '/member/order/pre'
  })
}

// 创建订单
export const createOrderAPI = (data) => {
  return httpInstance({
    url: '/member/order',
    method: 'POST',
    data,
  })
}