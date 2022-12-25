import React, { useState, useEffect } from "react";
import { NavBar, NavBack, Header, Divider, Save } from "components/ui";
import { ToastContainer, toast } from 'react-toastify';
import { CredentialModel } from "interface";
import styles from "styles/account.module.css";
import input from "styles/input.module.css";
import button from "styles/button.module.css";
import { useNavigate, Link, useLocation } from "react-router-dom";

export const Account: React.FC = () => {
  const [ name, set_name ] = useState(``);
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);

  const credential: CredentialModel = JSON.parse(localStorage.getItem(`credential`) as string);
  const navigate = useNavigate();
  const search = useLocation().search;
  const is_success = new URLSearchParams(search).get(`success`);
  const confirmed = () => {
    toast("Your password change was a success!!");
    return;
  }
  
  useEffect(() => is_success === `true` ? confirmed() : undefined);

  const save = () => {
    const get_name = name ? name : credential.name;
    const get_email = email ? email : credential.email;
    const valid = get_email && get_name ? `success` : `is_empty`;
    // type AccountSaveConst = "name" | "email";
    const save_switch = {
      is_empty: () => toast("Both the name and email input are empty!"),
      success: () => {
        // const saved_items = [`name`, `email`].filter(item => credential[item as AccountSaveConst].includes());
        const data = JSON.stringify({
          id: credential.id, 
          name: get_name, 
          email: get_email, 
          password: credential.password, 
          country: credential.country, 
          is_signin: credential.is_signin
        });
        localStorage.setItem(`credential`, data);
        // toast(`Your new '${saved_items.join(` and `)}' has been saved!`)
      }
    }
    save_switch[valid]();
  }

  const delete_account = () => {
    localStorage.removeItem(`credential`);
    navigate(`/`);
  };

  return (
    <>
      <NavBack nav="/profile" />
      <Save 
        save={save}
      />
      <Header header="Account" />
      <Divider />
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
      <div className={styles.password_container}>
        <input
          className={[input.bottom_border, styles.password].join(" ")}
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={e => set_password(e.target.value)}
        />
        <Link to="/profile/account/password" className={styles.change}>Change Password</Link>
      </div>
      <div className={button.container}>
        <button 
          className={button.signout}
          onClick={delete_account}
        >Delete Account</button>
      </div>
      <ToastContainer />
      <NavBar />
    </>
  )
}