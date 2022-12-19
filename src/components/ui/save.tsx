import React from "react";
import styles from "styles/save.module.css";

export const Save: React.FC = () => {
  const save = () => {
    console.log(`hey there`)
  }

  return (
    <div 
      className={styles.save}
      onClick={save}
    >Save</div>
  );
};
