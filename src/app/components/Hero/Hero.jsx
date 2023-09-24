import React from "react";
import styles from "./page.module.css";
import CustomButton from "../Custombutton/CustomButton";
import NavBar from "../Navber/NavBar";
import Link from "next/link";
import AutoTyping from "../Autotype/Autotyping";
import { animate, motion } from "framer-motion";

export default function Hero({ id }) {
  return (
    <div className={styles.Section} id={id}>
      <NavBar />
      <motion.div
        className={styles.Container}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { ease: "easeInOut", delay: 1, duration: 1 },
        }}
      >
        <div className={styles.Left}>
          <h1 className={styles.Title}>Hi, I'm Shahzeb</h1>
          <p className={styles.Desc}>
            I'm a <AutoTyping /> Developer.
          </p>
          <div className={styles.HireMeContainer}>
            <Link href="https://www.linkedin.com/in/mian-shahzeb-3b8617245/">
              <CustomButton title="Learn More" />
            </Link>
          </div>
        </div>
        <div className={styles.Right}>
          <img
            className={styles.Img}
            src="/pexels-miguel-á-padriñán-1591060-removebg-preview-removebg.png"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
}
