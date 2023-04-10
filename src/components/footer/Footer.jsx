import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/Footer.module.css";
import { ROUTES } from "../../utils/routes";

import LOGO from "../../images/logo.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt="irishman" />
        </Link>
      </div>
      <div className={styles.right}>
        Developed by{" "}
        <a
          href="mailto:timhudsondev013@gmail.com"
          target="blank"
          rel="noreferrer"
        >
          Timur Aliev
        </a>
      </div>
      <div className={styles.socials}>
        <a href="https://instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://youtube.com">
          <YouTubeIcon />
        </a>
      </div>
    </section>
  );
};

export default Footer;
