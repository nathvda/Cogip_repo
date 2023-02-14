//MediaQueries directement dans le jsx --> se servir des noms de classes

import React from "react";
import NavigationMobile from "./NavigationMobile";
import MediaQuery from "react-responsive";
import NavigationDesktop from "./NavigationDesktop";

const Header = () => {
  return (
    <div className="header">
      <MediaQuery maxWidth={767}>
        <p className="header__logo--mobile">COGIP</p>
        <div className="header__button--mobile">
          <button className="header__button--signup">Sign up</button>
          <button className="header__button--login">Login</button>
        </div>
        <div className="header__menu--mobile">
          <NavigationMobile />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={768}>
        <p className="header__logo--desktop">COGIP</p>
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
