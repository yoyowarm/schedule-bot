<template>
  <div>
      <el-select v-model="yearModel" placeholder="请选择">
      <el-option
        v-for="item in yearOptions"
        :key="item.value"
        :label="item.year"
        :value="item.value">
      </el-option>
    </el-select>
    <el-select v-model="monthModel" placeholder="请选择">
      <el-option
        v-for="item in monthOptions"
        :key="item.value"
        :label="item.month"
        :value="item.value">
      </el-option>
    </el-select>
    <el-button @click="refresh" type="primary">refresh</el-button>
  </div>

</template>

<script>

export default {
  props: {
    propsYear: Number,
    propsMonth: Number
  },
  data () {
    return {
    }
  },
  computed: {
    yearModel: {
      get () {
        return this.propsYear
      },
      set (val) {
        this.$emit('updateYear', val)
      }
    },
    monthModel: {
      get () {
        return this.propsMonth
      },
      set (val) {
        this.$emit('updateMonth', val)
      }
    },
    yearOptions () {
      const years = []
      for (let i = 0; i < 5; i++) {
        years.push({
          value: this.yearModel - 1 + i,
          year: this.yearModel - 1 + i
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
  },
  methods: {
    async refresh () {
      const refresh = await this.$store.dispatch('member/getMembers')
      console.log(refresh, this.$store.state.member.members)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
