<template>
  <el-select :value="value" clearable placeholder="请选择" @change="fn">
    <el-option v-for="item in channelOptions" :key="item.id" :label="item.name" :value="item.id"></el-option>
  </el-select>
</template>

<script>
export default {
  name: 'my-channel',
  props: ['value'],
  data () {
    return {
      channelOptions: []
    }
  },
  // 计算属性  computed  当你需要一个新数据  依赖 data 中的数据得到，当 data 中的数据改变，计算属性也会改变
  // 侦听器  watch  当你需要监听某个 data 数据改变，改变后做性能开销较大操作时（异步操作），也可以做其他事情
  // 监听数据
  watch: {
    myValue: function (newVal, oldVal) {
      if (newVal === '') {
        // axios 不会将参数提交给后台
        this.myValue = null
      }
    }
  },
  created () {
    // 获取频道下拉选项数据
    this.getChannelOptions()
  },
  methods: {
    fn (val) {
      // 后端频道不支持空字符问题
      if (val === '') val = null
      // 提交给父组件
      this.$emit('input', val)
    },
    async getChannelOptions () {
      const {
        data: { data }
      } = await this.$http.get('channels')
      this.channelOptions = data.channels
    }
  }
}
</script>

<style scoped lang='less'></style>
