import React from "react";

const HeaderDash = () => {
  return (
    <div className="dashHeader">
      <p>Dashboard</p>

      <div className="dashHeader__Img--div">
        <div className="dashHeader__HeyMsg">
          <h2>Welcome back Henry!</h2>
          <p>You can here add an invoice, a company and some contacts</p>
        </div>
        <img
          className="dashHeader__Img"
          src="../public/assets/img/dashboard.png"
          alt="Illustration dashboard"
        />
      </div>
    </div>
  );
};

export default HeaderDash;
