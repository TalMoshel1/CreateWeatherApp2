import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getLocation } from "../data/locationThunk.js";
import favoritesSlice from "../data/favouritesSlice.js";
import "../styles/card.css";
import styled from "styled-components";
import themeSlice from "../data/themeSlice.js";

export function Card({
  Icon,
  IconPhrase,
  date,
  minValue,
  maxValue,
  unit,
  localizedName,
  value,
  weatherText,
  id,
  isNoFavorites,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { removeFromFavorites } = favoritesSlice.actions;

  const handleClickRemoveFavorite = () => {
    dispatch(removeFromFavorites({ Key: id }));
  };

  const homeOtherCity = () => {
    dispatch(getLocation({location: localizedName, isGeoApi: false}))
    navigate("/");
  };

  const NavigateHome = () => {
    navigate("/");
  };

  if (isNoFavorites) {
    return (
      <AddFavorites onClick={NavigateHome} className="add-favorites">
        Click to Add favorites!
      </AddFavorites>
    );
  }

  if (!date) {
    return (
      <CardTheme className={"favorite"}>
        {/* <img src="https://developer.accuweather.com/sites/default/files/14-s.png" alt="" /> */}

        <div onClick={homeOtherCity} className="favorite-city">
          <div>
            <h1 className="city">{localizedName}</h1>
            <h2 className="temperature">
              {value} {unit}
            </h2>
            <h2 className="weather-text">{weatherText}</h2>
          </div>
        </div>

        <button className="remove-favorite" onClick={handleClickRemoveFavorite}>
          remove favorite
        </button>
      </CardTheme>
    );
  }

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = new Date(date).getDay();

  const icon = Icon > 10 ? Icon : `0${Icon}`;

  return (
    <CardTheme className={"weather-day"}>
      <img
        src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`}
        alt={IconPhrase}
      />
      <h1 className="day">{daysOfWeek[day]}</h1>
      <h2 className="temperature">
        {minValue}/{maxValue} {unit}
      </h2>
      <h2 className="icon-phrase">{IconPhrase}</h2>
    </CardTheme>
  );
}

const CardTheme = styled.section`
  background-color: ${(props) => props.theme.colors.itemBackground};
  color : ${(props) => props.theme.colors.itemBackground};

  border: 1px solid ${(props) => props.theme.colors.borderColor};

  .temperature, .day, .favorite-city {
    color: ${(props) => props.theme.colors.lettersBig};

  }
  .icon-phrase, .weather-text{
    color: ${(props) => props.theme.colors.lettersSmall};

  }

  .favorite-city {
    display: flex;
    flex-direction: column;
    transition: font-size: 0.5s
    width:180px
  }
  
  .favorite-city:hover { 
    cursor: pointer;
    font-size: 1.5rem;

  }
  .remove-favorite {
    transition: background-color 0.3s;
  }

  .remove-favorite:hover {
    background-color:grey;
    cursor: pointer;
    

  }
`;

const AddFavorites = styled.button`
  all: initial;
  font-family: "Poppins", sans-serif;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme.colors.lettersBig};
  font-size: 1rem;
  translation: color 0.3s;
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  border-radius: 22px;
  padding: 20px;
  margin-top: 10svh;
  text-align: center;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  :hover {
    color: ${(props) => props.theme.colors.lettersSmall};
  }

  .add-favorite:hover{
    animation: squish 200ms;
  }

`;
