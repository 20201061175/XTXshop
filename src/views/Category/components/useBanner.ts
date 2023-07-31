import { onMounted, ref } from 'vue'
import { getBannerAPI } from '../../../apis/home'

// 封装Banner
export const useBanner = () => {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getBannerAPI({ distributionSite: 2 })
    bannerList.value = res.result
  }
  onMounted(() => getBanner())
  return {
    bannerList
  }
}