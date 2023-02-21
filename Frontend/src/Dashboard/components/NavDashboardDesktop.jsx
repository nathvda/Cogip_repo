import React from "react";
import { Link } from "react-router-dom";
import DashLogout from "./DashLogout";

const NavDashboardDesktop = (props) => {
  return (
    <nav className="dash__nav--desktop">
      <img src="../../../public/assets/img/user/user2_henry.webp" className="dash__nav--desktop--userpic"></img>
      <h4 className="dash__nav--desktop--username">{props.name}</h4>
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
      <div className="dash__button--desktop dash__button--logout">
        <DashLogout />
      </div>
    </nav>
  );
};

export default NavDashboardDesktop;
