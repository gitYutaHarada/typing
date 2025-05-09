import classes from "@/compoments/question/question.module.css";

const questions = [
  "JavaScript",
  "document",
  "window",
  "getElementById",
  "getElementByClassName",
  "addEventListener",
];

const entry = document.getElementById("entry");
const remained = document.getElementById("remained");
const inputText = document.getElementById("inputText");

//フォームに値が入力された際
document.addEventListener("input", (e) => {
  console.log(e);
});
export const Question = () => {
  return (
    <div className={classes.textContainer}>
      <div className={classes.question}>
        <span id="entry" className={classes.marker}></span>
        <span id="remained">JavaScript</span>
      </div>
      <input type="text" className={classes.text} id="inputText"></input>
    </div>
  );
};
