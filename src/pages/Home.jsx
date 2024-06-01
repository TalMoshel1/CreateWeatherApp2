import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useIsMobile } from "../Context/Context.jsx";
import { MdError } from "react-icons/md";
import { Search } from "../containers/Search.jsx";
import { Current } from "../containers/Current.jsx";
import { Forecast } from "../containers/Forcast.jsx";
import "../styles/home.css";
import styled from "styled-components";
import { weatherCondition } from "../gallery/whichCurrentWeather.js";
import Sunny from "../gallery/sunny.jpg";
import Clouds from "../gallery/clouds.jpg";
import RealisticSunny from "../gallery/realistic.jpg";
import CanvaClouds from "../gallery/canvaClouds.png";
import CanvaCloudsPhone from "../gallery/canvaCloudsPhone.png";

export function Home() {
  // const isMobile = useIsMobile();
  const theme = useSelector((state) => state.theme);
  const current = useSelector((state) => state.current);
  const [imgUrl, setImgUrl] = useState();

  console.log(current);

  useEffect(() => {
    if (current.data.WeatherText) {
      console.log(
        weatherCondition(current.data.WeatherText),
        current.data.WeatherText
      );
      // setImgUrl(weatherCondition('thunderstorms.jpg'));
      setImgUrl(weatherCondition(current.data.WeatherText));
    }
  }, [current]);

  useEffect(() => {
    console.log(imgUrl, Sunny);
  }, [imgUrl]);

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
          {/* <CanvaCloudsPhone/> */}
          <img
            className="imgContainer"
            src={`${
              imgUrl === "sunny.jpg"
                ? Sunny
                : imgUrl === "dreary"
                ? ""
                : imgUrl === "clouds" || imgUrl === "cloudy"
                ? Clouds
                : imgUrl === "showers"
                ? ""
                : ""
            }`}
            alt=""
          />
          <div className="search-current-container">
            <Search />
            <Current />
            {/* {isMobile && <AddToFavorites />} */}
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

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imgUrl});
  background-size: 100% 100%; /* Adjusted */
  background-position: center;
  z-index: -1;
`;

const HomeStyle = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  overflow-x: hidden;
  position: relative;
  width: 100%;
  min-height: 80%;
  overflow: hidden;
  justify-content: ${(props) => (props.isConnected ? "flex-start" : "center")};
  // margin-top: ${(props) => (props.isConnected ? "10svh" : "")};

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
  // min-height: 100%;
  min-height: 90svh;
  overflow: hidden;

  .imgContainer {
    border: 1px solid green;
    position: absolute;
    min-height: 100%;
    width: 100vw;
    left: 0;
    z-index: 1;
  }
`;
