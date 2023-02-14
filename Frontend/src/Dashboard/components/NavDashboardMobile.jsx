import React from 'react';
import { useState } from 'react';
import DashLogout from './DashLogout';
import {Link} from "react-router-dom";

const NavDashboardMobile = () => {
      const [isOpen, setIsOpen] = useState(false)
      return isOpen ? (
            <nav className='dash__nav--open'>
                  <button className='dash__nav__button--open' onClick={() => setIsOpen(false)}>
                        <div className='dash__nav__line dash__nav__line--top'></div>
                        <div className='dash__nav__line dash__nav__line--middle'></div>
                        <div className='dash__nav__line dash__nav__line--bottom'></div>
                  </button>
                  <div className='dash__nav--style'>
                        <Link className='dash__nav__link' to={`dash/invoices`}><img src="./public/assets/img/icons/dashboard/Icon_Invoices.svg" alt="Icon nav dashboard invoices" /></Link>
                        <Link className='dash__nav__link' to={`dash/companies`}><img src="./public/assets/img/icons/dashboard/Icon_Companies.svg" alt="Icon nav dashboard companies" /></Link>
                        <Link className='dash__nav__link' to={`dash/contacts`}><img src="./public/assets/img/icons/dashboard/Icon_contact.svg" alt="Icon nav dashboard contact" /></Link>    
                  </div>
                  <button className="dash__button--mobile dash__button--logout">
                        <DashLogout />
                  </button>
            </nav>
      ) : (
            <div className='dash__nav--closed'>
                  <button className='dash__nav__button--closed' onClick={() => setIsOpen(false)}>
                        <div className='dash__nav__line'></div>
                        <div className='dash__nav__line'></div>
                        <div className='dash__nav__line'></div>
                  </button>
            </div>
      )
}

export default NavDashboardMobile;