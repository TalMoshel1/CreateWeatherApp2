import React from "react";
import { useDispatch, useSelector } from "react-redux";
import themeSlice from "../data/themeSlice.js";
import "../styles/toggleTheme.css";
import styled from "styled-components";

export function ToggleTheme() {
  const theme = useSelector((state) => state.theme);
  const { setDefaultTheme, setDarkTheme } = themeSlice.actions;
  const dispatch = useDispatch();

  const handleThemeChange = () => {
    if (theme.darkmode) {
      dispatch(setDefaultTheme());
    } else {
      dispatch(setDarkTheme());
    }
  };

  return (
    <ToggleSliderContainer
      className={"toggle-switch"}
      onClick={handleThemeChange}
    >
      <div className={"slider"} />
    </ToggleSliderContainer>
  );
}

const ToggleSliderContainer = styled.button`
  background-color: ${(props) => props.theme.colors.lettersBig};

  .slider {
    background-color: ${(props) => props.theme.colors.lettersSmall};
    transform: ${(props) => props.theme.toggleTransform};
    transition: background-color 0.3s;
  }

  .slider:hover {
    background-color: ${(props) => props.theme.colors.toggleHover};
  }
`;
