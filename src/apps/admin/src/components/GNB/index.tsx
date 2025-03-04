import styled from "styled-components";
import { Rabbit, ALargeSmall } from "lucide-react";
import { useState } from "react";

interface GNBProps {
  onSelectPage: (page: string) => void;
}

export const GNB = ({ onSelectPage }: GNBProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleMenuClick = (menu: string) => {
    setIsClicked(!isClicked);
    onSelectPage(menu);
  };

  return (
    <Wrapper>
      <Top>
        <Rabbit color="white" size={24} />
        Vocab App
      </Top>
      <Menu 
        isClicked={isClicked} 
        onClick={() => handleMenuClick("vocab")}
      >
        <ALargeSmall color="white" size={20} />
        Vocab
      </Menu>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  background-color: #1520A6;
`;

const Top = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  background-color: #3944BC;
  box-sizing: border-box;
  padding: 0 24px;
`;

const Menu = styled.div<{ isClicked: boolean }>`  
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  opacity: ${({ isClicked }) => (isClicked ? 1 : 0.6)};
  font-weight: bold;
  font-size: 16px;
  box-sizing: border-box;
  padding: 8px 24px;
  position: relative; 
  cursor: pointer;
  transition: background-color 0.3s ease, opacity 0.3s ease, color 0.3s ease; 
  
  &:hover {
    background-color: rgb(103, 113, 218);
  }

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ isClicked }) => (isClicked ? "4px" : "0px")};  
    background-color: #4caf50; 
    transition: width 0.3s ease, opacity 0.3s ease;  
    opacity: ${({ isClicked }) => (isClicked ? 1 : 0)};      
  }
`;
