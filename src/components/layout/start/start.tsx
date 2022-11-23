import React, { useState } from "react";
import { IconTitle } from "../../ui/icon-title/icon-title";
import { StartModel } from "../../../interface"
import styles from './start.module.css';

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
        className={styles.signin_btn}
        onClick={signin}
      >Sign in</button>
      <div className={styles.divider_container}>
        <div className={styles.divider}></div>
        <div className={styles.text}>Or</div>
        <div className={styles.divider}></div>
      </div>
      <button
        className={styles.signup_btn}
        onClick={() => route_signup(`signup_page`)}
      >Sign up</button>
    </div>
  )
}