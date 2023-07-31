import { onBeforeRouteUpdate } from 'vue-router'
import { getCategoryAPI } from '../../../apis/category'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

export const useCategory = () => {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    // 如何在setup中获取路由参数 useRoute() -> route 等价于this.$route
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())
  onBeforeRouteUpdate((to) => {
    console.log(to)
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}