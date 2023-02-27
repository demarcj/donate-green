import React from "react";
import { NavBar, Header, Divider, NavBack, GreenContainer } from "components/ui";
import { CreateFundraiserModel } from "interface"
import styles from 'styles/create-fundraiser.module.css';
import button from 'styles/button.module.css';

export const CreateFundraiser: React.FC<CreateFundraiserModel> = ({children, previous_page, page_number, emit}) => {
  const page_one = {
    "display": page_number === 1 ? `block` : `none`,
  };
  const page_three = {
    "marginTop": page_number === 3 ? `0` : `auto`,
  };
  const active_page = (page: number) => ({
    "width" : (page_number - 1) === page ? `50px` : `25px`
  })
  const pathname = window.location.pathname;
  const start_title = pathname.replace(`/profile/fundraiser/create/`, ``);
  const end_title_index = start_title.lastIndexOf(`/`);
  const title = start_title.substring(0, end_title_index);
  
  return (
    <div className={styles.container}>
      <div className={styles.header_container}>
        <NavBack nav={previous_page} />
        <Header header="Create Fundraiser" />
      </div>
      <Divider />
      <div className={styles.bottom_container}>
        <div className={styles.circles}>
          { Array.from({length: 4}, (el, i) => (
              <div
                key={i} 
                className={styles.circle}
                style={active_page(i)}
              ></div>
            )
          )}
        </div>
        {
          page_number < 4 ? (
            <>
              <h2 className={styles.title}>{title.replaceAll(`_`, ` `)}</h2>
              {children}
              <div 
                className={button.container}
                style={page_three}
              >
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
                <button 
                  className={[button.outline, button.bottom].join(" ")}
                  onClick={emit}
                >Create</button>
              </>
            </GreenContainer>
          )
        }
      </div>
      <NavBar />
    </div>
  )
}