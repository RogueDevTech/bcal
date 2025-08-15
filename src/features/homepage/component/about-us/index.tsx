import React from "react";
import styles from "./styles.module.scss";
import broken from "@/component/images/broken-frame.webp";
import Image from "next/image";
import BcaiButton from "../button";
import { FaArrowRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <>
      <section id="about-us" className={styles.wrapper}>
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

              <BcaiButton
                link="https://www.bcalproperties.com.ng/"
                color="#90BDFF"
                backgroundColor="rgba(255, 255, 255, 0)"
                hoverColor=""
                hoverBackgroundColor=""
                border="1px solid #90BDFF"
                width="134px"
                rightIcon={<FaArrowRight />}
              >
                Explore
              </BcaiButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
