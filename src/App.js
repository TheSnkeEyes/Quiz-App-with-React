
import { useState , useContext } from 'react';
import './App.css';
import EndScreen from './Components/EndScreen';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/Quiz';
import { QuizContext } from './Helper/Context';


function App() {

  const [gameState , setGameState] = useState('mainmenu')
  const [score , setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App by Tanju</h1>
      <QuizContext.Provider value={{gameState , setGameState , score , setScore}}>
        {gameState === 'quiz' && <Quiz/>}
        {gameState === 'mainmenu' && <MainMenu/>}
        {gameState === 'endscreen' && <EndScreen/>}
      </QuizContext.Provider>
      
    </div>
  );
}

export default App;
