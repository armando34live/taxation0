import React from "react";
import styles from "@/components/Footer/Footer.module.css";
const Footer = (): React.ReactElement => {
  return (
    <>
    
      <footer className={styles.footer}>
        <span>
        desenvolvido Por <a href="https://taxationmind.com">Taxation</a>
        </span>
      </footer>
    </>
  );
};

export default Footer;
