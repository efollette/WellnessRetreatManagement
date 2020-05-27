/**
 * Fiename: loginForm.js
 * Author: Erik Follette
 * Description: Creates a a login form
 * Date: May 26th, 2020
 */
import Link from 'next/link';
import styles from './loginForm.module.css'

export default function LoginForm({handleChange, handleSubmit, error}) {
  return (
    <div className='login'>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor='username'> Username </label>
            <input required={true} type='text' id='username' name='username' onChange={handleChange}/>
            <label htmlFor='password'> Password </label>
            <input required={true} type='password' id='password' name='password' onChange={handleChange}/>
            <button type='submit'> Login </button>
            {error && (
                <p className=''>Error: {error}</p> 
            )}
        </form > 
    </div> 
  );
}