import { useState } from "react";

const initialQuestions = [
  "JavaScript",
  "document",
  "window",
  "getElementById",
  "getElementsByClassName",
  "addEventListener",
];

export const useQuestions = () => {
  const [tempQuestions, setTempQuestions] = useState([...initialQuestions]);

  const handleQuestions = (prevQestuion) => {
    if (prevQestuion === "") {
      const newList = [...initialQuestions];
      setTempQuestions([...initialQuestions]);

      return newList[Math.floor(Math.random() * tempQuestions.length)];
    } else {
      const newList = tempQuestions.filter((q) => q != prevQestuion);
      if (newList.length === 0) {
        setTempQuestions([]);
        return false;
      } else setTempQuestions(newList);
      return newList[Math.floor(Math.random() * tempQuestions.length)];
    }
  };

  return { tempQuestions, handleQuestions };
};
