"use client";
import styles from "./page.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CustomButton from "../Custombutton/CustomButton";
import { motion } from "framer-motion";

const animate = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "tween", delay: 0.2, duration: 0.6 },
  },
};

export default function Contact({ id }) {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = ref.current;
    const name = form["name"].value;
    const email = form["email"].value;
    const message = form["message"].value;

    if (!name || !email || !message) {
      setErrorMessage(true);
    } else {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_n5x8q6d",
          "template_x64ngce",
          ref.current,
          "PefCKytrFK7i89DkL"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
            setErrorMessage(false);
            e.target.reset();
          },
          (error) => {
            console.log(error.text);
            setSuccess(false);
            setErrorMessage(true);
          }
        );
    }
  };
  return (
    <div className={styles.Section} id={id}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <form ref={ref} onSubmit={handleSubmit} className={styles.Form}>
            <motion.h1
              variants={animate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={styles.Title}
            >
              Contact Me
            </motion.h1>
            <motion.input
              type="text"
              placeholder="Name"
              name="name"
              className={styles.Input}
              variants={animate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.input
              type="text"
              placeholder="Email"
              name="email"
              className={styles.Input}
              variants={animate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.textarea
              placeholder="Write your Message"
              rows="8"
              name="message"
              className={styles.TextArea}
              variants={animate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
            <motion.div
              className={styles.ButtonContainer}
              variants={animate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CustomButton type="submit" title="Send" />
            </motion.div>
            {success && (
              <span className={styles.Message}>
                Your message has been sent. We'll get to you soon :)
              </span>
            )}
            {errorMessage && (
              <span className={styles.Message}>
                Please fill all the details :)
              </span>
            )}
          </form>
        </div>
        <div className={styles.Right}>
          <div className={styles.RightItems}>
            <motion.h1
              className={styles.Title}
              variants={animate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Got a Project? Let's Talk
            </motion.h1>
            <motion.p
              className={styles.desc}
              variants={animate}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              As a field that is constantly evolving, I am excited to learn new
              technologies and continue developing my skills. If you’re
              interested in collaborating or discussing web development, feel
              free to connect with me. I’m passionate about creating something
              truly exceptional and am always eager to take on a new challenge.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
}
