import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getLocation } from "../data/locationThunk.js";
import { isNotEnglish } from "../helpers/isEnglish.js";
import "../styles/search.css";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

export function Search() {
  const [error, setError] = useState("");
  const [value, setValue] = useState("");
  const [isEnglishError, setIsEnglishError] = useState(false);
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);

  const getCity = (event) => {
    const value = event.target.value;
    if (!isNotEnglish(value)) {
      if (event.key === "Enter") {
        return dispatch(getLocation({ location: value, isGeoApi: false }));
      }
    }
    setIsEnglishError(true);
  };

  useEffect(() => {
    console.log("isEnglishError :", isEnglishError);
  }, [isEnglishError]);

  useEffect(() => {
    if (isNotEnglish(value)) {
      setError("english only");
    } else {
      setError("");
    }
  }, [value]);

  useEffect(() => {
    if (location.error) {
      return setError(location.error);
    }
    if (location.fetchStatus === "error") {
      return setError("Couldn't Find Location");
    }
    return setError("");
  }, [location.error, location.fetchStatus]);

  return (
    <SearchContainer className="search-section ">
      <p class="english-only">{isEnglishError && error && error}</p>
      {location.fetchStatus === "loading" && <ClipLoader />}

      <input
        className="homeSearch"
        placeholder={"search"}
        type="text"
        onKeyDown={getCity}
        onChange={(e) => setValue(e.target.value)}
      />
    </SearchContainer>
  );
}

const SearchContainer = styled.section`
  input {
    background-color: ${(props) => props.theme.colors.itemBackground};
    color: ${(props) => props.theme.colors.lettersBig};
    border: 1px solid ${(props) => props.theme.colors.lettersBig};
  }

  .search-section {
    background-color: ${(props) => props.theme.colors.background};
  }
`;
