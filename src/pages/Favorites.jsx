import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../components/Card";
import { FavoritesSlider } from "../components/favouritesSlider";
import SelectFavorite from '../components/SelectFavorite';
import "../styles/favorites.css";
import styled from "styled-components";

export function Favorites({
  favoriteIndex,
  setFavoriteIndex,
  showNextFavorite,
  showPreviousFavorite,
}) {
  const favorites = useSelector((state) => state.favorites.favorites);
  console.log('setFavoriteIndex: ',)
  if (favorites.length === 0) {
    return (
      <FavoritesContainer>
        <Card isNoFavorites={true} />
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer className="favorite-container">
      <SelectFavorite setFavoriteIndex={setFavoriteIndex} />
      <SliderContainer className="imageSliderContainer">
        <FavoritesSlider
          CitiesFromLocalStorage={favorites}
          favoriteIndex={favoriteIndex}
          setFavoriteIndex={setFavoriteIndex}
          showNextFavorite={showNextFavorite}
          showPreviousFavorite={showPreviousFavorite}
        />
      </SliderContainer>
    </FavoritesContainer>
  );
}

const SliderContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  max-width: 100vw;
  height: 100svh;
  margin: 0 auto;
  width: 100%;
  aspect-ratio: 10 / 6;
  display: flex;
  justify-content: center;
`;

const FavoritesContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  height: 100svh;
  align-items: center;
  width: 100%;
  align-content: center;
  gap: 1em;
  margin-top: 10svh;
`;
