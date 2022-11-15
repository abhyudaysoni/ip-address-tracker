import { createSlice } from "@reduxjs/toolkit";

const initialInputState = { search: "", ip: "" };

const inputSlice = createSlice({
  name: "inputSlice",
  initialState: initialInputState,
  reducers: {
    changeInput(state, action) {
      state.search = action.payload;
    },
    setIp(state, action) {
      state.ip = action.payload;
    },
  },
});

export const { changeInput, setIp } = inputSlice.actions;

export default inputSlice.reducer;
