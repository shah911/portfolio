import React from 'react'
import styles from './page.module.css'
import CustomButton from '../Custombutton/CustomButton'
import Link from 'next/link'

export default function Js() {
  return (
    <div className={styles.Container}>
    <div className={styles.WrapperContainer}>
      <div className={styles.Wrapper}>
         <div className={styles.ImgContainer}>
           <img className={styles.img} src='/drumkit.PNG' alt=''/>
         </div>
         <div className={styles.details}>
          <h3 className={styles.projectTitle}>Drum kit</h3>
          <div style={{width: "max-content"}}>
           <Link href="https://shah911.github.io/Drum-kit/">
           <CustomButton title="Demo"/>
           </Link>
          </div>
         </div>
      </div>
      <div className={styles.Wrapper}>
         <div className={styles.ImgContainer}>
           <img className={styles.img} src='/simon-game.PNG' alt=''/>
         </div>
         <div className={styles.details}>
          <h3 className={styles.projectTitle}>Simon game</h3>
          <div style={{width: "max-content"}}>
           <Link href="https://shah911.github.io/simon-game/">
           <CustomButton title="Demo"/>
           </Link>
          </div>
         </div>
      </div>
     </div>
    </div>
  )
}
