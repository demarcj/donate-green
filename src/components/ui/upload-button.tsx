import React from "react";
import { UploadButtonModel } from "interface";
import styles from "styles/upload-button.module.css";
import button from "styles/button.module.css";

export const UploadButton: React.FC<UploadButtonModel> = ({is_center}) => {
  const center = {
    "height": "100%",
    "display": "flex",
    "justify-content": "center",
    "align-items": "center"
  };
  const empty = {};

  return (
    <form style={ is_center ? center : empty } className={styles.form}>
      <div className={button.upload}>
        <label className={styles.label} htmlFor="upload">Upload image</label>
        <input 
            className={styles.input} 
            type="file" 
            name="upload" 
            id="upload" 
            accept=".jpg, .jpeg, .png"  
        />
      </div>
    </form>
  )
}