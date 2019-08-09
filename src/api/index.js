//  对 axios 进行配置  然后将配置好的 axios 导出
import axios from 'axios'
import store from '@/store'

import JSONBIG from 'json-bigint'

// 进行配置
// 基准路径
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0/'
axios.defaults.transformResponse = [(data) => {
  // data 原始 json 字符   对 data 进行转化  return 的值转换后的结果
  // data 在删除接口返回的是 null 使用 JSONBIG 转换 null 会报错
  try {
    return JSONBIG.parse(data)
  } catch (error) {
    return data
  }
}]
// 请求头字段
// axios.defaults.headers = {
//   Authorization: `Bearer ${store.getUser().token}`
// }

// 请求拦截器
axios.interceptors.request.use((config) => {
  // 修改  在每次请求前 获取一次 token 设置头部
  // 好处  不会覆盖之前的头部信息
  config.headers.Authorization = `Bearer ${store.getUser().token}`
  //   config.headers = {
  //     Authorization: `Bearer ${store.getUser().token}`
  //   }
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截器
axios.interceptors.response.use((res) => {
  return res
}, (err) => {
  // 获取响应状态码
  if (err.response.status === 401) {
    // token 失效  跳转登录页面
    location.hash = '#/login'
  }
})

export default axios
