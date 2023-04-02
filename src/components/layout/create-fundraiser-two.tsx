import React, { useState }from "react";
import { CreateFundraiser } from "components/ui";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import styles from "styles/create-fundraiser.module.css";
import input from "styles/input.module.css";

export const CreateFundraiserTwo: React.FC = () => {
  type inputs = `title` | `detail`;
  const [ title, set_title ] = useState(``);
  const [ detail, set_detail ] = useState(``);

  const navigate = useNavigate();
  const pathname = window.location.pathname;
  const path = pathname.substring(0, (pathname.length - 3));
  const search = useLocation().search;
  const id = new URLSearchParams(search).get(`id`);
  const set_data = () => {
    localStorage.setItem(`create`, JSON.stringify({ title, detail }));
    navigate(`${path}two?id=${id}`);
  };
  const alert_error = () => {
    const values = { title, detail };
    const empty_values = Object.keys(values).filter(value => !values[value as inputs]).join(` and `);
    toast(`${empty_values} field(s) is empty. Please fill in all fields.`)
  }
  const emit = () => {
    localStorage.setItem(`create`, JSON.stringify({ title, detail }));
    navigate(`${path}three?id=${id}`);
  }

  return (
    <CreateFundraiser 
      previous_page={`${path}one?id=${id}`}
      page_number={2}
      emit={emit}
    >
      <>
        <div>What's the title of your fundraiser?</div>
        <input
          className={input.bottom_border}
          value={title}
          placeholder="E.g Help grow trees"
          onChange={e => set_title(e.target.value)} 
        />
        <div>Why are you creating this fundraiser?</div>
        <textarea 
          placeholder="Please explain"
          className={styles.textarea}
          onChange={ e => set_detail(e.target.value)} 
          cols={30} 
          rows={8}
        ></textarea>
        <ToastContainer />
      </>
    </CreateFundraiser>
  )
}