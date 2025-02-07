import styled from "styled-components";

import { GNB } from "./GNB";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return (
    <Wrapper>
      <GNB/>
      <SearchBar/>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  gap: 28px;
  box-sizing: border-box;
  width: 100%;        
  padding: 12px 20px 32px 20px; 
  display: flex;
  flex-direction: column;
  background: white;
  border-bottom: 1px solid black;
`;