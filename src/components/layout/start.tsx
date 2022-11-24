import React, { useState } from "react";
import { IconTitle } from "components/ui";
import { StartModel } from "interface"
import start from 'styles/start.module.css';
import button from 'styles/button.module.css';

export const Start: React.FC<StartModel> = ({route_signup, signin}) => {
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);

  return (
    <div>
      <IconTitle />
      <input 
        type="email" 
        placeholder="Email" 
        value={email}
        onChange={e => set_email(e.target.value)}
      />
      <input 
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
        onClick={() => route_signup(`signup_page`)}
      >Sign up</button>
    </div>
  )
}