import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import DashLogout from './DashLogout';

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
                        <Link className='dash__nav__link' to={'/dashboard'}>Dashboard</Link>
                        <Link className='dash__nav__link' to={`/dashinvoices`}>Invoices</Link>
                        <Link className='dash__nav__link' to={`/dashcompanies`}>Companies</Link>
                        <Link className='dash__nav__link' to={`/dashcontacts`}>Contacts</Link>    
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