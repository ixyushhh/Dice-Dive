import Numberselector from './Numberselector';
import Totalscore from './Totalscore';
import styled from 'styled-components'


const Gameplay = () => {
  return (
    <Maindiv>
      <div className='styling'>
        <Totalscore/>
        <Numberselector/>
      </div>
    </Maindiv>
  )
}

export default Gameplay

const Maindiv = styled.main`
  .styling{
    display: flex;
    justify-content: space-between;
    align-items: end;
    margin: 30px;
    padding: 20px;
  }
`;

