import React, { useState } from "react";
import { CreateFundraiser, DonateInput } from "components/ui";
import { useLocation, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ToastContainer, toast } from 'react-toastify';
import search_icon from "images/search.png";
import styles from "styles/create-fundraiser.module.css";

export const CreateFundraiserOne: React.FC = () => {
  type inputs = `country` | `donate`;
  const [ country, set_country ] = useState(``);
  const [ donate, set_donate ] = useState(``);

  const countries = [`USA`, `UK`, `Canada`, `Australia`].sort();
  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 3));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const get_donate_amount = (num: string) => set_donate(num);
  const set_data = () => {
    localStorage.setItem(`create`, JSON.stringify({ country, donate }));
    navigate(`${path}two?id=${id}`);
  };
  const alert_error = () => {
    const values = { country, donate };
    const empty_values = Object.keys(values).filter(value => !values[value as inputs]).join(` and `);
    toast(`${empty_values} field(s) is empty. Please fill in all fields.`)
  }
  const emit = () => {
    (country && donate) && set_data();
    !(country && donate) && alert_error();
  }
  
  return (
    <CreateFundraiser 
      previous_page="/profile/fundraiser"
      page_number={1}
      emit={emit}
    >
      <>
        <div className={styles.donate_input_wrapper}>
          <DonateInput 
            text="How much would you like to raise?"
            get_donate_amount={get_donate_amount}
          />
        </div>
        <div 
          className={styles.donate_info}
        >The money will be sent directly to the organization of your choice.</div>
        <div className={styles.country_input_text}>Where are you fundraising?</div>
        <div className={styles.country_input_container}>
          <Autocomplete 
            options={countries} 
            clearOnEscape
            freeSolo
            sx={{ pl: `30px` }}
            onChange={(event: any, newValue: string | null) => set_country(newValue as string)}
            renderInput={(params) => <TextField  variant="standard" {...params} label="Enter Country" />}
          />
          <img className={styles.search_icon} src={search_icon} alt="" />
        </div>
        <ToastContainer />
      </>
    </CreateFundraiser>
  )
}