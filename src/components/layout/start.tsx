import React, { useState } from "react";
import { IconTitle } from "components/ui";
import { useNavigate } from "react-router-dom";
import start from 'styles/start.module.css';
import button from 'styles/button.module.css';
import input from "styles/input.module.css";

export const Start: React.FC = () => {
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);
  const navigate = useNavigate();

  const signin = () => {
    const credential = JSON.parse(localStorage.getItem(`credential`) as string);
    const has_credential = credential ? `has` : `none`;
    const signin_switch = {
      "has": () => {
        const match_email = credential.email.toLowerCase() === email.toLowerCase() || email === ``;
        const match_password = credential.password === password || password === ``;
        return match_email && match_password ? navigate(`/home`) : undefined;
      },
      "none": () => undefined
    };
    signin_switch[has_credential]();
  }

  return (
    <div className={start.start_container}>
      <IconTitle />
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
      <button 
        className={button.default}
        onClick={signin}
      >Sign in</button>
      <div className={start.divider_container}>
        <div className={start.divider}></div>
        <div className={start.text}>Or</div>
        <div className={start.divider}></div>
      </div>
      <button
        className={button.outline}
        onClick={() => navigate(`/signup`)}
      >Sign up</button>
    </div>
  )
}