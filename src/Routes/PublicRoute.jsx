import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component, redirectUrl }) => {
  const auth = useSelector((state) => state.auth);
  const authToken = auth?.user?.token;

  if (!authToken) {
    return <div>{component}</div>;
  } else {
    return <Navigate to={redirectUrl} />;
  }
};

export default PublicRoute;
