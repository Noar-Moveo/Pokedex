import styled from "styled-components";

export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px 26.73px;
    //margin: 174px 20px; 
  padding: 200px 50px;
  justify-content: c4enter;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    padding: 32px 16px;
  }
`;

export const Card = styled.div`
  width: 267.29px;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 32px;
  transition: 0.3s;
  border-radius: 5px;
  overflow: hidden;
  background-color: #f7f7f9;

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;

export const Number = styled.div`
  align-self: flex-start;
  font-size: 22px;
  margin-top: -20px;
  margin-left: -16.25px;
  padding: 10px;
  font-family: Roboto;
  font-weight: bold;
  color: #373299;
`;

export const PokemonImage = styled.img`
  width: 267.29px;
  height: 210px;
  display: block;
`;

export const Name = styled.div`
  font-size: 22px;
  margin-top: -8px;
  font-family: Roboto;
  font-weight: 400;
  line-height: 25.78px;
  text-align: left;
  color: #373299;
  text-transform: capitalize;
`;
