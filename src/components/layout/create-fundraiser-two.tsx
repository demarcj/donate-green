import React from "react";
import { CreateFundraiser } from "components/ui";
import { useLocation } from "react-router-dom";

export const CreateFundraiserTwo: React.FC = () => {
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 3));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);

  return (
    <CreateFundraiser 
      previous_page={`${path}one?id=${id}`}
      next_page={`${path}three?id=${id}`}
      page_number={1}
    >
      <>
        <div>Hello</div>
      </>
    </CreateFundraiser>
  )
}