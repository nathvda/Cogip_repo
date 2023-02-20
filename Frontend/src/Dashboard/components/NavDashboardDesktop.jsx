import React from "react";
import { Link } from "react-router-dom";
import DashLogout from "./DashLogout";

const NavDashboardDesktop = () => {
  return (
    <nav className="dash__nav--desktop">
      <Link className="dash__nav--desktop--link" to={``}>
        Dashboard
      </Link>
      <Link className="dash__nav--desktop--link" to={`invoices`}>
        Invoices
      </Link>
      <Link className="dash__nav--desktop--link" to={`companies`}>
        Companies
      </Link>

      <Link className="dash__nav--desktop--link" to={`contacts`}>
        Contacts
      </Link>
      <button className="dash__button--desktop dash__button--logout">
        <DashLogout />
      </button>
    </nav>
  );
};

export default NavDashboardDesktop;
