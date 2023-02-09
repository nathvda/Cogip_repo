import React from 'react';
import { Link } from 'react-router-dom';

const NavigationDesktop = () => {
    return (
            <nav className='header__nav--desktop'>
                <Link className='header__nav--desktop--link' to={'/'}>Homepage</Link>
                <Link className='header__nav--desktop--link' to={`/companies`}>Companies</Link>
                <Link className='header__nav--desktop--link' to={`/invoices`}>Invoices</Link>
                <Link className='header__nav--desktop--link' to={`/contacts`}>Contacts</Link>
            </nav>
    );
};

export default NavigationDesktop;