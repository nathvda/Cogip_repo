import React from "react";
import { Link } from "react-router-dom";

const NavDashboardDesktop = () => {
  return (
    <nav className="dash__nav--desktop">
      <Link className="dash__nav--desktop--link" to={"/dashboard"}>
        Dashboard
      </Link>
      <Link className="dash__nav--desktop--link" to={`/dashinvoices`}>
        Invoices
      </Link>
      <Link className="dash__nav--desktop--link" to={`/dashcompanies`}>
        Companies
      </Link>

      <Link className="dash__nav--desktop--link" to={`/dashcontacts`}>
        Contacts
      </Link>
      <button className="dash__button--desktop dash__button--logout">
          Logout
        </button>
    </nav>
  );
};

export default NavDashboardDesktop;