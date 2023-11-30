import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: []
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {

  }
})

export default todosSlice.reducer