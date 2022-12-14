import React from 'react';
import { Start, Signup, Home, Profile, Activities } from "components/layout";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';

const App: React.FC = () => {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="signup" element={<Signup />} />
        <Route path="home" element={<Home />} />
        <Route path="activities" element={<Activities />} />
        <Route path="profile" element={<Profile />} />
        <Route path="liked/:id" element={<Activities />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </main>
  );
};

export default App