import React, { useEffect, useState } from "react";
import styles from "./CodeCopyButton.module.css";
import CopyIcon from "../../assets/icon-copy.svg";

function copyWithFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
}

const CodeCopyButton = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (!isCopied) return;
    const timer = setTimeout(() => setIsCopied(false), 2000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(code);
      } else {
        copyWithFallback(code);
      }
      setIsCopied(true);
    } catch (error) {
      console.error("코드를 복사할 수 없습니다", error);
    }
  };

  return (
    <div className={styles.copyArea}>
      <button type="button" className={styles.copyBtn} onClick={handleCopy}>
        <img src={CopyIcon} alt="" />
        <span className="a11y-hidden">코드 복사</span>
      </button>
      <span role="status" aria-live="polite">
        {isCopied && <span className={styles.tooltip}>복사 완료</span>}
      </span>
    </div>
  );
};

export default CodeCopyButton;
