import { useEffect, useState } from "react";
import { handleQuestion } from "@/hooks/useQuestions";

export const useInputText = () => {
  const [mount, setMount] = useState(false);

  const [remained, setRemained] = useState("");
  const [inputText, setInputText] = useState("");
  const [question, setQuestion] = useState(handleQuestion());
  const [marker, setMarker] = useState(question);

  const handleInputText = (e) => {
    setInputText(e.target.value);
    const sliceMarker = question.slice(0, e.target.value.length);

    if (e.target.value === sliceMarker) {
      setMarker(question.slice(e.target.value.length, question.length));
      setRemained(question.slice(0, e.target.value.length));
    }
  };

  useEffect(() => {
    setMount(true);
    return () => {
      setMarker("");
    };
  }, []);

  return { mount, remained, inputText, marker, handleInputText };
};
