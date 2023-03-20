import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import hotelsSliceReducer from "./hotelsSlice";
import optionsSliceReducer from "./optionsSlice";

const store = configureStore({
  reducer: {
    hotels: hotelsSliceReducer,
    options: optionsSliceReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
