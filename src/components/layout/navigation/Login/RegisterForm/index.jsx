import React from 'react';
import styles from "./RegisterForm.module.scss";

const RegisterForm = ({ toggleFormType }) => {
  return (
    <div className={styles.registerForm}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3>Registration</h3>
          <form>
            <input type="text" name='name' placeholder='Entry your name' />
            <input type="email" name='email' placeholder='Entry your email' />
            <input type="password" name='password' placeholder='Create password' />
            <input type="password" name='confirmPassword' placeholder='Confirm password' />
            <label htmlFor="checkbox">
              <input type="checkbox" name="checkbox" id='checkbox' />
              <span>I accept all terms & conditions</span>
            </label>
            <button className={styles.btnLogin}>Register</button>
          </form>
          <div className={styles.btnToggleForm}>Already have an account? <a role='button' onClick={toggleFormType}>Login</a></div>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm