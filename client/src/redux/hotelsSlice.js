import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  loading: false,
};

export const getHotels = createAsyncThunk("hotels/getHotels", async () => {
  const res = await fetch("http://localhost:3003/api/hotels/");
  const data = await res.json();
  console.log(data);
  return data;
});

export const getSearchHotel = createAsyncThunk(
  "hotels/getSearchHotel",
  async (params) => {
    const res = await fetch(
      `http://localhost:3003/api/search/hotels?where=${params}`
    );
    const data = await res.json();
    console.log(data);
    return data;
  }
);

export const hotelsSlice = createSlice({
  name: "hotels",
  initialState,
  reducers: {
    showAvailableHotels: (state) => {
      const availableHotelsList = state.all.filter((hotel) => hotel.available);
      console.log("storeAvailableListHotels", availableHotelsList);
    },
  },
  extraReducers: {
    [getHotels.pending]: (state) => {
      state.loading = true;
    },
    [getHotels.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.all = payload;
    },
    [getHotels.rejected]: (state) => {
      state.loading = false;
    },
    [getSearchHotel.pending]: (state) => {
      state.loading = true;
    },
    [getSearchHotel.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.all = payload;
    },
    [getSearchHotel.rejected]: (state) => {
      state.loading = false;
    },
  },
});

export const { availableHotelsList } = hotelsSlice.actions;

export default hotelsSlice.reducer;
