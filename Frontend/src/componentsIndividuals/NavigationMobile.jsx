import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const NavigationMobile = () => {
    const [isOpen, setIsOpen] = useState(false)
    return isOpen ? (
        <nav className='header__nav--open'>
            <button className='header__nav__button--open' onClick={() => setIsOpen(false)}>
                <div className='header__nav__line header__nav__line--top'></div>
                <div className='header__nav__line header__nav__line--middle'></div>
                <div className='header__nav__line header__nav__line--bottom'></div>
            </button>
            <div className='header__nav--style'>
                <Link className='header__nav__link' to={'/'}>Home</Link>
                <Link className='header__nav__link' to={`/invoices`}>Invoices</Link>
                <Link className='header__nav__link' to={`/companies`}>Companies</Link>
                <Link className='header__nav__link' to={`/contacts`}>Contacts</Link>
            </div>
        </nav>
    ) : (
        <div className='header__nav--closed'>
            <button className='header__nav__button--closed' onClick={() => setIsOpen(true)}>
                <div className='header__nav__line'></div>
                <div className='header__nav__line'></div>
                <div className='header__nav__line'></div>
            </button>
        </div>
    )
}

export default NavigationMobile;