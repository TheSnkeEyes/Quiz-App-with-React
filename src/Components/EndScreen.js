import React from 'react';
import { QuizContext } from "../Helper/Context";
import { useState, useContext } from "react"


function EndScreen() {
  const {score, setScore, setGameState} = useContext(QuizContext);

  const resetQuiz =()=> {
    setScore(0);
    setGameState('mainmenu')
  }

  return (
    <div className='EndScreen'>
      <h1>Your score: </h1>
      <h2>{score}</h2>
      <button onClick={resetQuiz}>Reset</button>
    </div>
  )
}

export default EndScreen
