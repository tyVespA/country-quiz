import React from "react";
import styles from "../styles/Question.module.css";
import AnswerButton from "./AnswerButton";

export default function Question() {
  return (
    <div className={styles.questionContainer}>
      <h2>Rome is the capital of:</h2>
      <AnswerButton>Guatemala</AnswerButton>
      <AnswerButton>Switzerland</AnswerButton>
      <AnswerButton>Italy</AnswerButton>
      <AnswerButton>South Korea</AnswerButton>
    </div>
  );
}
