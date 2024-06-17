import React, { useEffect, useState } from "react";
import { FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { getCurrent } from "../data/functions/getCurrent.js";
import styled from "styled-components";
import "../App.css";
import Sunny from "../gallery/sunnyCanva.png";
import Clearsky from "../gallery/clearSky.png";
import ShowersCanva from "../gallery/showersCanva.png";
import ThunderStorm from "../gallery/thunderstorms.jpg";
import DrearyCanva from "../gallery/drearySky.png";
import CanvaCloudsPhone from "../gallery/canvaCloudsPhone.png";
import {weatherCondition} from '../gallery/whichCurrentWeather.js'


export const WeatherCard = ({
  city,
  onRemove,
  favoriteIndex,
  currentIndex,
  navigateToHomeWithCity,
  cityKey,
  CityItem,
}) => {
  const [fetchedCity, setFetchedCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    if (fetchedCity?.WeatherText) {
      setImgUrl(weatherCondition(fetchedCity.WeatherText));
    }
  }, [fetchedCity]);



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

      {imgUrl && (
          <FavoriteImage
          src={
            imgUrl === "sunny.jpg"
              ? Sunny
              : imgUrl === "clouds.jpg" || imgUrl === "cloudy.jpg"
              ? CanvaCloudsPhone
              : imgUrl === "dreary"
              ? DrearyCanva
              : imgUrl === "showers"
              ? ShowersCanva
              : imgUrl === "clear"
              ? Clearsky
              : imgUrl === "thunderstorms" && ThunderStorm
          }
          alt=""
        />
        )}

        <div className="favoriteContent">
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
            <p>{fetchedCity.C} C</p>
            <p>{fetchedCity.F} F</p>
            <p>{fetchedCity.WeatherText}</p>
          </>
        )}
        </div>
        
      </WeatherCardContainer>
    </main>
  );
};

const FavoriteImage = styled.img`
      width: 100%;
      height:100%;
    object-fit: fill; 
    position:absolute;
    z-index:0;
    border-radius: inherit;


`;

const WeatherCardContainer = styled.section`

background-color: url('../gallery/canvaClouds.png')
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
    background-color:pink;
  }

  .favoriteContent {
  padding:2rem;
  z-index:1;
  }
`;
