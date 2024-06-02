import React from "react";
import SelectFavorite from "../components/SelectFavorite";
import FavoritesSlider from "../components/favouritesSlider";
import { useFavoriteIndex } from "../Context/UseFavoriteIndex";
import styled from "styled-components";
import { Card } from "../components/Card.jsx";
import favoritesSlice from "../data/favouritesSlice.js";
import { useSelector } from "react-redux";

const FavoritesManager = () => {
  const CitiesFromLocalStorage = useSelector(
    (state) => state.favorites.favorites
  );

  const current = useSelector((state) => state.current);

  const isConnected =
    current?.fetchStatus !== "error" && current?.fetchStatus !== "";

  const {
    favoriteIndex,
    setFavoriteIndex,
    showNextFavorite,
    showPreviousFavorite,
  } = useFavoriteIndex();

  return (
    <FavoritesContainer className="?">
      <SelectFavoriteContainer className="?">
        <SelectFavorite
          favoriteIndex={favoriteIndex}
          setFavoriteIndex={setFavoriteIndex}
        />
      </SelectFavoriteContainer>

      <SliderContainer>
        {CitiesFromLocalStorage.length ? (
          <FavoritesSlider
            favoriteIndex={favoriteIndex}
            setFavoriteIndex={setFavoriteIndex}
            showNextFavorite={showNextFavorite}
            showPreviousFavorite={showPreviousFavorite}
          />
        ) : (
          <Card isNoFavorites={true} />
        )}
      </SliderContainer>
    </FavoritesContainer>
  );
};

const SliderContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  max-width: 100vw;
  height: 80%;
  margin: 0 auto;
  min-width: 55%;
  width: 100%;
  aspect-ratio: 10 / 6;
  display: flex;
  justify-content: center;
  margin-top: 10svh;

  @media (orientation: portrait) {
    // width: 55%;
  }
`;

const FavoritesContainer = styled.section`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  height: 100svh;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  // margin-top: ${(props) => (props.isConnected ? "10svh" : "")};
  // margin-top: 10svh;
`;

const SelectFavoriteContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  overscroll-behavior: contain;
  // margin-top: 2.25rem;
  margin-top: 4.5rem;
  border-radius: 22px;
  top: 10svh;
  position: absolute;
  width: 50%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (orientation: portrait) {
    width: 45%;
  }
`;

export default FavoritesManager;
