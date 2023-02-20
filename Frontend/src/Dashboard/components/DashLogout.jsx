import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { redirect } from "react-router-dom";

const DashLogout = () => {
  const [isLoggedin, setIsLoggedin] = useState("");

  const logout = () => {
    localStorage.removeItem("user-token");
    setIsLoggedin(false);

    window.location.replace("http://localhost:5173/");
  };

  return (
    <>
      <div className="logout">
        <button onClick={(e) => logout()}>Logout</button>
      </div>
    </>
  );
};

export default DashLogout;
