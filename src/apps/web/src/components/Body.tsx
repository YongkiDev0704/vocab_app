import styled from "styled-components";
import { FlashCard } from "./FlashCard";

export const Body = () => {
  return (
    <Wrapper>
      <Section>
        Today's Word
      </Section>
      <FlashCard />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 8px;
`;

const Section = styled.div`
  font-weight: bold;
  padding-bottom: 12px;
`;