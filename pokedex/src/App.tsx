//import React from 'react';
import PokemonList from './components/PokemonList';
import styled from 'styled-components';

const AppContainer = styled.div`
  text-align: center;
  background-color: #ffffff;
  color: #373299
`;

// a styled component for the main heading
const MainHeading = styled.h1`
  color: #373299; 
`;

const StyledPokemonList = styled.div`
  color: #373299; 
`;

function App() {
  return (
    <AppContainer className="App">
      <MainHeading>Pokedex</MainHeading>
      <StyledPokemonList>
      <PokemonList />
      </StyledPokemonList>
    </AppContainer>
  );
}

export default App;

