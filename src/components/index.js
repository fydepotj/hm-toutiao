// 封装一个 vue 插件
// 作用：注册一个 components 下的所有的组件为全局组件
import MyBread from '@/components/my-bread'
import MyChannel from '@/components/my-channel'
import MyImage from '@/components/my-image'

// vue 插件定义的规则  暴露一个对象 {}  在对象选项中 install 对应的一个函数  函数形参 Vue 对象
export default {
  install (Vue) {
    // Vue .use （使用插件）  vue 就是你 use 前的 vue
    // Vue 全局注册组件即可
    Vue.component(MyBread.name, MyBread)
    Vue.component(MyChannel.name, MyChannel)
    Vue.component(MyImage.name, MyImage)
  }

}
