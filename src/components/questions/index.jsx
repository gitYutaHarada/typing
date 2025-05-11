"use client";

import classes from "@/components/questions/questions.module.css";
import { useInputText } from "@/hooks/useInputText";
import { useQuestions } from "@/hooks/useQuestions";

export const Question = () => {
  const { mount, remained, inputText, marker, handleInputText, tempQuestions } =
    useInputText();
  const { handleQuestions } = useQuestions();

  if (!mount) {
    return <div className={classes.textContainer}>…Loading…</div>;
  }
  if (tempQuestions.length === 0) {
    return (
      <div className={classes.textContainer}>
        <a>おめでとうございます</a>
        <input
          type="button"
          value="最初から始める"
          onClick={() => window.location.reload()}
        />
      </div>
    );
  } else {
    return (
      <div className={classes.textContainer}>
        <div className={classes.question}>
          <span className={classes.remained}>{remained}</span>
          <span className={classes.marker}>{marker}</span>
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputText}
          className={classes.text}
        />
      </div>
    );
  }
};
