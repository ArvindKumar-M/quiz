import React from "react";
import { useNavigate } from "react-router-dom";
import { takeRetest } from "../service/api";
import "./home.css";

const Home = () => {
  const navigate = useNavigate()

  const startQuiz = async() => {
    await takeRetest()
    navigate("/question")
  };

  return (
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
  );
};

export default Home;
