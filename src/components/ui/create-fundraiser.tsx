import React from "react";
import { NavBar, Header, Divider, NavBack } from "components/ui";
import { CreateFundraiserModel } from "interface"
import styles from 'styles/fundraiser.module.css';
import button from 'styles/button.module.css';

export const CreateFundraiser: React.FC<CreateFundraiserModel> = ({children, previous_page, page_number, emit}) => {
  const display = {
    "display": page_number === 1 ? `block` : `none`,
  }

  const pathname = window.location.pathname;
  const start_title = pathname.replace(`/profile/fundraiser/create/`, ``);
  const end_title_index = start_title.lastIndexOf(`/`);
  const title = start_title.substring(0, end_title_index)
  
  return (
    <>
      <NavBack nav={previous_page} />
      <Header header="Create Fundraiser" />
      <Divider />
      <h2 className={styles.title}>{title.replaceAll(`_`, ` `)}</h2>
      {children}
      <div className={button.container}>
        <div
          className={styles.disclaimer} 
          style={display}
        >Transaction fees may be deducted from each donation</div>
        <button 
          className={button.outline}
          onClick={emit}
        >{page_number < 4 ? `Continue` : `Create`}</button>
      </div>
      <NavBar />
    </>
  )
}