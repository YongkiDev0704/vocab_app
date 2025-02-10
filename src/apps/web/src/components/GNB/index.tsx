import styled from "styled-components";
import { MAX_WIDTH } from "../../style/GlobalStyle";

export const GNB = () => {
  return (
    <Wrapper>
      <Left>
        Vocabulary Study
      </Left>
      <Right>
        E
      </Right>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  font-weight: 800;
  color: black;
  max-width: ${MAX_WIDTH}px;
`;

const Left = styled.div`
  
`;

const Right = styled.div`
`
;
