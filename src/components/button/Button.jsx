import React from "react";
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const Button = ({ children, color = "blue" }) => {
  const navigate = useNavigate();
  const GotoAPI = () => {
    navigate("/eduAPI");
  };
  const buttonClass = `${styles.button} ${styles[color]}`;
  return (
    <button className={buttonClass} onClick={GotoAPI}>
      {children}
    </button>
  );
};

export default Button;
