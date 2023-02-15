import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { NavBar, Header, Divider, NavBack, DonateInput, GreenContainer } from "components/ui";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from "styles/payment.module.css";
import button from "styles/button.module.css";

export const Payment: React.FC = () => {
  const [donate, set_donate] = useState(`$0`);
  const [disabled, set_disabled] = useState(true);

  const navigate = useNavigate();
  const search = useLocation().search;
  const get_id = new URLSearchParams(search).get(`id`);
  const id = get_id ? get_id : ``;
  const get_parameter_index = window.location.pathname.lastIndexOf(`payment`);
  const pathname = window.location.pathname.substring(0, (get_parameter_index - 1));
  const title = pathname.replace(`/home/organization/`, ``);
  const url = `${pathname}?id=${id}`
  const get_donate_amount = (num: string) => set_donate(num);
  const handle_checkbox = () => {
    const is_confirm = (document.querySelector(`#confirm`) as HTMLInputElement);
    set_disabled(!is_confirm.checked);
  }
  const handle_donate = () => navigate(`home`);

  return (
    <div className={styles.main_container}>
      <div className={styles.header_container}>
        <NavBack nav={url} />
        <Header header="Payment" />
      </div>
      <GreenContainer>
        <>
          <div className={styles.title_container}>
            <div className={styles.thanks}>Thank you for donating to</div>
            <h2 className={styles.header}>{title.replaceAll(`_`, ` `)}</h2>
          </div>
          <DonateInput 
            text="Donation Amount"
            get_donate_amount={get_donate_amount}
          />
          <Divider />
          <div className={styles.total_container}>
            <div>Total</div>
            <div>{donate}</div>
          </div>
          <Divider />
          <FormControl>
            <FormLabel 
              id="demo-radio-buttons-group-label"
              className={styles.payment_options}
            >Payment Options</FormLabel>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="card"
                name="radio-buttons-group"
              >
              <FormControlLabel 
                value="card" 
                label="Card" 
                control={
                  <Radio 
                    sx={{
                      mr: "auto"
                    }}
                  />
                } 
              />
              <FormControlLabel 
                value="paypal" 
                label="PayPal" 
                control={
                  <Radio 
                    sx={{
                      mr: "auto"
                    }}
                  />
                } 
              />
              <FormControlLabel 
                value="other" 
                label="Other" 
                control={
                  <Radio 
                    sx={{
                      mr: "auto"
                    }}
                  />
                } 
              />
            </RadioGroup>
          </FormControl>
          <Divider />
          <FormControlLabel
            label="Confirmation of payment" 
            control={
              <Checkbox
                id="confirm" 
                onClick={handle_checkbox}
                sx={{
                  mr: "auto"
                }}
              />
            } 
          />
          <div className={styles.button}>
            <button
              className={button.default} 
              disabled={disabled}
              onClick={handle_donate}
            >
              Donate
            </button>
          </div>
        </>
      </GreenContainer>
      <NavBar />
    </div>
  )
}