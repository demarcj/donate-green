import React, { FormEvent, useState } from "react";
import { IconTitle } from "components/ui";
import { SignupModel } from "interface";
import input from "styles/input.module.css";
import button from "styles/button.module.css";
import icon from "styles/material-icon.module.css";

export const Signup: React.FC<SignupModel> = ({signup, route_signup}) => {
  const [ name, set_name ] = useState(``);
  const [ email, set_email ] = useState(``);
  const [ password, set_password ] = useState(``);
  const [ country, set_country ] = useState(``);

  const handle_submit = (e: FormEvent) => {
    e.preventDefault();
    signup({name, email, password, country});
    route_signup(`start_page`);
  }

  return (
    <>
      <span 
        className={[`material-icons`, icon.back].join(` `)}
        onClick={() => route_signup(`start_page`)}
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
    </>
  )
}