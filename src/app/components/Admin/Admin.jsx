import React from 'react'
import styles from './page.module.css'
import CustomButton from '../Custombutton/CustomButton'
import Link from 'next/link'

export default function Admin() {
  return (
    <div className={styles.Container}>
      <div className={styles.Wrapper}>
         <div className={styles.ImgContainer}>
         <img className={styles.img} src='/admin-panel.PNG' alt=''/>
         </div>
         <div className={styles.details}>
          <h3 className={styles.projectTitle}>SHAH.</h3>
          <p className={styles.desc}>
          This platform serves as a demonstrational admin panel. 
          To access the admin-panel, please utilize the following 
          login credentials: username <strong>admin</strong> and password 
          <strong> 12345</strong>. Kindly refrain from removing any existing 
          products; however, you are welcome to create and delete your own as required. 
          </p>
          <div style={{width: "max-content"}}>
           <Link href="https://bespoke-malabi-efb7d9.netlify.app/login">
           <CustomButton title="Demo"/>
           </Link>
          </div>
         </div>
      </div>
    </div>
  )
}
