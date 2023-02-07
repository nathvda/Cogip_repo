import React from 'react';
import NavigationMobile from './NavigationMobile';
import MediaQuery from 'react-responsive';
import { useState } from 'react';
import NavigationDesktop from './NavigationDesktop';

const Header = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className='header'>
            <img src="./public/assets/img/icons/logo.svg" alt="Logo de cogip" />
            <div className='header__menu--mobile'>
            <MediaQuery maxWidth={767}>
                <NavigationMobile />
            </MediaQuery>
            </div>

            <div className='header__menu--desktop'>
            <MediaQuery minWidth={768}>
                <NavigationDesktop />
            </MediaQuery>
            </div>
    
        </div>
    );
};

export default Header;