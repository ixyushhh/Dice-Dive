import './App.css'
import styled from 'styled-components' // With the help of styled component we'll be able to manage CSS in the same component only    
import Startgame from './Components/Startgame/Startgame';
import { useState } from 'react';
import Gameplay from './Components/Gameplay/Gameplay';

function App() {

  const [IsGameStarted, setIsGameStarted] = useState(false);

  const toggleButton = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <div>
      { IsGameStarted ? <Gameplay/> : <Startgame toggle={toggleButton}/> }
    </div>
  )
}

export default App
