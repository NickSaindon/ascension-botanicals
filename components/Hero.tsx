import React from "react";
import styles from "../styles/Hero.module.scss";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  height?: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage = "/images/image1.png",
  height = "800px",
}) => {
  return (
    <div className={styles.heroSection} style={{ height }}>
      <div className={styles.heroContainer}>
        {subtitle && <h2 className={styles.heroTitle}>{title}</h2>}
        <h1 className={styles.heroSubTitle}>{subtitle}</h1>

        <div
          className={styles.heroImageWrapper}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
      </div>
      {/* Bottom Wave */}
      <svg
        className={styles.heroWave}
        viewBox="0 0 1200 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,50 Q300,100 600,50 T1200,50 L1200,100 L0,100 Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
};

export default Hero;
