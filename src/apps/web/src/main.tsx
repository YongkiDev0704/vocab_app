import React from 'react'
import { createRoot } from 'react-dom/client'
import styled from 'styled-components'

import { App } from './App'
import { MAX_WIDTH } from './style/GlobalStyle.tsx'

const Wrapper = styled.div`
  max-width: ${MAX_WIDTH}px;
  width: 100%;
  margin: 0 auto;
`;

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Wrapper>
      <App />
    </Wrapper>
  </React.StrictMode>
)
