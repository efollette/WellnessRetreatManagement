/**
 * Fiename: button.js
 * Author: Erik Follette
 * Description: Button component that links to another page when pressed
 * Date: May 3rd, 2020
 */
import Link from 'next/link'
import styles from './button.module.css'

export default function Button({text}) {
    var path = '/dashboard'; //+ text.toLowerCase();
    return (
        <div className={styles.box}>
            <Link href={path}>
                <a className={styles.p}>{text}</a>
            </Link>
        </div>
    );
}