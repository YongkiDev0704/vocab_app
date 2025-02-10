import styled from "styled-components";

import { levelInfo } from "../../constants";

interface VocabCategoryProps {
  level: keyof typeof levelInfo; 
};

export const VocabCategory: React.FC<VocabCategoryProps> = ({ level }) => {
  const info = levelInfo[level] || { label: "Unknown", image: "https://via.placeholder.com/300x200?text=Unknown" };

  return (
    <Wrapper>
      <Left>
        <LevelText>{info.label}</LevelText>
        <Explain>{info.explain}</Explain>
        <Level>Level: {level}</Level>
      </Left>
      <Right>
        <Image src={info.image} alt={info.label} />
      </Right>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  width: 280px;
  height: 120px;
  max-width: 320px;
  max-height: 120px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  padding: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
`;

const LevelText = styled.div`
  font-size: 12px;
  font-weight: 800;
  color: #333;
`;

const Explain = styled.div`
  font-size: 10px;
  color:rgb(127, 121, 121);
`;

const Level = styled.div`
  font-size: 10px;
  color:rgb(127, 121, 121);
`;


const Right = styled.div`
  width: 40%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
`;