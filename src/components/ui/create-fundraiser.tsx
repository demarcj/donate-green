import React from "react";
import { NavBar, Header, Divider, NavBack, GreenContainer } from "components/ui";
import { CreateFundraiserModel } from "interface"
import styles from 'styles/create-fundraiser.module.css';
import button from 'styles/button.module.css';

export const CreateFundraiser: React.FC<CreateFundraiserModel> = ({children, previous_page, page_number, emit}) => {
  const page_one = {
    "display": page_number === 1 ? `block` : `none`,
  };
  const pathname = window.location.pathname;
  const start_title = pathname.replace(`/profile/fundraiser/create/`, ``);
  const end_title_index = start_title.lastIndexOf(`/`);
  const title = start_title.substring(0, end_title_index)
  
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <NavBack nav={previous_page} />
        <Header header="Create Fundraiser" />
      </div>
      <Divider />
      <div className={styles.bottom_container}>
        {
          page_number < 4 ? (
            <>
              <h2 className={styles.title}>{title.replaceAll(`_`, ` `)}</h2>
              {children}
              <div className={button.container}>
                <div
                  className={styles.disclaimer} 
                  style={page_one}
                >Transaction fees may be deducted from each donation.</div>
                <button 
                  className={button.outline}
                  onClick={emit}
                >Continue</button>
              </div>
            </>
          ) : (
            <GreenContainer>
              <>
                {children}
                <div className={button.container}>
                  <button 
                    className={button.outline}
                    onClick={emit}
                  >Create</button>
                </div>
              </>
            </GreenContainer>
          )
        }
      </div>
      <NavBar />
    </div>
  )
}