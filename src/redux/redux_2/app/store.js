import { configureStore } from "@reduxjs/toolkit";
import { defaultMiddleWare } from "../middlewares/main";
import companiesReducer from "../features/companies/companiesSlice";

const store = configureStore({
  reducer: {
    companies: companiesReducer
  },
  middleware: defaultMiddleWare
})

export default store