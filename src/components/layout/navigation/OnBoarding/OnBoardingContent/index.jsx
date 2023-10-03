import React from 'react';
import styles from "./OnBoardingContent.module.scss";

import { Link } from 'react-router-dom';

const OnBoardingContent = () => {
  return (
    <div className={styles.obBoardingContent}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Coffee so good, your taste buds will love it.
        </h1>
        <p className={styles.desc}>
          The best grain, the finest roast, the powerful flavor.
        </p>
        <Link to="/login">
          <button className={styles.btnGetStart}>Get Started</button>
        </Link>
      </div>
    </div>
  )
}

export default OnBoardingContent