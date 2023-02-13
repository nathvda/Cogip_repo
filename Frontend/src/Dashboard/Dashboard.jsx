import React from 'react';
import HeaderDash from './HeaderDash';
import DashLastInvoices from './DashLastInvoices';
import NavDashboardMobile from './NavDashboardMobile';
import NavDashboardDesktop from './NavDashboardDesktop';


const Dashboard = () => {
      return (
            <div>
            <HeaderDash />
            <DashLastInvoices />
            </div>
      );
};

export default Dashboard;