import React, { useState, useEffect } from "react";
import { getQuestion, postAnswer } from "../service/api";
import Result from "./result";
import "./question.css"; 

const Question = () => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [timer, setTimer] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const fetchQuestionById = async (id) => {
    try {
      const res = await getQuestion(id);
      setQuestionData(res);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  const handleOptionChange = (e) => {
    const selectedId = parseInt(e.target.value);
    setSelectedOptions((prev) =>
      e.target.checked
        ? [...prev, selectedId]
        : prev.filter((id) => id !== selectedId)
    );
  };

  const nextQuestion = () => {
    if (selectedOptions.length === 0) {
      alert("You must select atleast one option");
      return;
    }
    submitAnswer()
      .then(() => {
        if (currentQuestionId < 10) {
          const nextQuestionId = currentQuestionId + 1;
          setCurrentQuestionId(nextQuestionId);
          setSelectedOptions([]);
        } else {
          setQuizCompleted(true);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const submitAnswer = async () => {
    await postAnswer(currentQuestionId, {
      selected_choice_ids: selectedOptions,
      time_taken: 1,
      user_id: 1,
    });
  };

  useEffect(() => {
    fetchQuestionById(currentQuestionId);
  }, [currentQuestionId]);

  
  return (
    <div className="quiz-container">
      <div className="progress-container">
        <div className="progress-circle">
          <span className="progress-bold">{currentQuestionId}</span>/
          <span className="progress-light">10</span>
        </div>
      </div>
      <h2 className="quiz-question">{questionData?.question}</h2>
      <div className="options-container">
        {questionData?.choices.map(({ choice_text, choice_id }) => (
          <label key={choice_id} className="option-label">
            <input
              type="checkbox"
              value={choice_id}
              onChange={(e) => handleOptionChange(e)}
            />
            <span
              className={`custom-radio ${
                selectedOptions.includes(choice_id) ? "selected" : ""
              }`}
            ></span>
            <span>{choice_text}</span>
          </label>
        ))}
      </div>
      <button className="next-button" onClick={nextQuestion}>
        Next
      </button>
    </div>
  );
};

export default Question;
