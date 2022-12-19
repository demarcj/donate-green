import React from 'react';
import { NavBackModel } from "interface";
import icon from "styles/material-icon.module.css";

export const Favorite: React.FC<NavBackModel> = ({ nav }) => {

  const set_favorite = () => {

  }

  return (
    <div className={icon.favorite_container}>
      <span 
        className={[`material-icons`, icon.favorite].join(` `)}
        onClick={() => set_favorite()}
      >favorite</span>
    </div>
  )
}