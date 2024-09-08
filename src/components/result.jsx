import React, { useEffect, useState } from "react";
import { getResult, takeRetest } from "../service/api";
import { useNavigate } from "react-router-dom";
import ResultGauge from "./ResultGauge";
import "./result.css";

const Result = () => {
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const resultPercent = Math.floor(
    (result?.correct_answers / result?.total_questions) * 100
  );

  const fetchResults = async () => {
    const res = await getResult();
    setResult(res);
  };

  const handleReset = async () => {
    await takeRetest();
    navigate("/");
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div className="card">
      <div className="result-header">
        <h2>Your result</h2>
      </div>
      <ResultGauge percentage={resultPercent} />
      <div className="result-details">
        <div className="correct">
          <span className="dot correct-dot"></span>
          <span className="numbers">{result?.correct_answers} </span>
          <span className="text">Correct</span>
        </div>
        <div className="incorrect">
          <span className="dot incorrect-dot"></span>
          <span className="numbers">{result?.incorrect_answers} </span>
          <span className="text">Incorrect</span>
        </div>
      </div>
      <div className="button-container">
        <button className="start-again-btn" onClick={handleReset}>
          Start Again
        </button>
      </div>
    </div>
  );
};

export default Result;
