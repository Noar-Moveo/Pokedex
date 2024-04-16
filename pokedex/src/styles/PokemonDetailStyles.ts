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
  @media (max-width: 768px) {
  display: flex;
  width: 285px;
  height: 762px;
  //border: 4px solid black;
  padding: 0px;
  left: 59px;
  top: 210px;
}

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
  //border: 7px solid beige;
  @media (max-width: 768px) {
    font-size: 32px; 
    text-align: center; 
    width: 100%; 
    transform: none; 
    position: relative; 
    margin: 130px; 
    left: 240px;
    top: 00px;
  }

`;

export const ImageHeaderContainer = styled.div`
  position: relative; 
  width: 337px; 
  height: 311px; 
  left: -291px; 
  top: -30px; 
  //border: 6px solid blue;
  @media(max-width: 768px) {
    //position: absolute;
    display: flex;
    //top: 10px;
  }
`; 


export const PokemonImage = styled.img` 
  position: absolute;
  top: 0; 
  left: 0; 
  width: 330px; 
  height: 291px; 
  opacity: 1;
  @media (max-width: 768px) {
    position: fixed;
    top: 240px;
    left: 80px;
    //width: 396px; 
    width: 266px; 
    //height: 408px; 
    height: 308px; 
    max-width: 260px; 
    margin: 0 auto;
  }
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
  @media (max-width: 768px) {
    position: fixed;
    top: 640px;
    left: 147px;
    width: 396px; 
    height: 408px; 
    max-width: 260px; 
    margin: 0 auto;

  }
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
  @media (max-width: 768px) {
    position: fixed;
    top: 670px;
    left: 73px;
    width: 396px; 
    height: 408px;
    align-items: center ;
    max-width: 260px; 
    margin: 0 auto;
    text-align: center;

    
  }
`;


export const TypeContainer = styled.div`
  position: absolute; 
  top: calc(100% + 10px); 
  left: 50%; 
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media (max-width: 768px) {
    //flex-direction: column;
    align-items: center; 
    gap: 5px; 
    top: 180px;
    left: 138%;
    //border: 4px solid brown;
    
  }
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
  @media (max-width: 768px) {
    transform: rotate(90deg);
    top: 300px;
    left: 143px;
  }
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
  @media (max-width: 768px) {
    position: fixed;
    top: 740px;
    left: 178px;
    width: 396px; 
    height: 408px;
    align-items: center ;
    max-width: 260px; 
    margin: 0 auto;
  }
`;

export const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 0px 70px; 
  position: absolute;
  top: 250px; 
  left: 319px;
  right: 319px; 
  //border: 6px solid blue;
  @media (max-width: 768px) {
    position: fixed;
    font-size: 10px;
    top: 762px;
    left: 125px;
    gap: 0px 0px;
    width: auto;
    height: auto; 
    align-items: center;
    grid-template-columns: 1fr; 
    max-width: 260px; 
    margin: 0 auto;
    padding: 10px; 
    box-sizing: border-box; 
    align-items: center;
    
  }
`;
export const StatItem = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 21.09px;
  text-align: left;
  color: #020166; 
  display: flex; 
  align-items: center; 
  margin-bottom: 8px; 
  white-space: nowrap; 
  align-items: center;
  @media (max-width: 768px) {
    font-size: 15px;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    white-space: nowrap; 

  }
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
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    top: -38px;
    left: -30px;
  }
`;

export const ArrowIndicator = styled.span`
  position: absolute;
  top: -60px; 
  left: -10px; 
  color: #020166;
  font-size: 20px;
  transform: scaleX(-1); 
  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
    top: -32px;
    left: -30px;
  }

`;

export const Number = styled.div`
  position: absolute;
  top: 10px; 
  left: 15px; 
  color: #020166;
`;




export const DirectionsButton = styled.button`
  position: absolute;
  background-color: #4CAF50;  
  top: 170px; 
  right: 290px; 
  color: white;
  cursor: pointer;
  font-size: 16px;
  @media (max-width: 768px) {
    display: none;
  }

`;