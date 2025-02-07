import styled from "styled-components";
import { MAX_WIDTH } from "../../style/GlobalStyle";

export const SearchBar = () => {
  return (
    <Wrapper>
      <Icon>
        🔍
      </Icon>
      <Input placeholder="Search vocab">
      </Input>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  box-sizing: border-box;
`;

const Icon = styled.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
`;

const Input = styled.input`
  width: 100%;
  max-width: ${MAX_WIDTH}px;
  padding: 16px 16px 16px 44px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  
  background-color: #F1F4F0;

  transition: border 0.3s;
  
  border-radius: 8px;
  outline: none;  
  border: none;       

`;