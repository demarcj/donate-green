import React, { FormEvent, useState } from "react";
import { IconTitle } from "../../ui/icon-title/icon-title";
import { SignupModel } from "../../../interface"

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
    <form onSubmit={handle_submit}>
      <IconTitle />
      <input 
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => set_name(e.target.value)}
      />
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
      <input 
        type="text" 
        placeholder="Country"
        value={country}
        onChange={e => set_country(e.target.value)}
      />
      <button type="submit">Sign up</button>
    </form>
  )
}