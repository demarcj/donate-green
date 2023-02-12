import React, { useState } from "react";
import { DonateInputModel } from "interface";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import styles from "styles/donate-input.module.css";

export const DonateInput: React.FC<DonateInputModel> = ({text, get_donate_amount}) => {
  const add_default = {
    "backgroundColor": `var(--green)`,
    "color": `white`
  }

  const minus_default = {
    "backgroundColor": `var(--pale-green)`,
    "color": `white`
  }

  const add_styled = {
    "backgroundColor": `var(--pale-green)`,
    "color": `white`
  }

  const minus_styled = {
    "backgroundColor": `var(--green)`,
    "color": `white`
  }

  const [ add_style, set_add_style ] = useState(add_default);
  const [ minus_style, set_minus_style ] = useState(minus_default);
  const [ amount, set_amount ] = useState(`$0`);
  const [ selected, set_selected ] = useState(`add`);

  const handle_selected = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    return newAlignment ? set_selected(newAlignment) : undefined
  }
  const add = () => {
    const convert_num = amount.replace(`$`, ``).replaceAll(`,`, ``);
    const num = `$${new Intl.NumberFormat().format(parseInt(convert_num) + 1)}`;
    set_amount(num);
    // set_add_style(add_default);
    // set_minus_style(minus_default);
    get_donate_amount(num);
  };

  const minus = () => {
    const convert_num = amount.replace(`$`, ``).replaceAll(`,`, ``);
    const num = convert_num === `0` ? `$0` : `$${new Intl.NumberFormat().format(parseInt(convert_num) - 1)}`;
    set_amount(num);
    // set_add_style(add_styled);
    // set_minus_style(minus_styled);
    get_donate_amount(num);
  };

  const set_donation = (e: React.FormEvent<EventTarget>) => {
    const regex = /[$0-9,]/g;
    const value = (e.target as HTMLInputElement).value;
    const convert_num = value.replace(`$`, ``).replaceAll(`,`, ``);
    const donation = regex.test(convert_num) ? parseInt(convert_num) : parseInt(amount);
    const num = value === `` || value === `$` ? `$0` : `$${new Intl.NumberFormat().format(donation)}`;
    set_amount(num);
    get_donate_amount(num);
  };

  return (
    <>
      { text ? <div className={styles.header}>{text}</div> : ``}
      <div className={styles.container}>
        <div className={styles.button}>
          <ToggleButtonGroup 
            exclusive
            value={selected}
            onChange={handle_selected}
          >
            <ToggleButton 
              value="minus"
              onClick={minus}
              style={minus_style}
            >
              <RemoveIcon />
            </ToggleButton>
            <ToggleButton 
              value="add"
              onClick={add}
              style={add_style}
            >
              <AddIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        <input 
          className={styles.input}
          value={amount}
          inputMode="numeric"
          onChange={set_donation}
        />
      </div>
    </>
  );
};
