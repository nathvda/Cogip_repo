import React from 'react';
import { Link } from 'react-router-dom';

const NavigationDesktop = () => {
    return (
        <div>
            <p>test ordinateur</p>
            <nav>
                <Link to={'/'}>Homepage</Link>
                <Link to={`/companies`}>Companies</Link>
                <Link to={`/invoices`}>Invoices</Link>
                <Link to={`/contacts`}>Contacts</Link>
            </nav>
        </div>
    );
};

export default NavigationDesktop;