import React, { useState } from "react";
import styles from "styles/donate-input.module.css";

export const DonateInput: React.FC = () => {
  const [ amount, set_amount ] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.button}>
        Hey
      </div>
      <input 
        className={styles.input}
        value={amount}
        onChange={ e => set_amount(parseInt(e.target.value)) }
      />
    </div>
  );
};
