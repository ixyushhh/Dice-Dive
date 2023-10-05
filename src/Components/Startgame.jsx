import styled from 'styled-components'
import { Button } from '../Styled/Button'

const Startgame = ({toggle}) => {
  return (
    // <div>
    // {/* <div className={`${styles.container}`}>
    //   <main className={`${styles.main_container}`}>
    //     <div className={styles.container_image}>
    //       <img src='/Images/Dices.png' alt='Dice Image'/>
    //     </div>

    //     <div className={styles.container_text}>
    //       <h1>DICE GAME</h1>
    //       <button>Play Now</button>
    //     </div>
    //   </main>
    // </div> */}
    // </div>

        <Container>
        <div className='img'>
          <Img src='/Images/Dices.png' alt='Dice Image'/>
        </div>

        <div className="content">
          <h1>DICE GAME</h1>
          <Button className='pos' onClick={toggle}>Play Now</Button>
        </div>
        </Container>
  )
}

export default Startgame


const Container = styled.div `
  width: 1040px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  height: 90vh;
  top: 25px;
//   right: 20px; 

  .content {
    h1{
        font-size: 70px;
        white-space: nowrap;
    }
  
  .pos{
    position: absolute;
  }
    
  }
`;

const Img = styled.img `
  &:hover{
  filter: drop-shadow(0px 0px 20px black)
  }
`;

