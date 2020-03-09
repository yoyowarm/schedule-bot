import * as moment from 'moment'
import scheduleModel from './schedule_model'
import { weekDays, schedulesModel } from './days'
import { randomSampling, randomAssigned } from './random'
import { membersFilters, scheduleFilters } from './filters'
export const schedules = JSON.parse(JSON.stringify(schedulesModel))
export const schedulesSampling = JSON.parse(JSON.stringify(schedulesModel))

export const calendar = (inputDay) => {
  const daysArr = { sun: {}, mon: {}, tur: {}, wed: {}, thu: {}, fir: {}, sat: {} }
  const currentMonthDays = moment(`${inputDay} 00:00:00`).daysInMonth()
  for (let i = 0; i < currentMonthDays; i++) {
    const newDayWeekday = moment(`${inputDay} 00:00:00`).add(i, 'days').weekday()
    daysArr[weekDays[newDayWeekday]][moment(`${inputDay} 00:00:00`).add(i, 'days').format('YYYY-MM-DD')] = scheduleModel[newDayWeekday]
  }
  return daysArr
}

export const schedule = (schedule, members) => {
  const dateLen = { sun: 0, mon: 0, tur: 0, wed: 0, thu: 0, fir: 0, sat: 0 }
  const spotsLen = { sun: 0, mon: 0, tur: 0, wed: 0, thu: 0, fir: 0, sat: 0 }
  for (const weekDay in schedule) {
    for (const date in schedule[weekDay]) {
      dateLen[weekDay] = Object.keys(schedule[weekDay]).length
      for (const spots in schedule[weekDay][date]) {
        const arr = []
        arr.push(spots)
        spotsLen[weekDay] = Object.keys(schedule[weekDay][date]).length
      }
    }
  }
  membersFilters(schedules, members)
  const list = randomSampling(weekDays, schedules, schedulesSampling, dateLen, spotsLen)
  const randomSchedule = randomAssigned(schedule, list)
  // return randomSchedule
  return scheduleFilters(randomSchedule)
}
