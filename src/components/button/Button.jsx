import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({ children, color = "blue", goBack = false }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (goBack) {
      navigate(-1);
    } else {
      navigate("/eduAPI");
    }
  };
  const buttonClass = `${styles.button} ${styles[color]}`;
  return (
    <button className={buttonClass} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
