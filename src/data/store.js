import  {configureStore} from '@reduxjs/toolkit'
import favoritesSlice from './favouritesSlice.js'
import locationSlice from '../data/locationThunk.js'
import currentWeatherSlice from '../data/currentThunk.js'
import forecastSlice from '../data/forecastThunk.js'
import themeSlice from './themeSlice.js'



const store = configureStore({
    reducer: {
        favorites: favoritesSlice.reducer,
        location: locationSlice.reducer,
        current: currentWeatherSlice.reducer,
        forecast: forecastSlice.reducer,
        theme: themeSlice.reducer,
        }
})

export default store
