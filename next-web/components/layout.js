/**
 * Fiename: layout.js
 * Author: Erik Follette
 * Description: Default layout for all of our pages, yellow or white bckgrounds
 * Date: May 3rd, 2020
 */
import Head from '../components/head'
import Nav from './nav'
import styles from './layout.module.css'

export const siteTitle = 'Alafia'

export default function Layout({ children, home, open }) {
  return (
    <div className={styles.page}>
      <Head></Head>
      {home ? (
      <div className={`${styles.centered} ${styles.yellow}`}>
        <main className={styles.centered}>
          {children}
        </main>
        <footer className={styles.footer}>
          Alafia - 2020
        </footer>
      </div>
      ) : (
      <div className={`${styles.dashboard} ${styles.white}`}>
        <Nav open={open}></Nav>
        <main className={styles.body}>
            {children}
        </main>
      </div>
      )}
    </div>
  )
}