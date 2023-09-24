import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className={styles.Container}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        href="https://64ad3c43519f46007feb8675--spectacular-faun-321258.netlify.app/"
      >
        <div className={styles.Wrapper}>
          <motion.div
            className={styles.ImgContainer}
            whileHover={{
              scale: 1.1,
              transition: { type: "spring", stiffness: 300 },
            }}
          >
            <img className={styles.img} src="/Port.PNG" alt="" />
          </motion.div>
          <div className={styles.details}>
            <h3 className={styles.projectTitle}>SHAHDev</h3>
            <p className={styles.desc}>
              This platform functions as a professional portfolio site,
              exclusively featuring <strong>3D models</strong>.
            </p>
            <div style={{ width: "max-content" }}></div>
          </div>
        </div>
      </Link>
    </div>
  );
}
