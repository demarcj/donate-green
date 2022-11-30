import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Activities, Home, Profile } from './'
import { NavBar } from "components/ui";

export const Main: React.FC = () => {
  const navigate = useNavigate();

  const get_route = async () => {
    if(window.location.pathname === `/`){ 
      setTimeout(() => {
        navigate(`/home`);
      })
    }
  }
  get_route();

  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <NavBar />
    </>
  )
}