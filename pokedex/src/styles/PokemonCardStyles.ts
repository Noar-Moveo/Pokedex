import styled from "styled-components";




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
  //border: 4px solid darkblue;

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
  //border: 4px solid pink;
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

