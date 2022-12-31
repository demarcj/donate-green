import React from "react";
import { CreateFundraiser, UploadButton } from "components/ui";
import { useLocation, useNavigate } from "react-router-dom";

export const CreateFundraiserThree: React.FC = () => {
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length -5));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const emit = () => {
    navigate(`${path}four?id=${id}`);
  }

  return (
    <CreateFundraiser 
      previous_page={`${path}two?id=${id}`}
      page_number={3}
      emit={emit}
    >
      <>
        <div>Select an image to represent your fundraiser</div>
        <UploadButton />
      </>
    </CreateFundraiser>
  )
}