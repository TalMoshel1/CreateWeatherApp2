import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyForecast } from "./objects/dummy-data.js";
import { initializeForecast } from "./objects/intializers.js";
import { getForecastUrl } from "./functions/getForecastUrl.js";

export const getForecast = createAsyncThunk(
  "fetch-forecast",
  async ({ isMetric, cityKey }) => {
    try {
      const url = getForecastUrl(isMetric, cityKey);
      const response = await fetch(url);
      return response.json();
    } catch (e) {
      throw new Error(e);
    }
  }
);



const forecastSlice = createSlice({
  name: 'forecast',
  initialState: {
    data: {},
    fetchStatus: '',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecast.fulfilled, (state, action) => {
        if (!action.payload) {
          state.error = 'cant find forecast data, please try again later!';
          return
        } else {
          state.data = action.payload;
          state.error = null
        }
      })
      .addCase(getForecast.pending, (state, action) => {
        state.data = action.payload;
        state.error = "loading";
        state.fetchStatus = "loading";
      })
      .addCase(getForecast.rejected, (state, action) => {
        state.error = "can't find display forecast, please try later!!!";
      });
  },
});

export default forecastSlice;
