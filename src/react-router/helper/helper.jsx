import { Fragment } from "react"

export const genDays = () => {
  const days = []
  for (let i = 1; i < 32; i++) {
    days.push((
      <Fragment key={i}>
        <option value={i}>{i}</option>
      </Fragment>
    ))
  }
  return days
}

export const genYears = () => {
  const date = []
  const curDate = new Date().getFullYear()
  const minDate = curDate - 118;
  for (let i = minDate; i <= curDate; i++) {
    date.push((
      <Fragment key={i}>
        <option value={i}>{i}</option>
      </Fragment>
    ))
  }
  return date
}

const months = [
  "January", 
  "February", 
  "March", 
  "April", 
  "May", 
  "June", 
  "July", 
  "August", 
  "September", 
  "October", 
  "November", 
  "December"
]

export const genMonths = () => {
  const values = []
  for (let i = 0; i < months.length; i++) {
    values.push((
      <Fragment key={i}>
        <option value={months[i]}>{months[i]}</option>
      </Fragment>
    ))
  }
  return values
}