import React from "react";


const Result = () => {
  
  return (
    <div className="result">
      <div>
        <p className="your-result">Your result</p>
      </div>
      <div className="score-guage">guage</div>
      <div className="">
        <p style={{ color: "green" }}>Correct Answers</p>
        <p style={{ color: "red" }}>incorrect_answers</p>
      </div>
      <div className="reset">
        <button className="reset-button">
          Start Again
        </button>
      </div>
    </div>
  );
};

export default Result;
