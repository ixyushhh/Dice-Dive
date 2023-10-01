import styled from 'styled-components'
import { useState } from 'react';

const Numberselector = () => {

    const arrNumber = [1,2,3,4,5,6];
    const [selectnumber, setselectnumber] = useState();
    console.log(selectnumber);
  return (
    <NumberSelectorContainer>
      <div className='flex'>
        {arrNumber.map( (value,i) => (
            <Box isSelected={value==selectnumber}
            key={i}
            onClick={() => setselectnumber(value)}>{value}</Box>
        ))}
    </div>
    <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default Numberselector

const Box = styled.div `
  border: 1px solid black;
  width: 72px;
  height: 72px;
  font-size: 24px;
  font-weight: 700;
  display: grid;
  place-items: center;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (!props.isSelected ? "black" : "white")};
`;

const NumberSelectorContainer = styled.div `
  .flex{
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 24px;
    font-weight: 700;
    display:flex;
    flex-direction: column;
    align-items:end;
  }

`;