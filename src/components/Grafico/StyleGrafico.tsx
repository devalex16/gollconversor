import styled from 'styled-components'

const StyleGrafico = styled.div`
  display: flex;
  flex-direction: row;
  height: 70%;
  width: 100%;
  padding: 50px;
  position: relative;

  .colun {
    width: 30px;
    height: 100px;
    background: white;
    border-radius: 5px;
    border: 1px solid #007BFF;
    position: absolute;
    bottom: 40px;
    
    @media (min-width: 700px) {
      height: 100px;
      width: 60px;
      border-radius: 20px;
      bottom: 60px;
    }
  }
  
  #colun0 {
    height: 200px;
    margin-left: 0px;
    
    @media (min-width: 700px) {
      height: 200px;
      margin-left: 75px;
    }
  }

  #colun1 {
    height: 180px;
    margin-left: 40px;

    @media (min-width: 700px) {
      height: 40px;
      margin-left: 170px;
    }
  }

  #colun2 {
    height: 80px;
    margin-left: 80px;
    
    @media (min-width: 700px) {
      height: 80px;
      margin-left: 262px;
    }
  }

  #colun3 {
    height: 50px;
    margin-left: 120px;
    
    @media (min-width: 700px) {
      height: 230px;
      margin-left: 360px;
    }
  }

  #colun4 {
    height: 120px;
    margin-left: 160px;
    
    @media (min-width: 700px) {
      height: 200px;
      margin-left: 453px;
    }
  }

  #colun5 {
    height: 90px;
    margin-left: 200px;
    @media (min-width: 700px) {
      height: 300px;
      margin-left: 550px;
    }
  }

  #colun6 {
    height: 190px;
    margin-left: 240px;
    @media (min-width: 700px) {
      height: 390px;
      margin-left: 645px;
    }
  }

  .moedas {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: .7em;
    position: absolute;
    left: 20px;
    top: 1px;

    p {
      margin: 100% 0% 100% 0%;
    }
    
    @media (min-width: 700px) {
      font-size: 1.7em;
      left: 40px;
    }
  }

  .dias {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: .7em;
    position: absolute;
    left: 0px;
    bottom: 20px;
    
    p {
      margin: 0% 4.4% 0% 4.4%;
    }

    @media (min-width: 700px) {
      font-size: 1.7em;
    }
  }
  
`;

export default StyleGrafico