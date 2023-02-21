import React, { useState } from "react";
import { Outlet, redirect } from "react-router-dom";
import HeaderDash from "./components/HeaderDash";
import NavDashboardMobile from "./components/NavDashboardMobile";
import NavDashboardDesktop from "./components/NavDashboardDesktop";
import axios from "axios";

import MediaQuery from "react-responsive";

const Dashboard = () => {
  const [user, setUser] = useState([]);
  const [loggedin, setLoggedIn] = useState(false);

  let token = localStorage.getItem("user-token");
  console.log(token);

  if (token === null) {
    window.location.replace("/");
  } else {
    if (loggedin === false) {
      try {
        axios
          .post("http://localhost:8080/login/ok", {
            token: token,
          })
          .then((res) => setUser(res.data))
          .finally(setLoggedIn(true));
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div className="dash">
      <div className="dash__navAndHeader">
        <div className="dash__nav--mobile">
          <NavDashboardMobile />
        </div>

        <MediaQuery minWidth={768}>
          <div className="dash__nav--desktop">
            <NavDashboardDesktop name={user.user_first} />
          </div>
        </MediaQuery>
        <section className="dash__sectionTop">
          <h1 className="dash__sectionTop__title">Dashboard</h1>
          <h4>/{window.location.href.replace(/.*\/\/.*\//, "")}</h4>
          <HeaderDash name={user.user_first} />
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
