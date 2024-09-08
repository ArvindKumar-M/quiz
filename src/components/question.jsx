import React, { useState, useEffect } from "react";
import { getQuestion, postAnswer } from "../service/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import QuestionGauge from "./questionGauge";
import CustomAlert from "./popup/alert";
import "./question.css";

const Question = () => {
  const [questionData, setQuestionData] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [timer, setTimer] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const navigate = useNavigate();

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
      setOpenAlert(true);
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
    });
  };

  const closeAlert = () => {
    setOpenAlert(false);
  };

  useEffect(() => {
    fetchQuestionById(currentQuestionId);
  }, [currentQuestionId]);

  useEffect(() => {
    if (quizCompleted && currentQuestionId === 10) {
      navigate("/result");
    }
  }, [quizCompleted, currentQuestionId, navigate]);

  return (
    <div className="quiz-container">
      {openAlert && (
        <CustomAlert
          open={openAlert}
          onClose={closeAlert}
        />
      )}
      <div class="question-gauge-container">
        <QuestionGauge questionNumber={currentQuestionId} totalQuestions={10} />
      </div>
      <p className="quiz-question">{questionData?.question}</p>
      {questionData?.is_image===1&&<div className="q-image">
         <img src={questionData?.image_path} alt="" srcset="" />
      </div>}
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
      <div className="next-button">
        <button className="next" onClick={nextQuestion}>
          <span> Next</span>
          <FontAwesomeIcon className="arrow" icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default Question;
