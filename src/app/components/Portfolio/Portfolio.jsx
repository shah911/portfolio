import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
            <Image
              className={styles.img}
              src="/Port.PNG"
              alt=""
              width={280}
              height={140}
            />
          </motion.div>
          <div className={styles.details}>
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
