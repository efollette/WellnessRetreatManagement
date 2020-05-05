/**
 * Fiename: item.js
 * Author: Erik Follette
 * Description: Creates a component for Dashboard options
 * Date: May 3rd, 2020
 */
import Link from 'next/link';
import styles from './item.module.css'

/**
 * @param {
 *  'icon': SVG,
 *  'title': String
 *  'subtitle': String
 * } props Expected properties
 */
export default function DashboardItem(props) {
  // Path to the item's page
  var path = '/' + props.path.toLowerCase();
  return (
    <Link href={path}>
      <div className={styles.container}>
        <div className={styles.icon}>
          {props.icon}
        </div>
        <div className={styles.info}>
          <div className={styles.title}>
            {props.title}
          </div>
          <div className={styles.subtitle}>
            {props.subtitle}
          </div>
        </div>
      </div>
    </Link>
  );
}