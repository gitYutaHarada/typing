"use client";

import classes from "@/components/questions/questions.module.css";
import { useInputText } from "@/hooks/useInputText";

export const Question = () => {
  const { mount, remained, inputText, marker, question, handleInputText } = useInputText();

  if (!mount) {
    return <div className={classes.textContainer}>…Loading…</div>;
  }

  return (
    <div className={classes.textContainer}>
      <div className={classes.question}>
        <span>{remained}</span>
        <span className={classes.marker}>{marker}</span>
      </div>
      <input
        type="text"
        value={inputText}
        onChange={handleInputText}
        className={classes.text}
      ></input>
    </div>
  );
};
