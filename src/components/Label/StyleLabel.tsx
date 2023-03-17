import styled from 'styled-components';

const StyleLabel = styled.div`
  height: 500px;
  max-width: 900px;
  background: #0D1117;
  color: #FFFFFF;
  box-shadow: 0px 0px 5px gray;
  border-radius: 30px;
  @media (min-width: 700px) {
    height: 900px;
    border-radius: 60px;
  }
`;

export default StyleLabel;