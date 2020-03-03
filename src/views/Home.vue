<template>
  <div class="home">
    <calender msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import calender from '@/components/calender.vue'

export default {
  name: 'Home',
  components: {
    calender
  }
}
</script>
