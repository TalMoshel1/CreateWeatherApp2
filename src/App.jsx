import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { getLocation } from "./data/locationThunk.js";
import { getCurrent } from "./data/currentThunk.js";
import { getForecast } from "./data/forecastThunk.js";
import { useIsMobile } from "./Context/Context.jsx";
import { Header } from "./containers/Header.jsx";
import { Home } from "./pages/Home.jsx";
import FavoritesManager from './Context/FavoritesManger.jsx'
import { Favorites } from "./pages/Favorites.jsx";
import { UseGeoLocation } from "./Context/UseGeoLocation.jsx";

function App() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const current = useSelector((state) => state.current);
  const theme = useSelector((state) => state.theme);
  const geoLocation = UseGeoLocation();

  console.log()

  useEffect(() => {
    if (geoLocation.error) {
      dispatch(getLocation({ location: "tel aviv", isGeoApi: false }));
    }
    if (geoLocation.coordinates?.lat) {
      dispatch(getLocation({ location: geoLocation, isGeoApi: true }));
      return;
    }
  }, [geoLocation]);

  useEffect(() => {
    if (location.data?.Key) {
      dispatch(getCurrent(location.data.Key));
      dispatch(getForecast({ isMetric: true, cityKey: location.data.Key }));
    }
  }, [location]);

  const isMobile = useIsMobile();

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<FavoritesManager />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
