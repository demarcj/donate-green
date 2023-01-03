import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { NavBar, Header, Divider, NavBack, DonateInput } from "components/ui";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import styles from "styles/payment.module.css";
import button from "styles/button.module.css";

export const Payment: React.FC = () => {
  const [donate, set_donate] = useState(0);

  const search = useLocation().search;
  const get_id = new URLSearchParams(search).get(`id`);
  const id = get_id ? get_id : ``;
  const get_parameter_index  = window.location.pathname.lastIndexOf(`payment`);
  const pathname = window.location.pathname.substring(0, (get_parameter_index - 1));
  const url = `${pathname}?id=${id}`

  const get_donate_amount = (num: number) => {
    set_donate(num)
  };

  return (
    <div className={styles.main_container}>
      <div>
        <NavBack nav={url} />
        <Header header="Payment" />
      </div>
      <div className={styles.container}>
        <div className={styles.header_container}>
          <div className={styles.thanks}>Thank you for donating to</div>
          <div className={styles.header}></div>
        </div>
        <DonateInput 
          text="Donation Amount"
          get_donate_amount={get_donate_amount}
        />
        <Divider />
        <div className={styles.total_container}>
          <div>Total</div>
          <div>${donate}</div>
        </div>
        <Divider />
        {/* <h2></h2> */}
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Payment Options</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="card"
              name="radio-buttons-group"
            >
            <FormControlLabel value="card" control={<Radio />} label="Card" />
            <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Divider />
        <div>
          <div>Confirmation of payment</div>
        </div>
        <div className={styles.button}>
          <button className={button.default}>Donate</button>
        </div>
      </div>
      <NavBar />
    </div>
  )
}