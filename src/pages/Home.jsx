import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { MdError } from "react-icons/md";
import { Search } from "../containers/Search.jsx";
import { Current } from "../containers/Current.jsx";
import { Forecast } from "../containers/Forcast.jsx";
import "../styles/home.css";
import styled from "styled-components";
import { weatherCondition } from "../gallery/whichCurrentWeather.js";
import Sunny from "../gallery/sunnyCanva.png";
import Clearsky from "../gallery/clearSky.png";
import ShowersCanva from "../gallery/showersCanva.png";
import ThunderStorm from "../gallery/thunderstorms.jpg";
import DrearyCanva from "../gallery/drearySky.png";
import CanvaCloudsPhone from "../gallery/canvaClouds.png";

export function Home() {
  const theme = useSelector((state) => state.theme);
  const current = useSelector((state) => state.current);
  const [imgUrl, setImgUrl] = useState();

  useEffect(() => {
    if (current.data.WeatherText) {
      setImgUrl(weatherCondition(current.data.WeatherText));
    }
  }, [current]);

  useEffect(() => {
    console.log(imgUrl);
  });
  const isConnected =
    current?.fetchStatus !== "error" && current?.fetchStatus !== "";

  return (
    <HomeStyle
      className="home"
      darkmode={theme.darkmode}
      isConnected={isConnected}
    >
      {isConnected ? (
        <ContentWrapper>
          {!theme.darkmode && (
            <img
              className="imgContainer"
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

          <div className="search-current-container">
            <Search />
            <Current />
          </div>
          <Forecast />
        </ContentWrapper>
      ) : (
        <div className="noConnectionToAPI">
          <MdError className="icon" />
          <h1>No connection to API</h1>
        </div>
      )}
    </HomeStyle>
  );
}

const HomeStyle = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  // overflow-x: hidden;
  position: relative;
  width: 100%;
  height: 90svh;
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.isConnected ? "flex-start" : "center")};

  .noConnectionToAPI {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .noConnectionToAPI > h1,
  .icon {
    color: ${(props) => props.theme.colors.lettersBig};
  }

  .noConnectionToAPI > .icon {
    font-size: 3rem;
  }

  .noConnectionToAPI > .icon {
    width: 35vw;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  background-color: transparent;
  width: 100vw;
  height: fit-content;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .imgContainer {
    border: 1px solid green;
    object-fit: fill;
    position: absolute;
    width: 100%;
    height: 100%; /* Ensure it takes full height */
    left: 0;
    z-index: 0;
    object-fit: cover; /* Ensures the image covers the container */
    top: 0;
  }
`;
