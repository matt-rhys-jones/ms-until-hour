const msUntilHour = (inputDate, targetHour) => {
  if (!isValidDate(inputDate)) {
    throw Error('You must provide an instance of Date() as the first argument')
  }

  if (!isValidTargetHour(targetHour)) {
    throw Error('You must provide a target hour between 0 and 24 as the second argument')
  }

  let targetDate = new Date()

  if (inputDate.getHours() >= targetHour) {
    targetDate.setDate(targetDate.getDate() + 1)
  }

  targetDate.setHours(targetHour)
  targetDate.setMinutes(0)
  targetDate.setSeconds(0)
  targetDate.setMilliseconds(0)

  return targetDate - inputDate
}

const isValidDate = date => {
  return date && date instanceof Date
}

const isValidTargetHour = targetHour => {
  return targetHour !== undefined && Number.isInteger(targetHour) && targetHour >= 0 && targetHour <= 23
}

export default msUntilHour
