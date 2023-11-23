const addDate = () => (next) => (action) => {
  if (action.type === "companies/addCompany") {
    next({
      ...action,
      payload: {
        ...action.payload,
        date: new Date().toISOString()
      }
    })
    return
  }
  next(action)
}

export default addDate