"use client";
import React from "react";
import styles from "./page.module.css";
import CustomButton from "../Custombutton/CustomButton";
import { motion } from "framer-motion";

export default function NavBar() {
  const text = "<SHAHDev />";
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      className={styles.Section}
      initial={{ y: "-100vw" }}
      animate={{ y: 0, transition: { type: "spring", damping: 12 } }}
    >
      <div className={styles.Container}>
        <div className={styles.LogoContainer}>
          {text.split("").map((char, i) => (
            <motion.span
              className={styles.Logo}
              onClick={() => scrollToSection("hero")}
              key={i}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </div>
        <div className={styles.Links}>
          <ul className={styles.List}>
            <li
              className={styles.ListItem}
              onClick={() => scrollToSection("who")}
            >
              Skills
            </li>
            <li
              className={styles.ListItem}
              onClick={() => scrollToSection("works")}
            >
              Projects
            </li>
          </ul>
        </div>
        <div className={styles.Hire}>
          <CustomButton
            title="Hire Now"
            onClick={() => scrollToSection("contact")}
          />
        </div>
      </div>
    </motion.div>
  );
}
