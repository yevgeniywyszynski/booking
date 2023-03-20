import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allOptions: {
    where: "",
    startDate: new Date(),
    endDate: new Date(),
    adults: 1,
    children: 0,
    room: 1,
  },
};

export const optionsSlice = createSlice({
  name: "option",
  initialState,
  reducers: {
    updateOptions: (state, action) => {
      state.allOptions = { ...state.allOptions, ...action.payload };
    },
  },
});

export const { updateOptions } = optionsSlice.actions;

export default optionsSlice.reducer;
