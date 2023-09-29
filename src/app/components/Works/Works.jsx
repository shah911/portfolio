import Admin from "../Admin/Admin";
import Js from "../Js/Js";
import Portfolio from "../Portfolio/Portfolio";
import Site from "../Site/Site";
import Blog from "../Blog/Blog";
import styles from "./page.module.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const animate = {
  hidden: {
    y: 50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", delay: 0.2, duration: 0.6 },
  },
};

export default function Works({ id }) {
  const [work, setWork] = useState("E-commerce site");
  const data = [
    "E-commerce site",
    "Admin panel",
    "3D-portfolio",
    "Blog site",
    "Js",
  ];

  const getComponent = (work) => {
    switch (work) {
      case "Js":
        return <Js />;
      case "E-commerce site":
        return <Site />;
      case "Admin panel":
        return <Admin />;
      case "Blog site":
        return <Blog />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div className={styles.Section} id={id}>
      <div className={styles.Container}>
        <motion.div
          className={styles.Left}
          variants={animate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ul className={styles.List}>
            {data.map((item) => (
              <li
                key={item}
                className={
                  item === work
                    ? `${styles.ListItem} ${styles.selected}`
                    : styles.ListItem
                }
                onClick={() => setWork(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className={styles.Right}
          variants={animate}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={work}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {getComponent(work)}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
