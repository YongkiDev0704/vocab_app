import { useState } from "react";
import styled from "styled-components";

export const FlashCard = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <Wrapper onClick={handleFlip}>
      <Card isFlipped={isFlipped}>
        <CardFront>
          <Word>
            <Top>
              <Spelling> abandon </Spelling>
              <Level> B2 </Level>
            </Top>
            <Bottom>
                <EN> /əˈbandən/ </EN>
                <KR> /어벤든/ </KR>
            </Bottom>
          </Word>
          <Meaning>
            <EN> a: This word refers to a political movement that opposed the separation of the Church of England from the state. </EN>
            <KR> (누구누구를) 버리다. </KR>
          </Meaning>
          <Example>
            <EN> e: "her natural mother had her at an early age" </EN>
            <KR> "그녀의 친어머니는 어릴 때 그녀를 버렸습니다" </KR>
          </Example>
        </CardFront>
        <CardBack>
          <Image src="https://picsum.photos/300/200" alt="Flashcard Image" />
        </CardBack>
      </Card>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  perspective: 1000px;
`;

const Card = styled.div<{ isFlipped: Boolean}>`
  width: 320px;
  height: 220px;
  max-width: 600px;
  max-height: 400px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  cursor: pointers;
  
  transform: ${({ 
    isFlipped 
  }) => (
    isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
  )};
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-sizing: border-box;
`;

const CardFront = styled(CardFace)`
  background-color: #ececec;
  padding: 4px 4px 12px 20px;
`;

const CardBack = styled(CardFace)`
  background-color: black;
  color: white;
  transform: rotateY(180deg); 
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
`;

const Word = styled.div`
  display: flex;
  flex-direction: column;
`;

const Top = styled.div`
  display: flex;
  height: 30px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
`;

const Spelling = styled.div`
  font-weight: bold;
  font-size: 24px;
  box-sizing: border-box;
  padding-right: 4px;
`;

const Level = styled.div`
  display: flex;
  font-size: 10px;
  padding-top: 6px;
`;

const EN = styled.div`
  font-size: 11px;
`;

const KR = styled.div`
  font-size: 11px;
`;

const Meaning = styled.div`  
  &::first-letter {
    font-weight: bold;
  }
  
  & > div {
    font-size: 12px;
  }
`;

const Example = styled.div`

  &::first-letter {
    font-weight: bold;
  }
  
  & > div {
    font-size: 12px;
  }
`;
