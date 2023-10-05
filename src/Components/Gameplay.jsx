import { useState } from 'react';
import Numberselector from './Numberselector';
import Roledice from './Roledice';
import Totalscore from './Totalscore';
import styled from 'styled-components'
import { Button, OutlineButton } from '../Styled/Button'
import Rules from './Rules';


const Gameplay = () => {
  const [selectnumber, setselectnumber] = useState();
  const [CurrentDice, setCurrentDice] = useState(1);
  const [score, setscore] = useState(0);
  const [error, seterror] = useState("");
  const [rule, setrule] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const rollDice = () => {
    if(!selectnumber){
      seterror("You have not selected any number")
      return;
    }
    


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

  const resetScore = () => {
    setscore(0);
  }


  return (
    <Maindiv>
      <div className='styling'>
        <Totalscore score={score}/>
        <Numberselector seterror={seterror} error={error} selectnumber={selectnumber} setselectnumber={setselectnumber}/>
      </div>
      <Roledice CurrentDice={CurrentDice} rollDice={rollDice}/>
       <div className='primary'>
       <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
       <Button onClick={() => 
        setrule((prev) => !prev)
        }
       >{rule ? "Hide" : "Show"} Rules</Button>
       </div>
       { rule && <Rules/>}
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
 .primary{
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
 }
`;

