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
          <span className={styles.ListItemTitle}>FRONTEND</span>
          <div className={styles.skills}>
            {FrontEnd.map((item) => (
              <motion.div
                className={styles.skills}
                key={item.url}
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

          <span className={styles.ListItemTitle}>BACKEND</span>
          <div className={styles.skills}>
            {BackEnd.map((item) => (
              <motion.div
                className={styles.skills}
                key={item.url}
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
          <h1 className={styles.Title}>My Skillset</h1>
          <p className={styles.Desc}>
            As a Full-stack developer, I am proficient in both frontend and
            backend development.
          </p>
          <div className={styles.HireMeContainer}>
            <CustomButton
              title="See my Work"
              onClick={() => scrollToSection("works")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
