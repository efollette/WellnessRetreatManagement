/**
 * Fiename: signupForm.js
 * Author: Erik Follette
 * Description: Creates a a signup form
 * Date: May 26th, 2020
 */
import Link from 'next/link';
import styles from './signupForm.module.css'

export default function LoginForm({handleChange, handleSubmit, error}) {
  return (
    <div className='login'>
        <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor='username'> Username </label>
            <input required={true} type='text' id='username' name='username' onChange={handleChange}/>
            <label htmlFor='password'> Password </label>
            <input required={true} type='password' id='password' name='password' onChange={handleChange}/>
            <label htmlFor='cPassword'> Confirm Password </label>
            <input required={true} type='password' id='cPassword' name='password' onChange={handleChange}/>
            <button type='submit'> Sign Up </button>
            {error && (
                <p className={styles.error}>Error: {error}</p> 
            )}
        </form > 
    </div> 
  );
}