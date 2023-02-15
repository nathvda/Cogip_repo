import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <nav className="header__login">
      <button
        className="header__button--login"
        onClick={() => setIsOpen(false)}
      >
        Login
      </button>
      <div className="header__login--open">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />
        <input
          className="header__login--open--submit"
          type="submit"
          value="Log in"
        />
      </div>
    </nav>
  ) : (
    <button className="header__button--login" onClick={() => setIsOpen(true)}>
      Login
    </button>
  );
};

export default Login;
