import React from "react";
import styles from "./styles.module.scss";
import broken from "@/component/images/broken-frame.webp";
import Image from "next/image";

const AboutUs = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.about_us_screen}>
          <Image src={broken} alt="broken" className={styles.brokenImages} />
          <div className={styles.about_us}>
            <p className={styles.header}>ABOUT US</p>
            <div className={styles.about_us_description}>
              <p>
                At BCAL Properties, we are committed to creating exceptional
                communities that blend quality, comfort, and lasting value. With
                a focus on innovative design, strategic locations, and high
                construction standards, we develop properties that meet the
                needs of modern living while delivering strong investment
                potential.
              </p>
              <p>
                From residential estates to prime land developments, our goal is
                to provide spaces where families can thrive and investors can
                prosper. Every project is guided by integrity, attention to
                detail, and a vision to shape better places to live, work, and
                grow.
              </p>
              <button className={styles.btn}>Read More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
