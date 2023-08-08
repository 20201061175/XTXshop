import { ref } from 'vue'
import { onUnmounted } from 'vue'

export const useCountDown = () => {
  const formatTime = ref(0)
  let timer = null
  const start = (currentTime = 0) => {
    // start down
    formatTime.value = currentTime
    timer = setInterval(() => {
      formatTime.value--
    }, 1000)
  }

  onUnmounted(() => {
    timer && clearInterval(timer)
  })

  return {
    formatTime, 
    start
  }
}