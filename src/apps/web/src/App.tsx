import styled from 'styled-components'
import { GlobalStyle } from './style/GlobalStyle'

import { HomeView } from './views/homeView'

 export const App = () => {

  return (
    <ProviderWrap>
      <GlobalStyle />
      <HomeView />
    </ProviderWrap>

  )
}

const ProviderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
