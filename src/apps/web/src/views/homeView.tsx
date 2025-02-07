import styled from "styled-components";

import { Header } from "../components/Header";
import { MAX_WIDTH } from "../style/GlobalStyle";

export const HomeView = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  font-size: 20px;
  display: flex;
  border: 1px solid black;
`;