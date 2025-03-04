import styled from "styled-components";
import React from "react";
import { createRoot } from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import { App } from "./App.tsx"
import { ApolloProvider } from "@apollo/client";

import { client } from "./apolloClient.ts";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Wrapper>
          <App />
        </Wrapper>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)
