<template>
  <div class="home">
    <select-month/>
    <calender/>
  </div>
</template>

<script>
import calender from '@/components/calender.vue'
import selectMonth from '@/components/select.vue'

export default {
  name: 'Home',
  components: {
    calender,
    selectMonth
  },
  mounted () {
    this.$store.dispatch('member/getMembers')
  }
}
</script>
