export const membersFilters = (schedules, members) => {
  members.map(member => {
    for (const date in member.allow) {
      for (const period in member.allow[date]) {
        if (member.allow[date][period] > 0) {
          for (var i = 0; i < member.allow[date][period]; i++) {
            schedules[date][period].push(member)
          }
        }
      }
    }
  })
  for (const date in schedules) {
    for (const period in schedules[date]) {
      schedules[date][period].sort((a, b) => {
        return Math.random() - 0.5
      })
    }
  }
}

export const scheduleFilters = (schedule) => {
  const arr = {}
  for (const weekDay in schedule) {
    for (const date in schedule[weekDay]) {
      for (const spot in schedule[weekDay][date]) {
        for (const period in schedule[weekDay][date][spot]) {
          if (typeof schedule[weekDay][date][spot][period] !== 'string') {
            if (!arr[weekDay]) arr[weekDay] = {}
            if (!arr[weekDay][date]) arr[weekDay][date] = {}
            if (!arr[weekDay][date][period]) arr[weekDay][date][period] = []
            arr[weekDay][date][period] = arr[weekDay][date][period].concat(schedule[weekDay][date][spot][period])
          }
        }
      }
    }
  }
  for (const weekDay in arr) {
    for (const date in arr[weekDay]) {
      for (const period in arr[weekDay][date]) {
        const set = new Set()
        arr[weekDay][date][period] = arr[weekDay][date][period].filter(item => !set.has(item.name) ? set.add(item.name) : false)
      }
    }
  }

  for (const weekDay in schedule) {
    for (const date in schedule[weekDay]) {
      for (const spot in schedule[weekDay][date]) {
        for (const period in schedule[weekDay][date][spot]) {
          if (typeof schedule[weekDay][date][spot][period] !== 'string') {
            schedule[weekDay][date][spot][period] = []
            for (let i = 0; i < 4; i++) {
              if (arr[weekDay][date][period].length > 0) {
                schedule[weekDay][date][spot][period].push(arr[weekDay][date][period][0])
                arr[weekDay][date][period].splice(0, 1)
              }
            }
          }
        }
      }
    }
  }
  return schedule
}
