import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import themeSlice from "../data/themeSlice.js";
import { styled } from "styled-components";
import "../styles/header.css";
import { useIsMobile } from "../Context/Context.jsx";
import { ToggleTheme } from "../components/ToggleTheme.jsx";
import { Animation } from "./Animation.jsx";

export function Header() {


  const location = useLocation();
  const isMobile = useIsMobile();



  return (
    <>
      <HeaderContainer className={isMobile && "sticky-header"}>
        {!isMobile && <h1 className="site-header">Tal Moshel Weather App</h1>}
        <div
          className={`list-container ${
            isMobile && "spread-header-items-evenly"
          }`}
        >
          <Link to="/" className={`${location.pathname === "/" && "homeLink"}`}>
            HOME
          </Link>
          <Link
            to="/favorites"
            className={`${location.pathname === "/favorites" && "favoritesLink"} /`}
          >
            FAVORITES
          </Link>
          <ToggleTheme />
        </div>
      </HeaderContainer>
    </>
  );
}

const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.colors.headerBackground};
  border: 1px solid ${(props) => props.theme.colors.borderColor};
  color: ${(props) => props.theme.colors.lettersBig};
  border-radius: 2px;
  position: sticky;
  top: 0;
  overflow: hidden;
  z-index: 2;

  a {
    color: ${(props) => props.theme.colors.lettersBig};
    border-bottom: 3px solid ${(props) => props.theme.colors.headerBackground};
    z-index: 1;
  }

  a:hover {
    border-bottom: 3px solid ${(props) => props.theme.colors.lettersBig};
  }

  .change-colors {
    color: ${(props) => props.theme.colors.lettersBig};
    cursor: pointer;
    transition: color;
  }

  .change-colors:hover {
    color: ${(props) => props.theme.colors.lettersSmall};
  }

  .homeLink, .favoritesLink {
    border-bottom: 3px solid ${(props) => props.theme.colors.lettersBig};

  }
`;
