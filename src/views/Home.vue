<template>
  <div class="home">
    <select-month/>
    <calender :getMembers="getMembers"/>
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
  computed: {
    getMembers () {
      return this.$store.state.member.members || []
    }
  },
  mounted () {
    this.$store.dispatch('member/getMembers')
  }
}
</script>
