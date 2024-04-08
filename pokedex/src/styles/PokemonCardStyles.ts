// StyledPokemonCard.tsx
import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  overflow: hidden;
  background-color: white;
  margin: 10px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`;

export const Number = styled.div`
  align-self: flex-start;
  padding: 10px;
  font-weight: bold;
  color: #555;
`;

export const PokemonImage = styled.img`
  width: 100%;
  display: block;
`;

export const Name = styled.div`
  font-size: 1.2em;
  margin-bottom: 15px;
  color: #333;
`;
