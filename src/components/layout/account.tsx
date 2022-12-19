import React, { useState } from "react";
import { NavBar, NavBack, Header, Divider, Save } from "components/ui";
import input from "styles/input.module.css";
import button from "styles/button.module.css";
import { useNavigate } from "react-router-dom";



export const Account: React.FC = () => {
  const [ name, set_name ] = useState(``);
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);
  const navigate = useNavigate();

  const delete_account = () => {
    localStorage.removeItem(`credential`);
    navigate(`/`);
  };

  return (
    <>
      <NavBack nav="/profile" />
      <Save />
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
      <input
        className={input.bottom_border}
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={e => set_password(e.target.value)}
      />
      <div className={button.container}>
        <button 
          className={button.signout}
          onClick={delete_account}
        >Delete Account</button>
      </div>
      <NavBar />
    </>
  )
}