import Image from "next/image";
import CustomButton from "../Custombutton/CustomButton";
import styles from "./page.module.css";
import { motion } from "framer-motion";

const FrontEnd = [
  {
    url: "/HTML.png",
  },
  {
    url: "/pluginIcon-removebg-preview.png",
  },
  {
    url: "/JavaScript.png",
  },
  {
    url: "/typescript.png",
  },
  {
    url: "/React.png",
  },
  {
    url: "/nextjs.png",
  },
];

const BackEnd = [
  {
    url: "/node-removebg.png",
  },
  {
    url: "/prisma.png",
  },
  {
    url: "/docker-removebg.png",
  },
  {
    url: "/sql-removebg.png",
  },
  {
    url: "/MongoDB-removebg.png",
  },
];

const animate = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", delay: 0.2, duration: 0.6 },
  },
};

const ImageAnimation = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      delay: i * 0.05,
      stiffness: 300,
    },
  }),
};

export default function Who({ id }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.Section} id={id}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <motion.span
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.ListItemTitle}
          >
            FRONTEND
          </motion.span>
          <div className={styles.skills}>
            {FrontEnd.map((item, i) => (
              <motion.div
                className={styles.skills}
                key={item.url}
                custom={i}
                variants={ImageAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Image
                  src={item.url}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.img}
                />
              </motion.div>
            ))}
          </div>

          <motion.span
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.ListItemTitle}
          >
            BACKEND
          </motion.span>
          <div className={styles.skills}>
            {BackEnd.map((item, i) => (
              <motion.div
                className={styles.skills}
                key={item.url}
                custom={i}
                variants={ImageAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <Image
                  src={item.url}
                  alt=""
                  width={40}
                  height={40}
                  className={styles.img}
                />
              </motion.div>
            ))}
          </div>
        </div>
        <div className={styles.Right}>
          <motion.h1
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.Title}
          >
            My Skillset
          </motion.h1>
          <motion.p
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.Desc}
          >
            As a Full-stack developer, I am proficient in both frontend and
            backend development.
          </motion.p>
          <motion.div
            variants={animate}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={styles.HireMeContainer}
          >
            <CustomButton
              title="See my Work"
              onClick={() => scrollToSection("works")}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
