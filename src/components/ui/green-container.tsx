import React from "react";
import {GreenContainerModel} from "interface"
import styles from "styles/green-container.module.css";

export const GreenContainer: React.FC<GreenContainerModel> = ({children}) => (
  <div className={styles.container}>
    {children}
  </div>
);