import React from 'react';
import { useNavigate } from "react-router-dom";
import { NavBackModel } from "interface";
import icon from "styles/material-icon.module.css";

export const NavBack: React.FC<NavBackModel> = ({ nav }) => {
  const navigate = useNavigate();

  return (
    <>
      <span 
        className={[`material-icons`, icon.back].join(` `)}
        onClick={() => navigate(nav)}
      >navigate_before</span>
    </>
  )
}