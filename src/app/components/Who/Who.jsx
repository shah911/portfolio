import CustomButton from "../Custombutton/CustomButton";
import styles from "./page.module.css";
import React from "react";

export default function Who({ id }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.Section} id={id}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <ul className={styles.List}>
            <li className={styles.ListItemTitle}>FRONTEND</li>
            <li className={styles.ListItem}>HTML</li>
            <li className={styles.ListItem}>CSS</li>
            <li className={styles.ListItem}>Js</li>
            <li className={styles.ListItem}>Ts</li>
            <li className={styles.ListItem}>ReactJs</li>
            <li className={styles.ListItem}>NextJs</li>
            <li className={styles.ListItemTitle}>BACKEND</li>
            <li className={styles.ListItem}>nodeJs</li>
            <li className={styles.ListItem}>NextJs</li>
            <li className={styles.ListItem}>Prisma</li>
            <li className={styles.ListItem}>Docker</li>
            <li className={styles.ListItem}>SQL Databases</li>
            <li className={styles.ListItem}>NOSQL Databases</li>
          </ul>
        </div>
        <div className={styles.Right}>
          <h1 className={styles.Title}>My Skillset</h1>
          <p className={styles.Desc}>
            As a Full-stack developer, I am proficient in both frontend and
            backend development.
          </p>
          <div className={styles.HireMeContainer}>
            <CustomButton
              title="See my Work"
              onClick={() => scrollToSection("works")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
