'use client'
import styles from './page.module.css'
import Hero from './components/Hero/Hero'
import Who from './components/Who/Who'
import Works from './components/Works/Works'
import Contact from './components/Contact/Contact'


export default function Home() {
  return (
    <div className={styles.Container}>
       <Hero id = "hero" />
       <Who id = "who"/>
       <Works id = "works"/>
       <Contact id = "contact" />
    </div>
  )
}
