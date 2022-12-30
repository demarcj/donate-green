import React from "react";
import { CreateFundraiser } from "components/ui";
import { useLocation, useNavigate } from "react-router-dom";

export const CreateFundraiserFour: React.FC = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 4));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const emit = () => {
    navigate(`/home`);
  }

  return (
    <CreateFundraiser 
      previous_page={`${path}three?id=${id}`}
      page_number={4}
      emit={emit}
    >
      <>
        <div>What's the title of your fundraiser?</div>
        <div>Why are you creating this fundraiser?</div>
      </>
    </CreateFundraiser>
  )
}