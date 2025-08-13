import React from "react";
import Hero from "./component/hero";
import styles from "./styles.module.scss";
import Discover from "@/component/discover";
import Header from "./component/header";
import AboutUs from "./component/about-us";
import WorkerOnSite from "@/component/our-worker-on-site";
import AOSProvider from "@/component/aos-provide";

const HomepageFile = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <AOSProvider>
          <Hero />
          <Discover />
          <Header />
          <AboutUs />
          <WorkerOnSite />
        </AOSProvider>
      </div>
    </>
  );
};

export default HomepageFile;
