<template>
  <div class="home">
    <select-month :propsYear="year" :propsMonth="month" @updateMonth="updateMonth" @updateYear="updateYear"/>
    <transition name="slide-fade">
      <calender :propsYear="year" :propsMonth="month" :members="getMembers"/>
    </transition>
  </div>
</template>

<script>
import calender from '@/components/calender.vue'
import selectMonth from '@/components/select.vue'
const moment = require('moment')

export default {
  name: 'Home',
  components: {
    calender,
    selectMonth
  },
  data () {
    return {
      year: moment().year(),
      month: `0${moment().month() + 1}`
    }
  },
  computed: {
    getMembers () {
      return this.$store.state.member.members || []
    }
  },
  methods: {
    updateMonth (val) {
      this.month = `0${val}`
    },
    updateYear (val) {
      this.year = val
    }
  },
  mounted () {
    // this.$store.dispatch('member/getMembers')
  }
}
</script>

<style lang="scss" scoped>
  .slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>
