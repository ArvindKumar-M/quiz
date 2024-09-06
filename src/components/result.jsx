import React from 'react'

const Result = () => {
  return (
    <div className='result'>
      <div>
      <p className='your-result'>Your result</p>
      </div>
      <div className='score-guage'>
         guage
      </div>
      <div className=''>
        <p>8 correct</p>
        <p>2 wrong</p>
      </div>
      <div className='reset'>
        <button className='reset-button'>Start Again</button>
      </div>
    </div>
  )
}

export default Result