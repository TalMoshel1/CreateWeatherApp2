import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { CiCircleRemove } from "react-icons/ci";

import favoritesSlice from "../data/favouritesSlice.js";
import { getCurrent } from "../data/functions/getCurrent.js"; // Ensure you have this import

const ScrollContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  border:  ${(props) => props.theme.colors.borderColor};
  background-color: ${(props) => props.theme.colors.headerBackground};


  @media (orientation: landscape) {
    .& {
      width: 10%;

    }
  }
`;

const CityItem = styled.div`
  width:100%;
  border: 1px solid #eee;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  // border:  ${(props) => props.theme.colors.borderColor};
  // background-color: ${(props) => props.theme.colors.headerBackground};
  color: ${(props) => props.theme.colors.lettersBig};

  .removeCityItem:hover {
    animation: squish 200ms;
  }

  @media (orientation: landscape) {
    .& {
      // width: 25%;
    }
  }

  h2:hover {
    background-color: ${(props) => props.theme.colors.sliderBtn};
  }

  .removeCityItem {
    margin-left: 5%;
  }
`;

const SelectFavorites = ({ setFavoriteIndex }) => {
  const citiesFromLocalStorage = useSelector(
    (state) => state.favorites.favorites
  );

  const [filteredCities, setFilteredCities] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [citiesAndIndex, setCitiesAndIndex] = useState([]);

  useEffect(() => {
    if (inputValue !== "") {
      const filteredCities = citiesFromLocalStorage.filter((city) =>
        city.LocalizedName.toLowerCase().includes(inputValue.toLowerCase())
      );


      const cityAndIndex = citiesFromLocalStorage
        .map((city, index) => {
          const match = filteredCities.find(
            (filteredCity) => city.LocalizedName === filteredCity.LocalizedName
          );
          return match ? { ...city, originalIndex: index } : null;
        })
        .filter((city) => city !== null);

      if (cityAndIndex.length > 0) {
        setCitiesAndIndex(cityAndIndex)
      }

    } else {
      setCitiesAndIndex([])
    }
 
  }, [inputValue, citiesFromLocalStorage]);

  const dispatch = useDispatch();
  const { removeFromFavorites } = favoritesSlice.actions;

  const handleClickRemoveFavorite = (id) => {
    dispatch(removeFromFavorites({ Key: id }));
  };

  const handleCityItemClick = (index) => {
    setFavoriteIndex(index);
    setInputValue("");
  };

  return (
    <SelectFavoritesStyle className='SelectFavoritesStyle'>
      <input
        id="citySearch"
        className="citySearchInput"
        placeholder="Search Favourite"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <ScrollContainer className="scrollContainer">
        {citiesAndIndex.map((city) => (
          <CityItem
            className="cityItem"
            key={city.originalIndex}
            onClick={() => handleCityItemClick(city.originalIndex)}
          >
            <h2>{city.LocalizedName}</h2>
            <FaRegTrashCan
              className="removeCityItem"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering city item click
                handleClickRemoveFavorite(city.Key);
                setInputValue("");
              }}
            />
          </CityItem>
        ))}
      </ScrollContainer>
    </SelectFavoritesStyle>
  );
};

const SelectFavoritesStyle = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: ${(props) => props.theme.colors.headerBackground};


.citySearchInput{
  background-color: ${(props) => props.theme.colors.headerBackground};
}
.citySearchInput::placeholder, .citySearchInput{
  color: ${(props) => props.theme.colors.lettersBig};
}

.citySearchInput:hover {
  cursor: pointer;
  animation: squish 200ms ease-in-out;
  background-color:${(props) => props.theme.colors.background};
}

`

export default SelectFavorites;
