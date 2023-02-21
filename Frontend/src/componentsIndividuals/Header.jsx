//MediaQueries directement dans le jsx --> se servir des noms de classes

import React from "react";
import NavigationMobile from "./NavigationMobile";
import MediaQuery from "react-responsive";
import NavigationDesktop from "./NavigationDesktop";
import Login from "./Login";

const Header = () => {
  return (
    <div className="header">
      <MediaQuery maxWidth={767}>
        <p className="header__logo--mobile">COGIP</p>
        <div className="header__button--mobile">
          <button className="header__button--signup">Sign up</button>
          <Login />
        </div>
        <div className="header__menu--mobile">
          <NavigationMobile />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={768} maxWidth={1024}>
        <p className="header__logo--desktop">COGIP</p>
        <div className="header__menu--desktop">
          <NavigationDesktop />
        </div>
        <div className="header__button--desktop">
          <button className="header__button--signup">Sign up</button>
          <Login />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1025}>
        <p className="header__logo--desktop">COGIP</p>
        <div className="header__menu--desktop">
          <NavigationDesktop />
        </div>
        <div className="header__button--desktop">
          <button className="header__button--signup">Sign up</button>
          <Login />
        </div>
      </MediaQuery>
    </div>
  );
};

export default Header;
