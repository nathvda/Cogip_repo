import React from 'react';
import DashLogout from './DashLogout';
import {Link} from "react-router-dom";
import { useState } from 'react';

const NavDashboardMobile = () => {
      const [isOpen, setIsOpen] = useState(false);
      return isOpen ? (
        <nav className="dash__nav--open">
          <button
            className="dash__nav__button--open"
            onClick={() => setIsOpen(false)}
          >
                        <div className='dash__nav__line dash__nav__line--top'></div>
                        <div className='dash__nav__line dash__nav__line--middle'></div>
                        <div className='dash__nav__line dash__nav__line--bottom'></div>
                        </button>
                  
                  <div className='dash__nav--style'>
                        <Link className='dash__nav__link' to={``}><img src="../public/assets/img/icons/dashboard/Icon_dashboard.svg" alt="Icon nav dashboard" /></Link>
                        <Link className='dash__nav__link' to={`dash/invoices`}><img src="../public/assets/img/icons/dashboard/Icon_Invoices.svg" alt="Icon nav dashboard invoices" /></Link>
                        <Link className='dash__nav__link' to={`dash/companies`}><img src="../public/assets/img/icons/dashboard/Icon_Companies.svg" alt="Icon nav dashboard companies" /></Link>
                        <Link className='dash__nav__link' to={`dash/contacts`}><img src="../public/assets/img/icons/dashboard/Icon_contact.svg" alt="Icon nav dashboard contact" /></Link>    
                  <button className='dash__nav__link--button'>
                        Logout
                  </button> 
                  </div>
                 
            </nav>
      ) : (
            <div className="dash__nav--closed">
              <button
                className="dash__nav__button--closed"
                onClick={() => setIsOpen(true)}
              >
                <div className="dash__nav__line"></div>
                <div className="dash__nav__line"></div>
                <div className="dash__nav__line"></div>
              </button>
            </div>
          );
};

export default NavDashboardMobile;