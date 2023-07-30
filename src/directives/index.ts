import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  // @ts-ignore
  install(app) {
    // 定义全局指令，懒加载(自定义指令)
    app.directive('img-lazy', {
      // @ts-ignore
      mounted(el, binding) {
        //el绑定的元素
        //binding指令对象，binding.value指令=后面的绑定的值（url）
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            if (isIntersecting) {
              // 图片进入视图
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })
  }
}