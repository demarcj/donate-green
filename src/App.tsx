import React from 'react';
import { 
  Activities, 
  Account, 
  Fundraiser, 
  Home, 
  Liked, 
  Messages,
  Password,
  Profile, 
  ProfileImage, 
  Share, 
  Signup, 
  Start 
} from "components/layout";
import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';

const App: React.FC = () => (
  <main>
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="home" element={<Home />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/share" element={<Share />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/account" element={<Account />} />
      <Route path="profile/account/password" element={<Password />} />
      <Route path="profile/fundraiser" element={<Fundraiser />} />
      <Route path="profile/liked" element={<Liked />} />
      <Route path="profile/messages" element={<Messages />} />
      <Route path="profile/profile-image" element={<ProfileImage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </main>
);

export default App