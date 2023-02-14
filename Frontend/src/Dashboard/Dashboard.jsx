import React from 'react';
import {Outlet, Link} from "react-router-dom";
import HeaderDash from './components/HeaderDash';
import DashLastInvoices from './components/DashLastInvoices';
import DashLastContacts from './components/DashLastContacts';
import DashLastCompanies from './components/DashLastCompanies';
import NavDashboardMobile from './components/NavDashboardMobile'
import NavDashboardDesktop from './components/NavDashboardDesktop';
import MediaQuery from "react-responsive";



const Dashboard = () => {
      return (
            <div className='dash'>  
            <div className='dash__nav--mobile'>
                  <NavDashboardMobile />
            </div>

            <MediaQuery minWidth={768}>
            <div className='dash__nav--desktop'>
                  <NavDashboardDesktop />
            </div>
            </MediaQuery>
            <HeaderDash />
            <DashLastInvoices />
            < DashLastContacts />
            < DashLastCompanies />
            <div id="detail">
                  <Outlet />
            </div>

      
            </div>
      );
};

export default Dashboard;