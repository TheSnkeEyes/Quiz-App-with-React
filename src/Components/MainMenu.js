import React, { useContext } from 'react'
import { QuizContext } from '../Helper/Context';

export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext)
  return (
    <div className='Menu'>
     <button className='StartBtn' onClick={() => {
        setGameState('quiz')
     }}>Start Quiz</button>
    </div>
  )
}

