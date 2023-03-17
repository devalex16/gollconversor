import styled from 'styled-components'

const StyleMoedas = styled.div`
  display: ${(props) => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0px;
  right: 0px;
  
  .label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 80vw;
    background: #0D1117;
    box-shadow: 0px 0px 5px white;
    border-radius: 10px;
    padding: 10px;
    @media (min-width: 700px) {
      border-radius: 40px;
    }
    
    input {
      font-size: 1em;
      color: white;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid white;
      background: #161B22;
      margin-top: 10px;
      @media (min-width: 700px) {
        font-size: 1.8em;
        border-radius: 20px;
        padding: 15px;
        margin-top: 0px;
      }
    }

    button {
      font-size: 1em;
      color: white;
      padding: 10px 20px;
      border: 1px solid white;
      border-radius: 100px;
      margin: 5px;
      background: #0D1117;
      @media (min-width: 700px) {
        font-size: 2em;
        padding: 10px 20px;
        border-radius: 200px;
        margin: 10px;
      }
    }
  }
`;

export default StyleMoedas