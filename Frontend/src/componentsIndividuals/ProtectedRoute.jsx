import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //console.log(isLoggedIn);
  const checkUserToken = () => {
    const userToken = localStorage.getItem("user-token");
    //console.log(userToken);
    if (!userToken || userToken === "undefined") {
      setIsLoggedIn(false);
      return <Navigate to="/" />;
    }
    setIsLoggedIn(true);
    //console.log(isLoggedIn);
  };
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);
  return children;
};

export default ProtectedRoute;
