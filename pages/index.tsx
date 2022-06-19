import Head from 'next/head'
import { HomeEcommerce } from './homeEcommerce'
import styles from  '../styles/animationEffect.module.css';

export default function Home() {
  return (
    <div className="">
  <div className={styles.containerAnimacao}>
    <HomeEcommerce/>
    </div>
    <div className={styles.overlay}></div>
    
    </div>
  )
}
