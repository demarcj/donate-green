import React, { useState } from "react";
import { Start, Signup, Main } from "components/layout";
import portal from 'styles/portal.module.css';

export const Portal: React.FC = () => {
  const [is_signin, set_is_signin] = useState('start_page');
  const [signup_info, set_signup_info] = useState({});

  const route_signup = (route: string) => set_is_signin(route);

  const signup = (new_signup: {}) => {
    localStorage.setItem(`credential`, JSON.stringify(new_signup));
    set_signup_info(new_signup);
  }

  const signin = () => {
    const credential = localStorage.getItem(`credential`);
    if(credential){
      set_is_signin(`main_page`);
    }
  }

  return (
    <main className={portal.main}>
      <div 
        className={
          is_signin.includes('signup_page') || is_signin.includes('start_page') ? portal.start_container : portal.no_show
        }
      >
        {
          is_signin.includes('signup_page') ? (
            <Signup 
              signup={signup}
              route_signup={route_signup}
            />
          ) : ``
        }
        {
          is_signin.includes('start_page') ? (
            <Start 
              route_signup={route_signup}
              signin={signin}
            />
          ) : ``
        }
      </div>
      { is_signin.includes('main_page') ? <Main /> : `` }
    </main>
  )
}