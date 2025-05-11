import { useEffect, useState } from "react";
import { useQuestions } from "@/hooks/useQuestions";

export const useInputText = () => {
  const { tempQuestions, handleQuestions } = useQuestions();
  const [mount, setMount] = useState(false);

  const [remained, setRemained] = useState("");
  const [inputText, setInputText] = useState("");
  const [question, setQuestion] = useState(() => handleQuestions(""));
  const [marker, setMarker] = useState(question);

  const handleInputText = (e) => {
    setInputText(e.target.value);
    const sliceMarker = question.slice(0, e.target.value.length);

    //e.target.valueとe.target.valueの長さまでのquestionが等しい
    if (e.target.value === sliceMarker) {
      setMarker(question.slice(e.target.value.length, question.length));
      setRemained(question.slice(0, e.target.value.length));

      //全くすべて等しい
      if (e.target.value === question) {
        //questionを抜いた新しいQuestionsを受け取る
        const newQuestion = handleQuestions(question);

        setQuestion(newQuestion);

        setRemained("");
        setMarker(newQuestion);

        setInputText("");
      }
    }
  };

  useEffect(() => {
    setMount(true);
    return () => {
      setMarker("");
    };
  }, []);

  return { mount, remained, inputText, marker, handleInputText, tempQuestions };
};
