import React from "react";
import { CreateFundraiser } from "components/ui";
import { useLocation } from "react-router-dom";

export const CreateFundraiserFour: React.FC = () => {
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 3));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);

  return (
    <CreateFundraiser 
      previous_page={`${path}four?id=${id}`}
      next_page={`/home`}
      page_number={1}
    >
      <>
        <div>Hello</div>
      </>
    </CreateFundraiser>
  )
}