import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <>
      <section
        className={styles.HeroBackground}
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div className={styles.overlay}>
          <div className={styles.displacement}>
            <h4 className={styles.header}>BCAL PROPERTIES</h4>
            <p className={styles.paragraph}>
              Building quality homes and offering prime lands for lasting value.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
