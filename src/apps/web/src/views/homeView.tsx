import styled from "styled-components";

import { Header } from "../components/Header";
import { MAX_WIDTH } from "../style/GlobalStyle";
import { Body } from "../components/Body";

export const HomeView = () => {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 152px;
`;
