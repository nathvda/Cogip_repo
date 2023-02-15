import React from 'react';
import DashLogout from './DashLogout';
import {Link} from "react-router-dom";

const NavDashboardMobile = () => {
      return (
            <nav className='dash__nav--mobile'>
                        <div className='dash__nav__line dash__nav__line--top'></div>
                        <div className='dash__nav__line dash__nav__line--middle'></div>
                        <div className='dash__nav__line dash__nav__line--bottom'></div>
                  <div className='dash__nav--style'>
                        <Link className='dash__nav__link' to={``}><img src="./public/assets/img/icons/dashboard/Icon_dashboard.svg" alt="Icon nav dashboard" /></Link>
                        <Link className='dash__nav__link' to={`dash/invoices`}><img src="./public/assets/img/icons/dashboard/Icon_Invoices.svg" alt="Icon nav dashboard invoices" /></Link>
                        <Link className='dash__nav__link' to={`dash/companies`}><img src="./public/assets/img/icons/dashboard/Icon_Companies.svg" alt="Icon nav dashboard companies" /></Link>
                        <Link className='dash__nav__link' to={`dash/contacts`}><img src="./public/assets/img/icons/dashboard/Icon_contact.svg" alt="Icon nav dashboard contact" /></Link>    
                  </div>
                  <button className="dash__button--mobile">
                        Logout
                  </button>
            </nav>
      ) 
}

export default NavDashboardMobile;