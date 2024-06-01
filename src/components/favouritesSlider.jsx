import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getLocation } from "../data/locationThunk.js";
import favoritesSlice from "../data/favouritesSlice.js";
import { FaRegCircle, FaRegCircleDot } from "react-icons/fa6";
import { LuChevronLeftCircle, LuChevronRightCircle } from "react-icons/lu";
import { WeatherCard } from "./WeatherCard";
import "../App.css";


export const FavoritesSlider = ({
  favoriteIndex,
  setFavoriteIndex,
  showNextFavorite,
  showPreviousFavorite,
}) => {

  const CitiesFromLocalStorage = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('CitiesFromLocalStorage :', CitiesFromLocalStorage)

  const { removeFromFavorites } = favoritesSlice.actions;


  const handleClickRemoveFavorite = (id) => {
    dispatch(removeFromFavorites({ Key: id }));
  };

  const homeOtherCity = (localizedName) => {
    dispatch(getLocation(localizedName));
    navigate("/");
  };

  return (
    <FavoriteSlide aria-label="Favorites Slider">
      <div
      className='weatherCardContainer'
        style={{
          maxWidth: "100%",
          width: "75%",
          height: "90%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {CitiesFromLocalStorage.map((c, i) => (
          <WeatherCard
            navigateToHomeWithCity={() => homeOtherCity(c.localizedName)}
            key={c.Key}
            city={c}
            onRemove={handleClickRemoveFavorite}
            favoriteIndex={favoriteIndex}
            currentIndex={i}
          />
        ))}
      </div>

      <button
        className="favorite-slider-btn"
        onClick={() => showPreviousFavorite(CitiesFromLocalStorage.length)}
        style={{ left: 0 , padding: '0.5rem'}}
        aria-label="View Previous Favorite"
      >
        <LuChevronLeftCircle aria-hidden />
      </button>
      <button
        className="favorite-slider-btn"
        onClick={() => showNextFavorite(CitiesFromLocalStorage.length)}
        style={{ right: 0,padding: '0.5rem' }}
        aria-label="View Next Favorite"
      >
        <LuChevronRightCircle aria-hidden />
      </button>

      <DotsContainer

      >
        {CitiesFromLocalStorage.map((_, index) => (
          <button
            key={index}
            className="favorite-slider-dot-btn"
            onClick={() => setFavoriteIndex(index)}
            aria-label={`View Favorite ${index}`}
          >
            {index === favoriteIndex ? (
              <FaRegCircleDot aria-hidden />
            ) : (
              <FaRegCircle aria-hidden />
            )}
          </button>
        ))}
      </DotsContainer>
    </FavoriteSlide>
  );
};

const DotsContainer = styled.div`

@media (orientation: landscape) {
  
    bottom: 7.5rem;
}

@media (orientation: portrait) {
  bottom: 6rem;

  }

  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: .25rem;
  
  `

  

const FavoriteSlide = styled.section`


  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${(props) => props.theme.colors.lettersBig};


  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
    
  .favorite-slider-favorite {
    width: 100%;
    height: 100%;
    display: block;
    background-color: ${(props) => props.theme.colors.background};
    flex-shrink: 0;
    flex-grow: 0;
    transition: transform 300ms ease-in-out;
  }

  .favorite-slider-btn {
    all: unset;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    padding: 0.2rem;
    cursor: pointer;
    transition: background-color 100ms ease-in-out;
  }

  .favorite-slider-btn:hover,
  .favorite-slider-btn:focus-visible {
    background-color: ${(props) => props.theme.colors.sliderBtn};
  }

  .favorite-slider-btn:hover > *,
  .favorite-slider-btn:focus-visible {
    animation: squish 200ms ease-in-out;
  }

  .favorite-slider-btn > * {
    stroke: ${(props) => props.theme.colors.stroke};
    fill: ${(props) => props.theme.colors.fill};
    width: 2rem;
    height: 2rem;
  }

  .favorite-slider-dot-btn {
    all: unset;
    display: block;
    cursor: pointer;
    width: 1rem;
    height: 1rem;
    transition: background-color 100ms ease-in-out;
    transition: scale 100ms ease-in-out;
  }

  .favorite-slider-dot-btn > * {
    stroke: ${(props) => props.theme.colors.stroke};
    fill: ${(props) => props.theme.colors.fill};
    height: 100%;
    width: 100%;
  }

  .favorite-slider-dot-btn:hover,
  .favorite-slider-dot-btn:focus-visible {
    scale: 1.2;
  }

  .favorite-slider-dot-btn:focus-visible,
  .favorite-slider-btn:focus-visible {
    outline: auto;
  }

  .information:hover {
    cursor: pointer;
  }
  @media (orientation: portrait) {
    .card {
      width: 100%;
      height: 60svh;
    }
  }

  @media (orientation: landscape) {
    .card {
      width: 35vw;
      height: 60svh;
    }
  }
  .card {
    border: 1px solid black;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${(props) => props.theme.colors.headerBackground};
  }

  .cardContainer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .removeAndInformationContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .LocalizedName {
    flex-grow: 1;
    margin: 1rem;
  }

  .information:hover,
  .remove:hover,
  .remove:focus-visible {
    cursor: pointer;
    animation: squish 200ms ease-in-out;
  }

  .image {
    scale: 3;
  }

  .imageContainer {
    flex-grow: 1;
  }
`;

export default FavoritesSlider;
