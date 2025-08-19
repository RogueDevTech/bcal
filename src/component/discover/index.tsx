import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Property from "@/component/images/property.png";

const Discover = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.flex_image}>
          <Image
            src={Property}
            alt="work"
            width={586}
            height={569}
            className={styles.property_image}
            data-aos="fade-right"
            data-aos-delay="100"
          />
          <div
            className={styles.discover_flourish_estate}
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className={styles.overlay}>
              <div className={styles.txt_box}>
                <h3 className={styles.txt_head}>Discover Flourish Estate</h3>
                <p className={styles.paragraph_head}>
                  Flourish Estate, developed by BCAL Properties, blends comfort,
                  style, and opportunity in Akure, Ondo State. Just 5 minutes
                  from the airport and 10 minutes from the city centre, it
                  offers serene surroundings and modern infrastructure
                </p>
                <p className={styles.paragraph_head}>
                  More than just a neighbourhood, Flourish Estate is an
                  investment in lasting value , a secure, gated community of
                  thoughtfully crafted spaces suited for families and investors.
                  Own your space, build your vision, and truly flourish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Discover;
