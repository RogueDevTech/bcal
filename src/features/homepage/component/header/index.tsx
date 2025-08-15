import React from "react";
import styles from "./styles.module.scss";
// import { ArrowIcon } from "@/component/icons/icons";

import BcaiButton from "../button";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <section id="our-projects" className={styles.wrapper}>
        <div className={styles.product_listing}>
          <h4 className={styles.top_section_head}>Inside Flourish Estate</h4>
          <div
            className={styles.estate_list}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className={styles.estate_one}>
              <div className={styles.overlay}>
                <div className={styles.header}>
                  <p>Completed homes</p>
                  <div className={styles.second_para}>
                    <p>
                      Stylish, move-in-ready homes, fully finished for modern
                      living.
                    </p>
                    <BcaiButton
                      link="https://www.bcalproperties.com.ng/search/label/COMPLETED%20HOMES "
                      color="#90BDFF"
                      backgroundColor=" rgba(255, 255, 255, 0)"
                      hoverColor=""
                      hoverBackgroundColor=""
                      border="1px solid #90BDFF"
                      rightIcon={<FaArrowRight />}
                    >
                      Explore
                    </BcaiButton>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.estate_two}>
              <div className={styles.overlay}>
                <div className={styles.header}>
                  <p>Ongoing Projects</p>
                  <div className={styles.second_para}>
                    <p>
                      Take a look at our estate’s latest developments currently
                      under construction.
                    </p>
                    <BcaiButton
                      link="https://www.bcalproperties.com.ng/search/label/ONGOING%20PROJECTS "
                      color="#90BDFF"
                      backgroundColor=" rgba(255, 255, 255, 0)"
                      hoverColor=""
                      hoverBackgroundColor=""
                      border="1px solid #90BDFF"
                      rightIcon={<FaArrowRight />}
                    >
                      Explore
                    </BcaiButton>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.estate_three}>
              <div className={styles.overlay}>
                <div className={styles.header}>
                  <p>Lands for sale</p>
                  <div className={styles.second_para}>
                    <p>
                      Secure a prime plot and enjoy the opportunity to build
                      your dream home in a thriving community.
                    </p>
                    <BcaiButton
                      link="https://www.bcalproperties.com.ng/search/label/LANDS%20FOR%20SALES"
                      color="#90BDFF"
                      backgroundColor="rgba(255, 255, 255, 0)"
                      hoverColor=""
                      hoverBackgroundColor=""
                      border="1px solid #90BDFF"
                      rightIcon={<FaArrowRight />}
                    >
                      Explore
                    </BcaiButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
