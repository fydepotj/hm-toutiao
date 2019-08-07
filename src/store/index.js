// 封装操作 sessionStorage的函数   提供给其他模块使用
// 1 约定好 key 的名字
// 2 约定好 value 的格式  字符串格式 json 数据

const KEY = 'hm-toutiao-user'

export default {
  // 设置用户信息
  setUser (user) {
    // 存储 user 对象数据
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  //   获取用户信息
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  // 移除用户信息
  clearUser () {
    // sessionStorage.clear() 清除所有的 sessionStroage 本地存储  不建议使用
    window.sessionStorage.removeItem(KEY)
  }
}
