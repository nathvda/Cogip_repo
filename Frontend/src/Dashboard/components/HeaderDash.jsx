import React from "react";

const HeaderDash = (props) => {
  return (
    <div className="dashHeader">
      <div className="dashHeader__HeyMsg">
        <h2>Welcome back {props.name}!</h2>
        <p>You can here add an invoice, a company and some contacts</p>
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
