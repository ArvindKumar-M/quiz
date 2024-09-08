import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ResultGauge = ({percentage}) => {

  return (
    <div style={{ width: 150, margin: 'auto' }}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          rotation: 0.5 + (1 - percentage / 100) / 2, 
          strokeLinecap: 'round',
          pathColor: `rgb(42, 132, 179)`,
          trailColor: '#d6d6d6',
          backgroundColor: '#3e98c7',
          pathTransitionDuration: 0.5,
          strokeWidth: 10,
        })}
        strokeWidth={10}
      >
        <div style={{ fontSize: 32, fontWeight: 'bold' }}>{percentage}%</div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ResultGauge;
