import React from 'react';
import NavDashboardMobile from './NavDashboardMobile';
import NavDashboardDesktop from './NavDashboardDesktop';

const HeaderDash = () => {
      return (
            <div className='dashHeader'>
                  <h1>Dashboard</h1>
                  <img
                    className="dashHeader__illustration"
                    src="../public/assets/img/dashboard.png"
                    alt="Illustration dashboard"
                  />
            </div>
      );
};

export default HeaderDash;