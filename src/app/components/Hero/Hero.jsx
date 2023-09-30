import React from "react";
import styles from "./page.module.css";
import CustomButton from "../Custombutton/CustomButton";
import NavBar from "../Navber/NavBar";
import Link from "next/link";
import AutoTyping from "../Autotype/Autotyping";
import { motion } from "framer-motion";
import Image from "next/image";

const animationVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", delay: 2, duration: 0.6 },
  },
};

export default function Hero({ id }) {
  return (
    <div className={styles.Section} id={id}>
      <NavBar />
      <div className={styles.Container}>
        <motion.div
          className={styles.Left}
          variants={animationVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className={styles.Title}>Hi, I'm Shahzeb</h1>
          <p className={styles.Desc}>
            I'm a <AutoTyping /> Developer.
          </p>
          <div className={styles.HireMeContainer}>
            <Link href="https://www.linkedin.com/in/mian-shahzeb-3b8617245/">
              <CustomButton title="Learn More" />
            </Link>
          </div>
        </motion.div>
        <motion.div
          className={styles.Right}
          variants={animationVariants}
          initial="hidden"
          animate="visible"
        >
          <Image
            className={styles.Img}
            src="/pexels-miguel-á-padriñán-1591060-removebg-preview-removebg.png"
            alt=""
            fill
            priority
            sizes="50vw"
          />
        </motion.div>
      </div>
    </div>
  );
}
