import React from "react";
import styles from "styles/header.module.css";
import { HeaderModel }from "interface";

export const Header: React.FC<HeaderModel> = ({ header }) => (
  <h1 className={styles.header}>{header}</h1>
);