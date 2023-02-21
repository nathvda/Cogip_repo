import React from "react";
import { NavLink } from "react-router-dom";

const NavigationDesktop = () => {
  return (
    <nav className="header__nav--desktop">
      <NavLink
        className={(nav) =>
          (nav.isActive ? "nav-active" : "") + " header__nav--desktop--link"
        }
        to={"/"}
      >
        Home
      </NavLink>
      <NavLink
        className={(nav) =>
          (nav.isActive ? "nav-active" : "") + " header__nav--desktop--link"
        }
        to={`/invoices`}
      >
        Invoices
      </NavLink>
      <NavLink
        className={(nav) =>
          (nav.isActive ? "nav-active" : "") + " header__nav--desktop--link"
        }
        to={`/companies`}
      >
        Companies
      </NavLink>

      <NavLink
        className={(nav) =>
          (nav.isActive ? "nav-active" : "") + " header__nav--desktop--link"
        }
        to={`/contacts`}
      >
        Contacts
      </NavLink>
    </nav>
  );
};

export default NavigationDesktop;
