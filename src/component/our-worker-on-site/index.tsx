import React from "react";
import styles from "./styles.module.scss";
import { FaPlay } from "react-icons/fa";

const WorkerOnSite = () => {
  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.worker_on_site_info}>
          <div className={styles.txt_header}>
            <h3>OUR WORKERS ON SITE</h3>
            <p>Real-time footage from our project site.</p>
          </div>
          <div className={styles.worker_on_site_image}>
            <a
              href="https://www.youtube.com/playlist?list=PLMA5GuQljW6L4oQvRcFhNGxsZS-cyl6TZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={styles.click}>
                <FaPlay className={styles.video_icon} />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkerOnSite;
