import React from 'react';
import { Start, Signup, Home, Profile, Activities } from "components/layout";
import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "components/ui";
import start from 'styles/start.module.css';
import './App.css';

const App: React.FC = () => {
  const is_startpage = window.location.pathname.length <= 1;

  return (
    <main className={start.main}>
      <div className={is_startpage ? start.start_container : ``}>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
      </div>
      <div className={is_startpage ? start.no_show : ``}>
        <NavBar />
      </div>
    </main>
  );
};

export default App