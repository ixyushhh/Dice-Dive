import { useState } from 'react'
import styled from 'styled-components'
const Roledice = ({CurrentDice, rollDice}) => {


  return (
    <Dicecontainer>
        <div className='dice' onClick={rollDice}>
        <img src={`/Images/dice_${CurrentDice}.png`}/> 
        </div>
        <p>Click on Dice to roll</p>
    </Dicecontainer>
  )
}

export default Roledice


const Dicecontainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  Img{
    width: 220px;
    height: 220px;
  }

  .dice{
    cursor: pointer;
  }

  p{
    font-size: 20px;
    font-weight: 500;
  }
`;