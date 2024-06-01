import React, { useState } from "react";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { getCurrent } from "../data/functions/getCurrent.js";
import styled from "styled-components";
import "../App.css";

export const WeatherCard = ({
  city,
  onRemove,
  favoriteIndex,
  currentIndex,
  navigateToHomeWithCity,
  cityKey,
  CityItem
}) => {
  const [fetchedCity, setFetchedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchCityFromApi(cityKey, CityItem) {
    try {
      setLoading(true);
      const currentWeatherOfCity = await getCurrent(cityKey);
      const weatherData = currentWeatherOfCity[0];

      setFetchedCity({
        Key: cityKey,
        LocalizedName: CityItem,
        C: weatherData.Temperature.Metric.Value,
        F: weatherData.Temperature.Imperial.Value,
        WeatherText: weatherData.WeatherText,
        WeatherIcon: weatherData.WeatherIcon,
      });
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <main
      aria-hidden={favoriteIndex !== currentIndex}
      className="favorite-slider-favorite cardContainer"
      style={{ transform: `translateX(${-100 * favoriteIndex}%)` }}
    >
      <WeatherCardContainer className="card">
        <div className="removeAndInformationContainer">
          <FaPlus
            className="information"
            onClick={() => fetchCityFromApi(city.Key, city.LocalizedName)}
          />
          <FaRegTrashCan
            className="remove"
            onClick={() => onRemove(city.Key)}
          />
        </div>

        <h2
          className="LocalizedName"
          onClick={() => navigateToHomeWithCity(city.LocalizedName)}
        >
          {city.LocalizedName}
        </h2>

        {error && <p className="fetchingState">Error fetching the data...</p>}
        {loading && <p className="fetchingState">Loading...</p>}
        {fetchedCity && !loading && (
          <>
            <div className="imageContainer">
              <img
                className="image"
                src={`https://developer.accuweather.com/sites/default/files/${fetchedCity.WeatherIcon}-s.png`}
                alt={`${fetchedCity.WeatherIcon}`}
              />
            </div>
            <p>{fetchedCity.C} C</p>
            <p>{fetchedCity.F} F</p>
            <p>{fetchedCity.WeatherText}</p>
          </>
        )}
      </WeatherCardContainer>
    </main>
  );
};

const WeatherCardContainer = styled.section`
margin-top: 2rem;
  .fetchingState {
    color: ${(props) => props.theme.colors.lettersBig};
  }

  border-radius: 22px;

  .LocalizedName {
    transition: font-size 20ms ease-in-out;
  }

  .LocalizedName:hover,
  .LocalizedName:focus-visible {
    cursor: pointer;
    font-size: 1.1rem;
  }

  .cardContainer {
    max-height: 90%;
  }
`;
