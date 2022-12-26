import React from "react";
import { NavBar, Header, Divider, NavBack } from "components/ui";
import { useNavigate } from "react-router-dom";
import { CreateFundraiserModel } from "interface"
import button from 'styles/button.module.css';

export const CreateFundraiser: React.FC<CreateFundraiserModel> = ({children, previous_page, page_number, next_page}) => {
  const navigate = useNavigate();
  console.log(page_number);
  return (
    <>
      <NavBack nav={previous_page} />
      <Header header="Create Fundraiser" />
      <Divider />
      {children}
      <button 
        className={button.outline}
        onClick={() => navigate(next_page)}
      >Continue</button>
      <NavBar />
    </>
  )
}