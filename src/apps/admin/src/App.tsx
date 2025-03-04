import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import { GlobalStyle } from "./style/GlobalStyle";
import { Main } from "./pages/Main";
import { Login } from "./pages/Login";
import { ProtectedRoute } from "./routes/ProtectedRoute";

export const App = () => {
  return (
    <ProviderWrap>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </ProviderWrap>
  )
};

const ProviderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
