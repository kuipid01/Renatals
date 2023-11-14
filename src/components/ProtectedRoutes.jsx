import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
 

   return  currentUser ? <Outlet/> :   navigate("/login");  
};

export default ProtectedRoutes;
