"use client";

import classes from "@/components/question/question.module.css";
import { useEffect, useState } from "react";

const questions = [
  "JavaScript",
  "document",
  "window",
  "getElementById",
  "getElementsByClassName",
  "addEventListener",
];

const handleQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)];
};

export const Question = () => {
  const [mount, setMout] = useState(false);
  const [question, setQuestion] = useState(handleQuestion());
  const [marker, setMarker] = useState(question);
  const [remained, setRemained] = useState("");
  const [inputText, setInputText] = useState("");

  //フォームに値が入力された際
  const handleInputText = (e) => {
    setInputText(e.target.value);
    const sliceMarker = question.slice(0, e.target.value.length);
    console.log("aaa" + e.target.value + " " + sliceMarker);

    if (e.target.value === sliceMarker) {
      console.log("vvv");
      setMarker(question.slice(e.target.value.length, question.length));
      setRemained(question.slice(0, e.target.value.length));
    }
    console.log(marker + " " + remained);
  };

  useEffect(() => {
    setMout(true);
    return () => {
      setMarker("");
    };
  }, []);

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
