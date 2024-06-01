import { createSlice } from "@reduxjs/toolkit";

const favoritesOfLocalStorages = JSON.parse(localStorage.getItem('favorites'))

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: favoritesOfLocalStorages? favoritesOfLocalStorages: []
  },
  reducers: {
    addToFavorites: (state, action) => {
      const isAlreadyAdded = state.favorites.some(
        (f) => f.Key === action.payload.Key
      );
      if (!isAlreadyAdded) {
        state.favorites = [...state.favorites, action.payload];
        localStorage.setItem('favorites', JSON.stringify(state.favorites))
      }
      //   }
    },
    removeFromFavorites: (state, action) => {
      const filteredFavorites = state.favorites.filter((f) =>
         f.Key !== action.payload.Key
      )
      state.favorites = [...filteredFavorites];
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  }
});

export default favoritesSlice;
