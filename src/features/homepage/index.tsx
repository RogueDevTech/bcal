import React from "react";
import Hero from "./component/hero";
import styles from "./styles.module.scss";
import Discover from "@/component/discover";
import Header from "./component/header";
import AboutUs from "./component/about-us";
import WorkerOnSite from "@/component/our-worker-on-site";

const HomepageFile = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Hero />
        <Discover />
        <Header />
        <AboutUs />
        <WorkerOnSite />
      </div>
    </>
  );
};

export default HomepageFile;
