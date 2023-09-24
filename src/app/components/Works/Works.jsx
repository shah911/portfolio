import Admin from "../Admin/Admin";
import Js from "../Js/Js";
import Portfolio from "../Portfolio/Portfolio";
import Site from "../Site/Site";
import Blog from "../Blog/Blog";
import styles from "./page.module.css";
import React, { useState } from "react";

const data = [
  "E-commerce site",
  "Admin panel",
  "3D-portfolio",
  "Blog site",
  "Js",
];

export default function Works({ id }) {
  const [work, setWork] = useState("E-commerce site");
  return (
    <div className={styles.Section} id={id}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <ul className={styles.List}>
            {data.map((item) => (
              <li
                key={item}
                className={styles.ListItem}
                onClick={() => setWork(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.Right}>
          {work === "Js" ? (
            <Js />
          ) : work === "E-commerce site" ? (
            <Site />
          ) : work === "Admin panel" ? (
            <Admin />
          ) : work === "Blog site" ? (
            <Blog />
          ) : (
            <Portfolio />
          )}
        </div>
      </div>
    </div>
  );
}
