//MediaQueries directement dans le jsx --> se servir des noms de classes

import React from "react";
import NavigationMobile from "./NavigationMobile";
import MediaQuery from "react-responsive";
import NavigationDesktop from "./NavigationDesktop";

const Header = () => {
  return (
    <div className="header">
      <MediaQuery maxWidth={767}>
        <img
          className="header__logo--mobile"
          src="../public/assets/img/icons/logo.svg"
          alt="Logo de cogip"
        />
        <button className="header__button--mobile header__button--signup">
          Sign up
        </button>
        <button className="header__button--mobile header__button--login">
          Login
        </button>
        <div className="header__menu--mobile">
          <NavigationMobile />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <img
          className="header__logo--desktop"
          src="../public/assets/img/icons/logo.svg"
          alt="Logo de cogip"
        />
        <div className="header__menu--desktop">
          <NavigationDesktop />
        </div>
        <button className="header__button--desktop header__button--signup">
          Sign up
        </button>
        <button className="header__button--desktop header__button--login">
          Login
        </button>
      </MediaQuery>
    </div>
  );
};

export default Header;
