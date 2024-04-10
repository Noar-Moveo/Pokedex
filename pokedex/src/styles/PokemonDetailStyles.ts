import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 844px;
  height: 342px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  border-radius: 9px 0px 0px 0px;
  background: #F7F7F9;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15); 
  padding: 16px; 
  position: absolute; 
  top: 170px; 
  left: 110px; 
`;


export const DetailHeader = styled.h1`
  position: absolute;
  bottom: 10px; 
  left: 50%; 
  transform: translateX(-50%); 
  font-size: 22px;
  color: #373299;
  font-family: 'Roboto';
  margin: 0;
`;

export const ImageHeaderContainer = styled.div`
  position: relative; 
  width: 337px; 
  height: 311px; 
  left: -291px; 
  top: -30px; 
`;

export const PokemonImage = styled.img` 
  position: absolute;
  top: 0; 
  left: 0; 
  width: 330px; 
  height: 291px; 
  opacity: 1;
`;


export const DescriptionHeadline = styled.h2`
  position: absolute;
  left: 319px; 
  top: 30px; 
  color: #373299; 
  //font-family: 'Roboto', sans-serif;
  font-size: 22px;
  font-weight: bold;
  line-height: 25.78px;
  text-align: left;
  background: transparent; 
`;

export const DescriptionText = styled.p`
  position: absolute;
  width: 349px;
  height: 67px;
  top: 65px;
  left: 319px;
  color: #020166;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  background: transparent; 
  opacity: 1; 
  padding: 0px; 
  box-sizing: border-box; 
`;


export const TypeContainer = styled.div`
  position: absolute; 
  top: calc(100% + 10px); 
  left: 50%; 
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const TypeBox = styled.div`
  width: 100px;
  height: 35px;
  border-radius: 9px;
  opacity: 1; 
  font-size: 18px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 8px; 
`;


export const VerticalLine = styled.div`
  position: absolute;
  top: 80px; 
  left: 282px; 
  height: 246px; 
  width: 1px;
  background: #D7D7D7; 
  opacity: 1; 
`;

export const StatsHeadline = styled.div`
  position: absolute;
  left: 319px; 
  top: 210px; 
  color: #373299; 
  //font-family: 'Roboto', sans-serif;
  font-size: 22px;
  line-height: 25.78px;
  text-align: left;
  background: transparent; 
  font-weight: bold;
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 0px 70px; 
  position: absolute;
  top: 250px; 
  left: 319px;
  right: 319px; 
`;

export const StatItem = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  color: #373299; 
  display: flex; 
  align-items: center; 
  margin-bottom: 8px; 
  white-space: nowrap; 
  align-items: center;
`;

export const BackButton = styled.button`
  position: absolute;
  top: -60px; 
  left: 0px;
  background: transparent;
  color: #373299;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 4px;
`;

export const ArrowIndicator = styled.span`
  position: absolute;
  top: -60px; 
  left: -10px; 
  color: #020166;
  font-size: 20px;
  transform: scaleX(-1); 

`;

export const Number = styled.div`
  position: absolute;
  top: 10px; 
  left: 15px; 
  color: #020166;
`;
