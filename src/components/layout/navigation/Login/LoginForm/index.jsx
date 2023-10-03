import React from 'react';
import styles from "./LoginForm.module.scss";
import { Link } from 'react-router-dom';

const LoginForm = ({ toggleFormType }) => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Log in</h3>
          <form>
            <input type="email" name='email' placeholder='Entry your email' />
            <input type="password" name='password' placeholder='Entry your password' />
            <input type="password" name='confirmPassword' placeholder='Confirm password' />
            <Link to="/home"><button className={styles.btnLogin}>Login</button></Link>
          </form>
          <div className={styles.btnToggleForm}>You don't have an account? <a role='button' onClick={toggleFormType}>Register</a></div>
        </div>
      </div>
    </div>
  )
}

export default LoginForm