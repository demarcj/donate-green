import React, { useState } from "react";
import { CreateFundraiser, DonateInput } from "components/ui";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import search_icon from "images/search.png";
import styles from "styles/create-fundraiser.module.css";

export const CreateFundraiserOne: React.FC = () => {
  const [ country, set_country ] = useState(``);
  const [ donate, set_donate ] = useState(``);

  const countries = [`USA`, `UK`, `Canada`, `Australia`].sort();

  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 3));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const get_donate_amount = (num: string) => set_donate(num);
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
        <DonateInput 
          text="How much would you like to raise?"
          get_donate_amount={get_donate_amount}
          />
        <div>The money will be sent directly to the organization of your choice.</div>
        <div>Where are you fundraising?</div>
        <div className={styles.country_input_container}>
          <Autocomplete 
            options={countries} 
            clearOnEscape
            freeSolo
            sx={{ pl: `30px` }}
            onChange={(event: any, newValue: string | null) => {
              set_country(newValue as string);
            }}
            renderInput={(params) => <TextField  variant="standard" {...params} label="Enter Country" />}
          />
          <img className={styles.search_icon} src={search_icon} alt="" />
        </div>
      </>
    </CreateFundraiser>
  )
}