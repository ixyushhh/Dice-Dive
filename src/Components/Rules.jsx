import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
        <h1>How to play dice game</h1>
        <div className='text'>
          <p>Select any number</p>
          <p>Click on dice</p>
          <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
          <p>If you get wrong guess then 1 point will be dedcuted from total score</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
  background-color: #FBF1F1;
  padding: 20px;
  margin: 0 auto;
  border-radius: 5px;
  width: 800px;
  margin-top: 40px;

  h1{
    font-size: 24px;
  }

  .text{
    margin-top: 20px;
    gap: 4px;
  }
`;


