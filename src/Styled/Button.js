import styled from 'styled-components'

export const Button = styled.button `
//   position: absolute;
  padding: 8px 50px;
  right: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s ease-in;

  &:hover{
    cursor:pointer;
    background-color: #edf2f4;
    color: black;
    border: 1px solid black;
    box-shadow: 0px 0px 20px #9f86c0;
    transition: 0.2s ease-in;
  }
`;

//Making varient of the button 

export const OutlineButton = styled(Button) `
  background-color: #edf2f4;
  color: black;
  border: 1px solid black;

  &:hover{
    cursor:pointer;
    background-color: black;
    color: white;
    border: 1px solid transparent;
    box-shadow: 0px 0px 20px #9f86c0;
    transition: 0.2s ease-in;
  }
`;