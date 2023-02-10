//Pas de MediaQueries --> seront dans le sass

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__line footer__line--yellow"></div>
      <img
        className="footer__logo"
        src="../public/assets/img/icons/logo.svg"
        alt="Logo de cogip"
      />
      <div className="footer__informations">
        <div className="footer__informations__adress">
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Map.svg"
            alt="localisation"
          />
          <p>Square des Martyrs, 6000 Charleroi</p>
        </div>
        <div className="footer__informations__phone">
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Tel.svg"
            alt="phone"
          />
          <p>(123) 456-7890</p>
        </div>
        <div className="footer__informations__fax">
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Fax.svg"
            alt="Fax"
          />
          <p>(123) 456-7890</p>
        </div>
        <div className="footer__socialMedia">
          <p>Social Media</p>
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Facebook.svg"
            alt="Facebook"
          />
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Twitter.svg"
            alt="Twitter"
          />
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Linkedin.svg"
            alt="Linkedin"
          />
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Youtube.svg"
            alt="YouTube"
          />
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Instagram.svg"
            alt="Instagram"
          />
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Googleplus.svg"
            alt="Goggle+"
          />
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Pinterest.svg"
            alt="Pinterest"
          />
          <img
            className="footer__informations__icons"
            src="../public/assets/img/icons/Wifi.svg"
            alt="Wifi"
          />
        </div>
      </div>
      <div className="footer__line footer__line--gray"></div>
      <nav className="footer__nav">
        <Link className="footer__nav__link" to={"/"}>
          Home
        </Link>
        <Link className="footer__nav__link" to={`/invoices`}>
          Invoices
        </Link>
        <Link className="footer__nav__link" to={`/companies`}>
          Companies
        </Link>

        <Link className="footer__nav__link" to={`/contacts`}>
          Contacts
        </Link>
        <Link className="footer__nav__link" to={`/`}>
          Privacy Policy
        </Link>
      </nav>
      <p>Copyright © 2022 • COGIP Inc.</p>
    </div>
  );
};

export default Footer;
