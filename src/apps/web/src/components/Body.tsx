import styled from "styled-components";

import { FlashCard } from "./FlashCard";
import { VocabCategory } from "./VocabCategory";
import { levels } from "../constants";

export const Body = () => {
  return (
    <Wrapper>
      <Section> Today's Word </Section>
      <FlashCard />
      <Section> Explore Vocabs </Section>
      {levels.map((level) => (
        <VocabCategory key={level} level={level}/>
      ))}
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
