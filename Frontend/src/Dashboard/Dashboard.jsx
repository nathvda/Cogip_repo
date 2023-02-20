import React from "react";
import { Outlet, redirect } from "react-router-dom";
import HeaderDash from "./components/HeaderDash";
import NavDashboardMobile from "./components/NavDashboardMobile";
import NavDashboardDesktop from "./components/NavDashboardDesktop";

import MediaQuery from "react-responsive";

const Dashboard = () => {
  let token = localStorage.getItem("user-token");
  console.log(token);

  if (token === null) {
    window.location.replace("/");
  }

  return (
    <div className="dash">
      <div className="dash__navAndHeader">
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
      </div>

      <section className="dash__sectionOutlet">
        <div id="detail">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
