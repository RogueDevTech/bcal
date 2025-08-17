"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { FaPlay } from "react-icons/fa";

const WorkerOnSite = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const loadYouTubeVideo = () => {
      const videoContainer = videoContainerRef.current;
      if (!videoContainer || videoContainer.querySelector("iframe")) return;

      const videoId = "FEgwxklEYC4";
      const embedHTML = `
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=${videoId}" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
          style="position:absolute; top:0; left:0;"
        ></iframe>
      `;

      const embedContainer = videoContainer.querySelector(
        `.${styles.youtubeEmbed}`
      );
      if (embedContainer) {
        embedContainer.innerHTML = embedHTML;
        setIsVideoLoaded(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          loadYouTubeVideo();
          entry.target.classList.add(styles.videoLoaded);
        } else if (isVideoLoaded) {
          entry.target.classList.remove(styles.videoLoaded);
        }
      },
      { threshold: 0.5, rootMargin: "200px" }
    );

    const currentRef = videoContainerRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [isVideoLoaded]);

  return (
    <>
      <section className={styles.wrapper}>
        <div className={styles.worker_on_site_info}>
          <div className={styles.txt_header}>
            <h3>OUR WORKERS ON SITE</h3>
            <p>Real-time footage from our project site.</p>
          </div>
          <div ref={videoContainerRef} className={styles.worker_on_site_image}>
            <div className={styles.click}>
              <FaPlay className={styles.video_icon} />
            </div>
            <div className={styles.youtubeEmbed}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkerOnSite;
