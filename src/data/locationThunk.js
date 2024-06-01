import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dummyLocation } from "./objects/dummy-data.js";
import { initializeLocation } from "./objects/intializers.js";
import {getLocationUrl} from './functions/getLocationUrl.js'

export const getLocation = createAsyncThunk(
  "fetch-location",
  async ({ location, isGeoApi }, { rejectWithValue }) => {
    try {
      const url = getLocationUrl(location, isGeoApi);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);


const locationSlice = createSlice({
  name: "location",
  initialState: {
    data: {},
    fetchStatus: "",
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLocation.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          if (action.payload.length > 0 ) {
            state.fetchStatus = 'success';
            state.error = null; 
            state.data = action.payload[0];

          } else {
            console.log('!')
            state.fetchStatus = 'error'
            state.error = "can't find city, please try again"
          }
        } if (action.payload.Key) {
          console.log('!')
          state.fetchStatus = 'success';
          state.error = null; 
          state.data = action.payload

        }else {
          console.log(action.payload.Message)

          state.error = action.payload.Message
        }
      }) 
      .addCase(getLocation.pending, (state, action) => {
        state.fetchStatus = 'loading';

      })
      .addCase(getLocation.rejected, (state, action) => {
                  console.log('!')

        state.fetchStatus = 'Failed to fetch';
        state.error = 'please try again later'
      });
  },
});

export default locationSlice;