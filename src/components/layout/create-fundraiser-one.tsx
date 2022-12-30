import React, { useState } from "react";
import { CreateFundraiser } from "components/ui";
import { useLocation, useNavigate } from "react-router-dom";
import input from "styles/input.module.css";

export const CreateFundraiserOne: React.FC = () => {
  const [ country, set_country ] = useState(``);
  const [ donate, set_donate ] = useState(``);

  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 3));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const emit = () => {
    localStorage.setItem(`create`, JSON.stringify({ country, donate }));
    navigate(`${path}two?id=${id}`);
  }

  return (
    <CreateFundraiser 
      previous_page="/profile/fundraiser"
      page_number={1}
      emit={emit}
    >
      <>
        <div>How much would you like to raise?</div>
        <div>The money will be sent directly to the organization of your choice</div>
        <div>Where are you fundraising?</div>
        <input
          className={input.bottom_border}
          value={country}
          placeholder="Enter Country"
          onChange={e => set_country(e.target.value)} 
        />
      </>
    </CreateFundraiser>
  )
}