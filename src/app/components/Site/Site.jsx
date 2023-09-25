import React from "react";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Site() {
  return (
    <div className={styles.Container}>
      <Link
        style={{ color: "inherit", textDecoration: "none" }}
        href="https://phenomenal-cuchufli-dadc2d.netlify.app/"
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
              src="/site.PNG"
              alt=""
              width={280}
              height={140}
            />
          </motion.div>
          <div className={styles.details}>
            <p className={styles.desc}>
              This is a demo store. You can use <strong>admin</strong> as the
              username and <strong>12345</strong> as the login credentials to
              access and proceed with the checkout process. For payments, you
              may use the default credit card number{" "}
              <strong>4242 4242 4242</strong>, any 4-digit number for the expiry
              date, and any 3-digit number for the CVC.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
