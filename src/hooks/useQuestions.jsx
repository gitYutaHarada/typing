const questions = [
  "JavaScript",
  "document",
  "window",
  "getElementById",
  "getElementsByClassName",
  "addEventListener",
];

export const handleQuestion = () => {
  return questions[Math.floor(Math.random() * questions.length)];
};
