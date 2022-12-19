import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from 'uuid';
import { IconTitle, NavBack } from "components/ui";
import input from "styles/input.module.css";
import button from "styles/button.module.css";
import start from 'styles/start.module.css';

export const Signup: React.FC = () => {
  const [ name, set_name ] = useState(``);
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);
  const [ country, set_country ] = useState(``);
  const navigate = useNavigate();

  const handle_submit = (e: FormEvent) => {
    e.preventDefault();
    const is_signin = false;
    const id = uuid();
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
        <input
          className={input.bottom_border}
          type="text" 
          placeholder="Country"
          value={country}
          onChange={e => set_country(e.target.value)}
          required
        />
        <button 
          className={button.outline}
          type="submit"
        >Sign up</button>
      </form>
    </div>
  )
}