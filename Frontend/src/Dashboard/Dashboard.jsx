import React from "react";
import { Outlet } from "react-router-dom";
import HeaderDash from "./components/HeaderDash";
import DashStatistics from "./DashStatistics";
import DashLastInvoices from "./components/DashLastInvoices";
import DashLastContacts from "./components/DashLastContacts";
import DashLastCompanies from "./components/DashLastCompanies";
import NavDashboardMobile from "./components/NavDashboardMobile";
import NavDashboardDesktop from "./components/NavDashboardDesktop";
import MediaQuery from "react-responsive";

const Dashboard = () => {
  return (
    <div className="dash">
      <div className="dash__nav--mobile">
        <NavDashboardMobile />
      </div>

      <MediaQuery minWidth={768}>
        <div className="dash__nav--desktop">
          <NavDashboardDesktop />
        </div>
      </MediaQuery>
      <section className="dash__sectionTop">
        <h1 className="dash__sectionTop__title">Dashboard</h1>
        <HeaderDash />
      </section>

      <section className="dash__sectionMiddle">
      <div className="dash__sectionMiddle__divAll">
        <DashStatistics />
        </div>
      </section>
      <section className="dash__sectionMiddle">
        <div className="dash__sectionMiddle__divAll">
          <DashLastInvoices />
        </div>
      </section>
      <section className="dash__sectionMiddle">
      <div className="dash__sectionMiddle__divAll">
        <DashLastContacts />
        </div>
      </section>
      <section className="dash__sectionMiddle">
      <div className="dash__sectionMiddle__divAll">
        <DashLastCompanies />
         </div>
      </section>

      <section className="dash__sectionOutlet">
        <div id="detail">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
