import React from 'react';
import styles from "./Login.module.scss";

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const [formType, setFormType] = React.useState("register" ? "login" : "login");

  const toggleFormType = () => {
    setFormType(formType === "login" ? "register" : "login");
  }

  return (
    <div className={styles.login}>
      {formType === "login"
        ? <LoginForm toggleFormType={toggleFormType} />
        : <RegisterForm toggleFormType={toggleFormType} />}
    </div>
  )
}

export default Login