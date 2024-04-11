import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, color = "blue" }) => {
  const buttonClass = `${styles.button} ${styles[color]}`;
  return <button className={buttonClass}>{children}</button>;
};

export default Button;
