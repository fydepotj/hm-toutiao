import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import router from './routes/index.js'
// @是一个路径的别名  是 src 路径  在 vue-cli 项目下有效
// index 是目录的索引文件  默认使用的索引文件  index.js  index.vue  index.json
import router from '@/routes'

// 产品级别提示  不开启  开发阶段  提示越详细越好   开发级别提示
Vue.config.productionTip = false

Vue.use(ElementUI)

// main.js 入口文件
// 职责1：引入所需要的模块（js，包，css，其他资源）
// 职责2：创建一个根 vue 实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
