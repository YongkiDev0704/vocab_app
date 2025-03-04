import styled from "styled-components";
import { VocabInput } from "../components/VocabInput";

export const VocabPage = () => {

  return (
    <Wrapper>
      <Header> Vocab </Header>
      <VocabInput />
      <Content>
        
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding-left: 12px;
  border-bottom: 1px solid black;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;