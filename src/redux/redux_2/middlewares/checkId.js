import { nanoid } from "@reduxjs/toolkit"

const checkId = (store) => (next) => (action) => {
  if (action.type === "companies/addCompany") {
    const companies = store.getState().companies
    const hasId = companies.some(company => company.id === action.payload.id)
    if (hasId) {
      next({
        ...action,
        payload: {
          ...action.payload,
          id: nanoid()
        }
      })
      return
    }
  }
  next(action)
}

export default checkId