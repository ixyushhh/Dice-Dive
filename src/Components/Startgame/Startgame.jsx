import styles from './Startgame.module.css'
import styled from 'styled-components'

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
          <img src='/Images/Dices.png' alt='Dice Image'/>
        </div>

        <div className="content">
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
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
  }
`;

const Button = styled.button `
  position: absolute;
  padding: 8px 50px;
  right: 10px;
  background-color: black;
  color: white;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  border: 2px solid transparent;
  transition: 0.4s ease-in;

  &:hover{
    cursor:pointer;
    background-color: #edf2f4;
    color: black;
    border: 2px solid black;
    box-shadow: 0px 0px 20px #9f86c0;
    transition: 0.2s ease-in;
  }
`;