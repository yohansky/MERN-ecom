import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  //userInfo diambil dari state auth di redux state
  const { userInfo } = useSelector((state) => state.auth);

  return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AdminRoute;
