import styled from 'styled-components'

const StyleConv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 40px;
  
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid white;
    border-radius: 10px;
    padding 10px;
    margin: 0px 5px 0px 5px;
    position: relative;

    @media (min-width: 700px) {
      font-size: 2.0em;
      border-radius: 20px;
      padding: 20px;
    }
  }

  .wrapper:hover {
    outline: 2px solid white;
  }

  p {
    margin: auto;
  }

  .wrapper > nav {
    height: 20px;
    width: 45px;
    text-align: center;
    color: black;
    border-radius: 6px;
    background: white;
    margin: auto;
    @media (min-width: 700px) {
      height: 50px;
      width: 100px;
      font-size: 1.2em;
    }
  }

  .options {
    display: flex;
    flex-direction: column;
    list-style: none;
    color: black;
    background: white;
    padding: 10px;
    border-radius: 10px;
    position: absolute;
    top: 35px;
    right: 13px;
    @media (min-width: 700px) {
      top: 80px;
      right: 57px;
      font-size: 1.2em;
      padding: 20px;
    }
  }

  #wrap1 {
    display: ${(props) => props.setWrap1 ? "block" : "none"};
  }

  #wrap2 {
    display: ${(props) => props.setWrap2 ? "block" : "none"};
  }

  .options li {
    margin-top: 5px;
    @media (min-width: 700px) {
      margin-top: 10px;
    }
  }

  .middle {
    height: 100%;
    text-align: center;
    font-weight: 300;
    color: grey;
    @media (min-width: 700px) {
      font-weight: 700;
      font-size: 1.4em;
      margin-top: 15px;
    }
  }
`;

export default StyleConv;