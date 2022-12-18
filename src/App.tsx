import React from 'react';
import { Start, Signup, Home, Profile, Activities, Fundraiser, Liked, Messages, ProfileImage, Account } from "components/layout";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';

const App: React.FC = () => {

  return (
    <main>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="home" element={<Home />} />
        <Route path="activities" element={<Activities />} />
        <Route path="account" element={<Account />} />
        <Route path="fundraiser" element={<Fundraiser />} />
        <Route path="liked" element={<Liked />} />
        <Route path="messages" element={<Messages />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile-image" element={<ProfileImage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={ <Navigate to="/" /> } />
      </Routes>
    </main>
  );
};

export default App