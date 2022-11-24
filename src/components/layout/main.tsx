import React from "react";
import { Route, Routes } from "react-router-dom";
import { Activities, Home, Profile } from './'
import { NavBar } from "components/ui";

export const Main: React.FC = () => {
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