import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import { NavBar, Header, Divider, NavBack, Save } from "components/ui";
import { CredentialModel } from "interface";
import styles from "styles/password.module.css";
import input from "styles/input.module.css";

type SaveConst = `not_old_password` | `no_match` | `is_empty` | `success`;

export const Password: React.FC = () => {
  const [ old_password, set_old_password ] = useState(``);
  const [ new_password, set_new_password ] = useState(``);
  const [ retype_password, set_retype_password ] = useState(``);

  const credential: CredentialModel = JSON.parse(localStorage.getItem(`credential`) as string);
  const navigate = useNavigate();
  const save_switch = {
    "not_old_password": () => toast("The input password don't match the record of the old password. Please try again."),
    "no_match": () => toast("The retyped password doesn't match the new password. Please try again."),
    "is_empty": () => toast("The new password input is empty. Please add some characters."),
    "success": () => {
      const data = JSON.stringify({
        id: credential.id, 
        name: credential.name, 
        email: credential.email, 
        password: new_password, 
        country: credential.country, 
        is_signin: credential.is_signin
      });
      localStorage.setItem(`credential`, data);
      navigate(`/profile/account?success=true`);
    }
  }


  const save = () => {
    let the_switcher: SaveConst = (
      credential.password !== old_password ? `not_old_password` :
      new_password === `` || new_password === undefined ? `is_empty` : 
      new_password === retype_password ? `success` : 
      `no_match`
    );

    save_switch[the_switcher]();
  };

  return (
    <>
      <div className={styles.header_container}>
        <NavBack nav="/profile/account" />
        <Header header="Password" />
        <Save save={save} />
      </div>
      <Divider />
      <input
        className={input.bottom_border}
        type="password" 
        placeholder="Old Password" 
        value={old_password}
        onChange={e => set_old_password(e.target.value)}
      />
      <input
        className={input.bottom_border}
        type="password" 
        placeholder="New Password" 
        value={new_password}
        onChange={e => set_new_password(e.target.value)}
      />
      <input
        className={input.bottom_border}
        type="password" 
        placeholder="Retype Password" 
        value={retype_password}
        onChange={e => set_retype_password(e.target.value)}
      />
      <ToastContainer />
      <NavBar />
    </>
  )
}