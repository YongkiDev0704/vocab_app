import styled from "styled-components";

import { GNB } from "../components/GNB";
import { useState, useCallback } from "react";
import { VocabPage } from "./vocab";

export const Main = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const hanldeMenuChange = useCallback((page: string) => {
    setSelectedMenu(page);
  }, [])

  return (
    <Wrapper>
      <GNB onSelectPage={hanldeMenuChange}/>
      <Content>
        {selectedMenu === "" && <>Main</>}
        {selectedMenu === "vocab" && <VocabPage />}
        {selectedMenu === "dashboard" && <>dashboard</>}
      </Content>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;  

const Content = styled.div`
  width: 100%;
  flex: 1;
  background-color: white;
  color: black;
`;