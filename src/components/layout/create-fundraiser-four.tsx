import React, { useState, useEffect } from "react";
import { CreateFundraiser, More, ProgressBar } from "components/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { NewFundraiserDataModel } from "interface"

export const CreateFundraiserFour: React.FC = () => {
  const [ country, set_country ] = useState(``);
  const [ donate, set_donate ] = useState(0);
  const [ title, set_title ] = useState(``);
  const [ detail, set_detail ] = useState(``);

  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 4));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const post_data = () => {
    localStorage.getItem(`create`);
  };
  const emit = () => {
    post_data();
    navigate(`/home`);
  };

  useEffect(() => {
    const data: NewFundraiserDataModel = JSON.parse(localStorage.getItem(`create`) as string);
    data?.country && set_country(data.country);
    data?.donate && set_donate(data.donate);
    data?.title && set_title(data.title);
    data?.detail && set_detail(data.detail);
  });

  return (
    <CreateFundraiser 
      previous_page={`${path}three?id=${id}`}
      page_number={4}
      emit={emit}
    >
      <>
        <h1>{title}</h1>
        <ProgressBar 
          donation_amount={0}
          donation_goal={donate}
          location={country}
        />
        <div>{detail}</div>
        <More />
      </>
    </CreateFundraiser>
  )
}