import { createSlice } from "@reduxjs/toolkit";

const initialInputState = { search: "", ip: "" };

const inputSlice = createSlice({
  name: "inputSlice",
  initialState: initialInputState,
  reducers: {
    changeInput(state, action) {
      state.search = action.payload;
    },
  },
});

export const { changeInput } = inputSlice.actions;

export default inputSlice.reducer;
