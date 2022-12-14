import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconTitle, NavBack } from "components/ui";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import input from "styles/input.module.css";
import button from "styles/button.module.css";
import start from 'styles/start.module.css';

export const Signup: React.FC = () => {
  const [ name, set_name ] = useState(``);
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);
  const [ country, set_country ] = useState(``);

  const navigate = useNavigate();
  const countries = [`USA`, `UK`, `Canada`, `Australia`].sort();

  const handle_submit = (e: FormEvent) => {
    e.preventDefault();
    const is_signin = false;
    const id = crypto.randomUUID();
    const data = JSON.stringify({id, name, email, password, country, is_signin});
    localStorage.setItem(`credential`, data);
    navigate(`/`);
  }

  return (
    <div className={start.start_container}>
      <NavBack nav="/" />
      <form onSubmit={handle_submit}>
        <IconTitle />
        <input
          className={input.bottom_border}
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => set_name(e.target.value)}
          required
        />
        <input
          className={input.bottom_border}
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={e => set_email(e.target.value)}
          required
        />
        <input
          className={input.bottom_border}
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => set_password(e.target.value)}
          required
        />
        <Autocomplete 
          options={countries} 
          clearOnEscape
          freeSolo
          sx={{mb: `30px`}}
          onChange={(event: any, newValue: string | null) => {
            set_country(newValue as string);
          }}
          renderInput={(params) => <TextField variant="standard" {...params} label="Country" />}
        />
        <button 
          className={button.outline}
          type="submit"
        >Sign up</button>
      </form>
    </div>
  )
}