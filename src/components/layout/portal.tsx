import React, { useState } from "react";
import { Start, Signup, Home, Profile, Activities } from "./";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NavBar } from "components/ui";
import portal from 'styles/portal.module.css';

export const Portal: React.FC = () => {
  const navigate = useNavigate();

  return (
    <main className={portal.main}>
      <div className={window.location.pathname === `/` ? portal.start_container : ``}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <div className={window.location.pathname === `/` ? portal.no_show : ``}>
        <NavBar />
      </div>
    </main>
  )
}