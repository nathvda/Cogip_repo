import React from 'react';
import HeaderDash from './components/HeaderDash';
import DashLastInvoices from './components/DashLastInvoices';
import DashLastContacts from './components/DashLastContacts';
import DashLastCompanies from './components/DashLastCompanies';
import NavDashboardMobile from './components/NavDashboardMobile'
import NavDashboardDesktop from './components/NavDashboardDesktop';


const Dashboard = () => {
      return (
            <div className='dash'>  
            <div className='dash__nav--mobile'>
                  <NavDashboardMobile />
            </div>
            <div className='dash__nav--desktop'>
                  <NavDashboardDesktop />
            </div>
            <HeaderDash />
            <DashLastInvoices />
            < DashLastContacts />
            < DashLastCompanies />
      
            </div>
      );
};

export default Dashboard;