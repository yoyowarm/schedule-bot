<template>
  <div class="calender">
    <div class="weekDay" v-for="(weekDay,index) in Object.keys(assignedSchedule)" :key="index">
      <p>{{WEEKDAYS[weekDay]}}</p>
      <div class="date" v-for="(date, index) in Object.keys(assignedSchedule[weekDay])" :key="index">
        <p class="days">{{date}}</p>
        <div class="spot" v-for="(spot, index) in Object.keys(assignedSchedule[weekDay][date])" :key="index">
          <p>{{spot}}</p>
          <div v-for="(period, index) in Object.keys(assignedSchedule[weekDay][date][spot])" :key="index">
            <p v-if="period !== 'name'">{{PERIOD[period]}}</p>
            <span v-for="(member, index) in assignedSchedule[weekDay][date][spot][period]" :key="index">
              {{member.name}}
            </span>
          </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { calendar, schedule } from '../../utils/calendar'
import { PERIOD, WEEKDAYS } from '../../utils/days'
const moment = require('moment')
export default {
  props: {
    members: Array,
    propsYear: Number,
    propsMonth: String
  },
  data () {
    return {
      value: new Date(moment().format()),
      inputDay: '2020-03-01',
      PERIOD,
      WEEKDAYS
    }
  },
  // watch: {
  //   propsYear () {
  //     this.assignedSchedule()
  //   }
  // },
  computed: {
    assignedSchedule: {
      get () {
        if (this.members.length > 0) {
          return schedule(this.getCalendar(), this.members)
        } else {
          return {}
        }
      },
      set () {}
    }
  },
  methods: {
    getCalendar () {
      console.log(`${this.propsYear}-${this.propsMonth}-01`)
      return calendar(`${this.propsYear}-${this.propsMonth}-01`)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
p {
  margin: 3px auto
}
.calender {
  display: flex
}
.is-selected {
  color: red
}
.weekDay {
  display: inline-block;
  margin: 10px
}
.date {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 5px;
  margin: 10px auto;
  .days {
    font-size: 0.6rem
  }
}
.spot {
  margin: 5px
}
</style>
