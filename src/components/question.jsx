import React, {useState, useEffect } from "react";
import "./question.css";
import { getQuestion, postAnswer } from "../service/api";
import Result from "./result";


const Question = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [questionData, setQuestionData] = useState(null);
  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [quizCompleted, setQuizCompleted] = useState(false)

  
  const fetchQuestionById = async(id)=>{
    try {
      const res =  await getQuestion(id)
      setQuestionData(res)
    } catch (error) {
      console.error("Error fetching quiz data:", error)
    }
  }

 const submitAnswer = async(id)=>{
  const res = await postAnswer(id,{
    selected_choice_ids: selectedOptions,
        // time_taken: timer,
  })
  return res
}

const nextQuestion = async()=>{
  // await submitAnswer(selectedOptions)
  if(currentQuestionId<10){
    const nextQuestionId = currentQuestionId + 1;
    setCurrentQuestionId(nextQuestionId) 
  }else{
    setQuizCompleted(true)
  }
}
const handleOptionChange = (event) => {
  setSelectedOptions(event.target.value);
};

useEffect(()=>{
  fetchQuestionById(currentQuestionId)
},[currentQuestionId])

if(quizCompleted){
  return <Result/>
}

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
              name="option"
              value={choice_id}
            />
            {choice_text}
          </label>
        ))}
      </div>
      <button className="next-button" onClick={nextQuestion}>Next</button>
    </div>
  );
};

export default Question;
