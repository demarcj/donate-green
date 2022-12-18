import React, { FormEvent, useState } from "react";
import { NavBar, NavBack, Header, Divider } from "components/ui";
import input from "styles/input.module.css";
import button from "styles/button.module.css";

export const Account: React.FC = () => {
  const [ name, set_name ] = useState(``);
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);

  return (
    <>
      <NavBack nav="/profile" />
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
          <button className={button.signout}>Delete Account</button>
        </div>
      <NavBar />
    </>
  )
}