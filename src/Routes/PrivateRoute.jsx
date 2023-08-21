import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component, redirectUrl }) => {
  const auth = useSelector((state) => state.auth);
  const authToken = auth?.user?.token;

  if (!authToken) {
    return <Navigate to={redirectUrl} />;
  } else {
    return <div>{component}</div>;
  }
};

export default PrivateRoute;
