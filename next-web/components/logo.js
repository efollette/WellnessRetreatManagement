/**
 * Fiename: logo.js
 * Author: Erik Follette
 * Description: Component tat contains our logo
 * Date: May 3rd, 2020
 */
import Link from 'next/link'
import styles from './logo.module.css'

export default function Logo() {
    return (
        <Link href="/">
            <a>
                <img
                src="/images/logo.png"
                className={styles.logo}
                alt={'logo'}
                />
            </a>
        </Link>
    );
}