import React, { useState, useEffect } from "react";
import { NavBar, NavBack, Header, Divider, Save } from "components/ui";
import { ToastContainer, toast } from 'react-toastify';
import { CredentialModel } from "interface";
import styles from "styles/account.module.css";
import input from "styles/input.module.css";
import button from "styles/button.module.css";
import { useNavigate, Link, useLocation } from "react-router-dom";

interface credential {
  name: string; 
  email: string
}

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

  const is_valid = (name: string = ``, email: string = ``) => {
    type AccountItem = "name" | "email";
    const items: credential = { name, email }; 
    const saved_items = (Object.keys(items) as AccountItem[]).filter(item => !(items[item] === credential[item]));
    const data = JSON.stringify({
      id: credential.id, 
      name: name, 
      email: email, 
      password: credential.password, 
      country: credential.country, 
      is_signin: credential.is_signin
    });
    localStorage.setItem(`credential`, data);
    toast(`Your new '${saved_items.join(` and `)}' has been saved!`);
  }

  const save = () => {
    const changes = {
      name: name ? name : credential.name,
      email: email && !(email === credential.email) ? email : credential.email
    }
    const message = `Both the name and email input are empty!`
    changes.name && changes.email ? is_valid(changes.name, changes.email) : toast(message);
  }

  const clear = () => set_name(``);

  const delete_account = () => {
    localStorage.removeItem(`credential`);
    navigate(`/`);
  };

  return (
    <>
      <div className={styles.header_container}>
        <NavBack nav="/profile" />
        <Header header="Account" />
        <Save save={save} />
      </div>
      <Divider />
      <div>
        <div className={styles.name_container}>
          <input
            className={input.bottom_border}
            type="text"
            placeholder="Name"
            value={name}
            onChange={e => set_name(e.target.value)}
          />
          {
            name && (
              <span 
                className={[`material-icons`, styles.close].join(` `)}
                onClick={clear}
              >close</span>
            )
          }
        </div>
      </div>
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
      <button 
        className={[button.signout, button.bottom].join(" ")}
        onClick={delete_account}
      >Delete Account</button>
      <ToastContainer />
      <NavBar />
    </>
  )
}