import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  return (
    <Fragment>
      {!window.localStorage.getItem("token") ? (
        <Navigate to={"/login"} />
      ) : (
        children
      )}
    </Fragment>
  );
};

export default ProtectedRoute;
