import React from "react";
import { NavBar, Header, Divider, NavBack } from "components/ui";
import { CreateFundraiserModel } from "interface"
import styles from 'styles/fundraiser.module.css';
import button from 'styles/button.module.css';

export const CreateFundraiser: React.FC<CreateFundraiserModel> = ({children, previous_page, page_number, emit}) => {
  const display = {
    "display": page_number === 1 ? `block` : `none`,
  }

  return (
    <>
      <NavBack nav={previous_page} />
      <Header header="Create Fundraiser" />
      <Divider />
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