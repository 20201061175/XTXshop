import { httpInstance } from "../utils/http"

export const getCategoryApi = () => {
  return httpInstance({
    url: './home/category/head'
  })
}