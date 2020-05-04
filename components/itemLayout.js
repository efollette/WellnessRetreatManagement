/**
 * Fiename: itemLayout.js
 * Author: Erik Follette
 * Description: Custom layout for the dashboard items to make them a 2 column grid
 * Date: May 3rd, 2020
 */
import styles from './itemLayout.module.css'

export default function ItemLayout({ children }) {
  return ( 
      <div className={styles.container}>
          {children}
      </div>
  );
}