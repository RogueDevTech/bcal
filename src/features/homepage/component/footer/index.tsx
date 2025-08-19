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
                  <p>
                    Bcal Jat Petrol Station plaza, KM 6,Akure-Ado Road, Jegele
                    Akure.
                  </p>
                </div>
                <div className={styles.icon}>
                  <WhatsappIcon className={styles.Icon} />
                  {/* <span>07034344050 ,07011111653</span> */}
                  <p>07034344050,</p>
                  <p>07011111653</p>
                </div>
              </div>
              <div className={styles.list_two}>
                <div className={styles.icon}>
                  <EmailIcon className={styles.Icon} />
                  <p>bcalprop@gmail.com</p>
                </div>
                <div className={styles.icon}>
                  <PhoneIcon className={styles.Icon} />
                  <p>07011111653,</p>
                  <p>0703434050</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.lower_footer}>
          <div className={styles.detail}>
            <div className={styles.footer_center_txt}>
              <Link href={"/"}>
                <h3>B C A L PROPERTIES</h3>
              </Link>

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
                <div className={styles.link_icon}>
                  <a
                    href="https://web.facebook.com/Bcalpropertiesnigltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FacebookIcon />
                  </a>
                </div>
                <div className={styles.link_icon}>
                  <a
                    href="https://www.instagram.com/bcalpropertiesnigltd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon />
                  </a>
                </div>
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
