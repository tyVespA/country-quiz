import React from "react";
import styles from "../styles/AnswerButton.module.css";

export default function AnswerButton({ children }) {
  return <button className={styles.answerButton}>{children}</button>;
}
