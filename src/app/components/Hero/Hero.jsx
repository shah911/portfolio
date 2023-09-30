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
  visible: (delay) => ({
    y: 0,
    opacity: 1,
    transition: { type: "tween", delay, duration: 0.6 },
  }),
};

export default function Hero({ id }) {
  return (
    <div className={styles.Section} id={id}>
      <NavBar />
      <div className={styles.Container}>
        <div className={styles.Left}>
          <motion.h1
            className={styles.Title}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Hi, I'm Shahzeb
          </motion.h1>
          <motion.p
            className={styles.Desc}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            I'm a <AutoTyping /> Developer.
          </motion.p>
          <motion.div
            className={styles.HireMeContainer}
            variants={animationVariants}
            initial="hidden"
            animate="visible"
            custom={5}
          >
            <Link href="https://www.linkedin.com/in/mian-shahzeb-3b8617245/">
              <CustomButton title="Learn More" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className={styles.Right}
          variants={animationVariants}
          initial="hidden"
          animate="visible"
          custom={6}
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
