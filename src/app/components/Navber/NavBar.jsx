'use client'
import React from 'react'
import styles from './page.module.css'
import CustomButton from '../Custombutton/CustomButton'

export default function NavBar() {

    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.Section}>
      <div className={styles.Container}>
        <div className={styles.LogoContainer}>
          <span className={styles.Logo} onClick={() => scrollToSection('hero')}>{"<SHAHDev />"}</span>
        </div>
        <div className={styles.Links}>
          <ul className={styles.List}>
            <li className={styles.ListItem} onClick={() => scrollToSection('who')}>
              Skills
            </li>
            <li className={styles.ListItem} onClick={() => scrollToSection('works')}>
              Projects
            </li>
          </ul>
        </div>
        <div className={styles.Hire}>
          <CustomButton title="Hire Now" onClick={() => scrollToSection('contact')} />
        </div>
      </div>
    </div>
  )
}
