const dateParse = (iso_date) => {
  const currentDate = new Date();
  const leftDate = currentDate - Date.parse(iso_date);

  const daysLeft = Math.floor(leftDate / 1000 / 60 / 60 / 24)
  if (daysLeft) return `${daysLeft} days ago`

  const hoursLeft = Math.floor((leftDate / 1000 / 60 / 60) % 24)
  if (hoursLeft) return `${hoursLeft} hours ago`

  const minutesLeft = Math.floor((leftDate / 1000 / 60) % 60)
  if (minutesLeft) return `${minutesLeft} minutes ago`

  const secondsLeft = Math.floor(leftDate / 1000) % 60
  if (secondsLeft) return `${secondsLeft} seconds ago`

  return `1 seconds ago`
}

export default dateParse