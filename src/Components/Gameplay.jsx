import { useState } from 'react';
import Numberselector from './Numberselector';
import Roledice from './Roledice';
import Totalscore from './Totalscore';
import styled from 'styled-components'


const Gameplay = () => {
  const [selectnumber, setselectnumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [score, setscore] = useState(0);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev) => randomNumber);

    if(selectnumber == randomNumber){
      setscore((prev) => prev + randomNumber)
    }
    else{
      setscore((prev) => prev - 1)
    }

    setselectnumber(undefined);
  }  


  return (
    <Maindiv>
      <div className='styling'>
        <Totalscore score={score}/>
        <Numberselector selectnumber={selectnumber} setselectnumber={setselectnumber}/>
      </div>
      <Roledice CurrentDice={CurrentDice} rollDice={rollDice}/>
    </Maindiv>
  )
}

export default Gameplay

const Maindiv = styled.main`
  .styling{
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 10px;
    padding: 10px 30px;
  }
`;

