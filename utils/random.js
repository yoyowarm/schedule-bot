export const randomSampling = (weekDays, schedules, schedulesSampling, dateLen, spotsLen) => {
  weekDays.map((day) => {
    for (var i = 0; i <= dateLen[day] * spotsLen[day] * 4; i++) {
      const r = parseInt(Math.random() * dateLen[day] * spotsLen[day] * 4)
      for (const period in schedules[day]) {
        if (!schedulesSampling[day][period].includes(schedules[day][period][r]) && schedules[day][period][r]) {
          schedulesSampling[day][period].push(schedules[day][period][r])
          schedules[day][period].splice(r, 1)
        } else if (schedules[day][period][0]) {
          schedulesSampling[day][period].push(schedules[day][period][0])
          schedules[day][period].splice(0, 1)
        }
      }
    }
    for (let i = 0; i < dateLen[day] * spotsLen[day] * 4; i++) {
      const r = parseInt(Math.random() * dateLen[day] * spotsLen[day] * 4)
      for (const period in schedules[day]) {
        if (schedulesSampling[day][period].length < dateLen[day] * spotsLen[day] * 4 && !schedules[day][period].length < 1) {
          if (schedules[day][period][r]) {
            schedulesSampling[day][period].push(schedules[day][period][r])
            schedules[day][period].splice(r, 1)
          } else {
            schedulesSampling[day][period].push(schedules[day][period][0])
            schedules[day][period].splice(0, 1)
          }
        }
      }
    }
  })
  return schedulesSampling
}
export const randomAssigned = (schedule, list) => {
  const copyList = JSON.parse(JSON.stringify(list))
  const copySchedule = JSON.parse(JSON.stringify(schedule))
  for (const weekDay in copySchedule) {
    for (const date in copySchedule[weekDay]) {
      for (const spot in copySchedule[weekDay][date]) {
        for (const period in copySchedule[weekDay][date][spot]) {
          if (typeof copySchedule[weekDay][date][spot][period] !== 'string') {
            for (let i = 0; i < 4; i++) {
              if (copyList[weekDay][period]) {
                if (copyList[weekDay][period][0] && !copySchedule[weekDay][date][spot][period].some(member => { return member.name === copyList[weekDay][period][0].name })) {
                  copySchedule[weekDay][date][spot][period].push(copyList[weekDay][period][0])
                  copyList[weekDay][period].splice(0, 1)
                }
              }
            }
          }
        }
      }
    }
  }
  return copySchedule
}
