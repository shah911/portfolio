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
        href="https://bespoke-malabi-efb7d9.netlify.app/login"
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
              src="/admin-panel.PNG"
              alt=""
              width={280}
              height={140}
            />
          </motion.div>
          <div className={styles.details}>
            <p className={styles.desc}>
              This platform serves as a demonstrational admin panel. To access
              the admin-panel, please utilize the following login credentials:
              username <strong>admin</strong> and password
              <strong> 12345</strong>. Kindly refrain from removing any existing
              products; however, you are welcome to create and delete your own
              as required.
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
