import styled from 'styled-components'
import { useState } from 'react';

const Numberselector = ({seterror, error, selectnumber, setselectnumber}) => {

    const arrNumber = [1,2,3,4,5,6];
    
    console.log(selectnumber);

    const errorHandle = (value) => {
      setselectnumber(value)
      seterror("")
    }

  return (
    <NumberSelectorContainer>
      <p className='error'>{error}</p>
      <div className='flex'>
        {arrNumber.map( (value,i) => (
            <Box isSelected={value==selectnumber}
            key={i}
            onClick={() => errorHandle(value)}>{value}</Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default Numberselector

const Box = styled.div `
  cursor: pointer;
  border: 1px solid black;
  width: 62px;
  height: 62px;
  font-size: 20px;
  font-weight: 700;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const NumberSelectorContainer = styled.div `
  .error{
    color: red;
    font-size: 20px;
    font-weight: 500;
  }  

  .flex{
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 22px;
    font-weight: 700;
    display:flex;
    flex-direction: column;
    align-items:end;
  }

`;