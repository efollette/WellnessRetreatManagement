/**
 * Fiename: input.js
 * Author: Manav Vats
 * Description: Input field that stores data in our db
 * Date: May 12th, 2020
 */
import styles from './input.module.css'

export default function Input({identity},{type}) {
    var id = identity;
    var tp = type;
    return (
        <div className={styles.box}>
            <input type={tp} id={id} placeholder={id}></input>
        </div>
    );
}