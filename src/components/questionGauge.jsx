import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const QuestionGauge = ({ questionNumber, totalQuestions }) => {
  const progress = (questionNumber / totalQuestions) * 100;

  return (
    <div style={{ width: 100, margin: 'auto'}}>
      <CircularProgressbarWithChildren
        value={progress}
        styles={buildStyles({
          rotation: 0.5, 
          strokeLinecap: 'round', 
          pathColor: `rgb(42, 132, 179)`,
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
          pathTransitionDuration: 0.5,
          strokeWidth: 10,
        })}
        strokeWidth={12}
      >
        <div style={{  display:"flex", alignItems:"center", justifyContent:"center", gap:"2px", fontWeight: 'bold',color:"#333" }}>
      <span style={{fontSize:34, color:"black"}}>   {questionNumber}</span><span style={{fontSize:16}}>/</span> <span style={{fontSize:18, }}>{totalQuestions}</span>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default QuestionGauge;
