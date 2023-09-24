import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Admin() {
  return (
    <div className={styles.Container}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        href="https://bespoke-malabi-efb7d9.netlify.app/login"
      >
        <div className={styles.Wrapper}>
          <motion.div
            className={styles.ImgContainer}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img className={styles.img} src="/admin-panel.PNG" alt="" fill />
          </motion.div>
          <div className={styles.details}>
            <h3 className={styles.projectTitle}>SHAH.</h3>
            <p className={styles.desc}>
              This platform serves as a demonstrational admin panel. To access
              the admin-panel, please utilize the following login credentials:
              username <strong>admin</strong> and password
              <strong> 12345</strong>. Kindly refrain from removing any existing
              products; however, you are welcome to create and delete your own
              as required.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
