import React from "react";
import styles from "./styles.module.scss";

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
                    <button className={styles.btn}>Explore</button>
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
                    <button className={styles.btn}>Explore</button>
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
                    <button className={styles.btn}>Explore</button>
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
