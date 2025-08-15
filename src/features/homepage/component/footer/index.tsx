import React from "react";
import styles from "./styles.module.scss";

import Link from "next/link";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LocationIcon,
  PhoneIcon,
  WhatsappIcon,
} from "@/component/icons/icons";

const Footer = () => {
  return (
    <>
      <section id="customers" className={styles.wrapper}>
        <div className={styles.top_footer}>
          <div className={styles.center_txt}>
            <h3>CONTACT US</h3>
            <p>
              Get in touch with our team today We’re ready to guide you every
              step of the way.
            </p>
          </div>
          <div className={styles.footer_description}>
            <div className={styles.list}>
              <div className={styles.list_one}>
                <div className={styles.icon}>
                  <LocationIcon className={styles.Icon} />
                  <span>
                    Bcal Jat Petrol Station plaza, KM 6,Akure-Ado Road, Jegele
                    Akure.
                  </span>
                </div>
                <div className={styles.icon}>
                  <WhatsappIcon className={styles.Icon} />
                  <span>07034344050 , 07011111653</span>
                </div>
              </div>
              <div className={styles.list_two}>
                <div className={styles.icon}>
                  <EmailIcon className={styles.Icon} />
                  <span>bcalprop@gmail.com</span>
                </div>
                <div className={styles.icon}>
                  <PhoneIcon className={styles.Icon} />
                  <span>07011111653 , 0703434050</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lower_footer}>
          <div className={styles.detail}>
            <div className={styles.footer_center_txt}>
              <h3>B C A L</h3>
              <ul>
                <li>
                  <Link href={"#about-us"}>About us</Link>
                </li>
                <li>
                  <Link href={"#contact-us"}>Contact us</Link>
                </li>
                <li>
                  <Link href={"#privacy-policy"}>Privacy Policy</Link>
                </li>
              </ul>
              <div className={styles.social_media_icon}>
                <FacebookIcon />
                <InstagramIcon />
              </div>
            </div>
            <p className={styles.email}>© 2025 Bcal properties</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
