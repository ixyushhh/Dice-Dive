import styled from 'styled-components'

const Totalscore = () => {
  return (
    <Score>
    <h1>0</h1>
    <p>Total Score</p>
  </Score>
  )
}

export default Totalscore


const Score = styled.div `
  text-align:center;
  max-width:200px;
 
  h1{
    font-size: 80px;
    font-weight: 700;
    line-height: 80px;
  }

  p{
    font-size: 24px;
    font-weight: 500;
  }
`;