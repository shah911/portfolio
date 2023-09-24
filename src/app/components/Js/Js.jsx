import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
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
            <motion.div
              className={styles.ImgContainer}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <img className={styles.img} src="/drumkit.PNG" alt="" />
            </motion.div>
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
            <motion.div
              className={styles.ImgContainer}
              whileHover={{
                scale: 1.1,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <img className={styles.img} src="/simon-game.PNG" alt="" />
            </motion.div>
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
