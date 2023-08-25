import React from "react";
import styles from "./page.module.css";
import CustomButton from "../Custombutton/CustomButton";
import Link from "next/link";

export default function Site() {
  return (
    <div className={styles.Container}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        href="https://phenomenal-cuchufli-dadc2d.netlify.app/"
      >
        <div className={styles.Wrapper}>
          <div className={styles.ImgContainer}>
            <img className={styles.img} src="/site.PNG" alt="" />
          </div>
          <div className={styles.details}>
            <h3 className={styles.projectTitle}>SHAH.</h3>
            <p className={styles.desc}>
              This is a demo store. You can use <strong>admin</strong> as the
              username and <strong>12345</strong> as the login credentials to
              access and proceed with the checkout process. For payments, you
              may use the default credit card number{" "}
              <strong>4242 4242 4242</strong>, any 4-digit number for the expiry
              date, and any 3-digit number for the CVC.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
