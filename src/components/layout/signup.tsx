import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IconTitle } from "components/ui";
import input from "styles/input.module.css";
import button from "styles/button.module.css";
import icon from "styles/material-icon.module.css";
import start from 'styles/start.module.css';

export const Signup: React.FC = () => {
  const [ name, set_name ] = useState(``);
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);
  const [ country, set_country ] = useState(``);
  const navigate = useNavigate();

  const handle_submit = (e: FormEvent) => {
    e.preventDefault();
    const data = JSON.stringify({name, email, password, country});
    const credential = localStorage.setItem(`credential`, data);
    navigate(`/signup`);
  }

  return (
    <div className={start.start_container}>
      <span 
        className={[`material-icons`, icon.back].join(` `)}
        onClick={() => navigate(`/`)}
      >navigate_before</span>
      <form onSubmit={handle_submit}>
        <IconTitle />
        <input
          className={input.bottom_border}
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => set_name(e.target.value)}
        />
        <input
          className={input.bottom_border}
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={e => set_email(e.target.value)}
        />
        <input
          className={input.bottom_border}
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => set_password(e.target.value)}
        />
        <input
          className={input.bottom_border}
          type="text" 
          placeholder="Country"
          value={country}
          onChange={e => set_country(e.target.value)}
        />
        <button 
          className={button.outline}
          type="submit"
        >Sign up</button>
      </form>
    </div>
  )
}