import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from 'styles/img-liked.module.css';
import wood from "images/wood.jpg";
import { ImgLikedModel } from "interface";

export const ImgLiked: React.FC<ImgLikedModel> = ({id, name, url, img, liked_organization}) => {
  const [favorite, set_favorite] = useState(liked_organization ? `favorite` : `favorite_border`);
  const [border, set_border] = useState(liked_organization ? styles.favorited : styles.not_favorited);

  const navigate = useNavigate();
  const src = img ? img : wood;

  const go_to = () => {
    const url_name = name?.replaceAll(` `, `_`).toLocaleLowerCase();
    const get_url = `${url}${url_name}?id=${id}`;
    return url ? navigate(get_url) : undefined
  };

  const switch_favorite = () => {
    const change_fav = favorite === `favorite` ?  `favorite_border` : `favorite`;
    const change_border = favorite === `favorite` ? styles.not_favorited : styles.favorited;
    set_favorite(change_fav);
    set_border(change_border);
  }

  return (
    <div className={styles.img_container}>
      <img
        className={styles.img}
        src={src} 
        alt=""
        onClick={go_to}
      />
      <div className={styles.container}>
        <span 
          className={[`material-icons`, border].join(` `)}
          onClick={switch_favorite}
        >{favorite}</span>
      </div>
    </div>
  )
}