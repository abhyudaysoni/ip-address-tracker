import { configureStore } from "@reduxjs/toolkit";
import inputReducer from "./input-slice";
import dataReducer from "./data-slice";

export const store = configureStore({
  reducer: {
    searchInput: inputReducer,
    data: dataReducer,
  },
});
