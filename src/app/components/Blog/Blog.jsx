import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Admin() {
  return (
    <div className={styles.Container}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        href="https://blog-git-main-shah911.vercel.app/"
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
              src="/Blog.PNG"
              alt=""
              width={280}
              height={140}
            />
          </motion.div>
          <div className={styles.details}>
            <p className={styles.desc}>
              This platform functions as a demonstrative blog site. Please note
              that you need a <strong>Google account</strong> for authentication
              in order to publish a blog post.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
