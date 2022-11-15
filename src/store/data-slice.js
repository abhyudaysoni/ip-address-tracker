import { createSlice } from "@reduxjs/toolkit";

const initialDataState = {};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState: initialDataState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;

export default dataSlice.reducer;
