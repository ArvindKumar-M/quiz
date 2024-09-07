import React, { useState } from "react";
import Question from "./question";
import "./home.css";

const Home = () => {
  const [isStarted, setIsStarted] = useState(false);

  const startQuiz = () => {
    setIsStarted(true);
  };

  return (
    <div>
      {isStarted ? (
        <Question />
      ) : (
        <div className="home">
          <div className="logo">
            <img
              className="image"
              src="https://www.upraised.co/blog/content/images/2022/04/Horizontal-Logo---Full-Colour-3x.png"
              alt=""
            />
          </div>
          <div className="title-circle">
            <span className="title">Quiz</span>
          </div>
          <div className="action">
            <button className="start-button" onClick={startQuiz}>
              Start <div className="border full-rounded"></div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
