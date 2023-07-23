import React from 'react'
import styles from './page.module.css'

export default function CustomButton({title, type, onClick}) {
  return (
    <div className={styles.ButtonContainer}>
      <button className={styles.Button} type={type} onClick={onClick}>{title}</button>
    </div>
  )
}
