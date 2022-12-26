import React from 'react';
import { 
  Activities, 
  Account,
  CreateFundraiserOne,
  CreateFundraiserTwo,
  CreateFundraiserThree,
  CreateFundraiserFour, 
  Fundraiser, 
  Home, 
  Liked, 
  Messages,
  Organization,
  Password,
  Payment,
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
      <Route path="home/organization/:name" element={<Organization />} />
      <Route path="home/organization/:name/payment" element={<Payment />} />
      <Route path="activities" element={<Activities />} />
      <Route path="activities/share" element={<Share />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/account" element={<Account />} />
      <Route path="profile/account/password" element={<Password />} />
      <Route path="profile/fundraiser" element={<Fundraiser />} />
      <Route path="profile/fundraiser/create/:name/one" element={<CreateFundraiserOne />} />
      <Route path="profile/fundraiser/create/:name/two" element={<CreateFundraiserTwo />} />
      <Route path="profile/fundraiser/create/:name/three" element={<CreateFundraiserThree />} />
      <Route path="profile/fundraiser/create/:name/four" element={<CreateFundraiserFour />} />
      <Route path="profile/liked" element={<Liked />} />
      <Route path="profile/messages" element={<Messages />} />
      <Route path="profile/profile-image" element={<ProfileImage />} />
      <Route path="signup" element={<Signup />} />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </main>
);

export default App