import { httpInstance } from "../utils/http"

// get Banner
export const getBannerAPI = () => {
  return httpInstance({
    url: '/home/banner'
  })
}