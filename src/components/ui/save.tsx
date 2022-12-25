import React from "react";
import styles from "styles/save.module.css";
import { SaveModel } from "interface"

export const Save: React.FC<SaveModel> = ({ save }) => {
  
  return (
    <div 
      className={styles.save}
      onClick={save}
    >Save</div>
  );
};
