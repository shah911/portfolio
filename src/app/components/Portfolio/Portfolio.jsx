import React from "react";
import styles from "./page.module.css";
import CustomButton from "../Custombutton/CustomButton";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.Container}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        href="https://64ad3c43519f46007feb8675--spectacular-faun-321258.netlify.app/"
      >
        <div className={styles.Wrapper}>
          <div className={styles.ImgContainer}>
            <img className={styles.img} src="/Port.PNG" alt="" />
          </div>
          <div className={styles.details}>
            <h3 className={styles.projectTitle}>SHAHDev</h3>
            <div style={{ width: "max-content" }}></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
