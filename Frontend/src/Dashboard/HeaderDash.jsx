import React from 'react';
import NavDashboardMobile from './NavDashboardMobile';
import NavDashboardDesktop from './NavDashboardDesktop';

const HeaderDash = () => {
      return (
            <div className='dashHeader'>
                  <h1>Dashboard</h1>
                  <h2>Welcome back Henry!</h2>
                  <p>You can here add an invoice, a company and some contacts</p>
                  <img
                    className="dashHeader__illustration"
                    src="../public/assets/img/dashboard.png"
                    alt="Illustration dashboard"
                  />
            </div>
      );
};

export default HeaderDash;