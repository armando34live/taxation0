import React from "react";
import styles from "@/components/ContactContent/ContactContent.module.css";
import { CiUser, CiLocationOn } from "react-icons/ci";
import { BsEnvelope } from "react-icons/bs";

const ContactContent = (): React.ReactElement => {
  return (
    <>
      <div className={`${styles.column} ${styles.left}`}>
        <p>
          Mauris volutpat arcu eu mi volutpat fermentum. Aenean vel dignissim
          orci. Vestibulum mollis elit vel tellus viverra dictum.
        </p>
        <div className={styles.incons}>
          <div className={styles.row}>
            <i>
              <CiUser />
            </i>
            <div className={styles.info}>
              <div className={styles.head}>Empresa</div>
              <div className={styles.subTitle}>Taxation</div>
            </div>
          </div>

          <div className={styles.row}>
            <i>
              <CiLocationOn />
            </i>
            <div className={styles.info}>
              <div className={styles.head}>Enderço</div>
              <div className={styles.subTitle}>
                Av. Marquês de São Vicente São Paulo
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <i>
              <BsEnvelope />
            </i>
            <div className={styles.info}>
              <div className={styles.head}>E-mail</div>
              <div className={styles.subTitle}>contato@taxationmind.com</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactContent;
