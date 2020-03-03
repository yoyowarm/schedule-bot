<template>
  <div>
      <el-select v-model="year" placeholder="请选择">
      <el-option
        v-for="item in yearOptions"
        :key="item.value"
        :label="item.year"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="month" placeholder="请选择">
      <el-option
        v-for="item in monthOptions"
        :key="item.value"
        :label="item.month"
        :value="item.value">
      </el-option>
    </el-select>
  </div>

</template>

<script>
const moment = require('moment')

export default {
  data () {
    return {
      year: moment().year(),
      month: moment().month() + 1
    }
  },
  computed: {
    yearOptions () {
      const years = []
      for (let i = 0; i < 5; i++) {
        years.push({
          value: this.year - 1 + i,
          year: this.year - 1 + i
        })
      }
      return years
    },
    monthOptions () {
      const months = []
      for (let i = 1; i <= 12; i++) {
        months.push({
          value: i,
          month: i
        })
      }
      return months
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
