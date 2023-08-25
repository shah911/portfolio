import React from "react";
import styles from "./page.module.css";
import CustomButton from "../Custombutton/CustomButton";
import Link from "next/link";

export default function Js() {
  return (
    <div className={styles.Container}>
      <div className={styles.WrapperContainer}>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          href="https://shah911.github.io/Drum-kit/"
        >
          <div className={styles.Wrapper}>
            <div className={styles.ImgContainer}>
              <img className={styles.img} src="/drumkit.PNG" alt="" />
            </div>
            <div className={styles.details}>
              <h3 className={styles.projectTitle}>Drum kit</h3>
              <div style={{ width: "max-content" }}></div>
            </div>
          </div>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          href="https://shah911.github.io/simon-game/"
        >
          <div className={styles.Wrapper}>
            <div className={styles.ImgContainer}>
              <img className={styles.img} src="/simon-game.PNG" alt="" />
            </div>
            <div className={styles.details}>
              <h3 className={styles.projectTitle}>Simon game</h3>
              <div style={{ width: "max-content" }}></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
