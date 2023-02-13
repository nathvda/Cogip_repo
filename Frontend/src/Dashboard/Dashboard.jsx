import React from 'react';
import HeaderDash from './HeaderDash';
import DashLastInvoices from './DashLastInvoices';
import DashLastContacts from './DashLastContacts';
import DashLastCompanies from './DashLastCompanies';
import NavDashboardMobile from './NavDashboardMobile';
import NavDashboardDesktop from './NavDashboardDesktop';


const Dashboard = () => {
      return (
            <div>  
            <NavDashboardMobile />
            <NavDashboardDesktop />
            <HeaderDash />
            <DashLastInvoices />
            < DashLastContacts />
            < DashLastCompanies />
      
            </div>
      );
};

export default Dashboard;