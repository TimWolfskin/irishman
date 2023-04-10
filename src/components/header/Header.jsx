import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Header.module.css";

import {ROUTES} from '../../utils/routes'

import LOGO from '../../images/logo.png'
import AVATAR from '../../images/avatar.svg'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="irishman" />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
        <div className={styles.avatar} style={{ backgroundImage: `url(${AVATAR})` }} />
          <div className={styles.username}>Guest</div>
        </div>
        <form className={styles.form}> 
        <div className={styles.icon}>
          <SearchOutlinedIcon />
        </div>
        <div className={styles.input}>
          <input type="search"
           name="search" 
           placeholder="Search for anything..."
           autoComplete="off"
           onChange={() => {}}
           value=""
           />
        </div>
        {false && <div className={styles.box}></div>}
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <FavoriteIcon />
          </Link>

          <Link to={ROUTES.CART} className={styles.cart}>
            <ShoppingCartOutlinedIcon />
            <span className={styles.count}>3</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
