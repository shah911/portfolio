'use client'
import styles from './page.module.css'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CustomButton from '../Custombutton/CustomButton';

export default function Contact({id}) {
    const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = ref.current;
    const name = form['name'].value;
    const email = form['email'].value;
    const message = form['message'].value;

    if (!name || !email || !message) {
      setErrorMessage(true);
    } else {
      e.preventDefault();
      emailjs
        .sendForm('service_n5x8q6d', 'template_x64ngce', ref.current, 'PefCKytrFK7i89DkL')
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
            <h1 className={styles.Title}>Contact Me</h1>
            <input type="text" placeholder="Name" name="name" className={styles.Input} />
            <input type="text" placeholder="Email" name="email" className={styles.Input} />
            <textarea placeholder="Write your Message" rows="8" name="message" className={styles.TextArea} />
            <div className={styles.ButtonContainer}>
              <CustomButton type="submit" title="Send" />
            </div>
            {success && <span className={styles.Message}>Your message has been sent. We'll get to you soon :)</span>}
            {errorMessage && <span className={styles.Message}>Please fill all the details :)</span>}
          </form>
        </div>
        <div className={styles.Right}>
        <div className={styles.RightItems}>
         <h1 className={styles.Title}>Got a Project? Let's Talk</h1>
          <p className={styles.desc}>
           Are you ready to start your first project? Enjoy a <strong>15%</strong> discount
           and hire me <strong>free</strong> for the first week. If you are not satisfied with
           my work, you can cancel the project within the first week without 
           incurring any charges. On the other hand, if you find the results 
           satisfactory, you can proceed with the payment as agreed upon.
          </p>
        </div>
        </div>
      </div>
    </div>
  )
}
