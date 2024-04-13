import styled from "styled-components";

export const SearchArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  width: 100%;
  padding: 10px 0; 
  margin-bottom: 14px;
  gap: 3px;
  @media (max-width: 600px)  {
    margin-top: 200px;
    padding: 0px;
    width: 80%;
    //border: 4px solid pink;
    //gap: 4px;
  }
`;


export const SearchPopup = styled.div`
  width: 400px;
  height: auto; 
  min-height: 120px; 
  position: absolute;
  top: 177px;
  left: 703px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #FFF;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15); 
  //border: 1px solid #DDD;
  opacity: 1; 
  transform: translateX(-50%); 
  @media (max-width: 600px)  {
    margin-top: 75px;
    //padding: 0px;
    left: 155px;
    width: 43%;
    //border: 4px solid yellow;
  }
`;

export const SearchItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;

export const DeleteButton = styled.span`
cursor: pointer;
color: #373299; 
`;

export const RecentSearchHeader = styled.div`
font-size: 12px;
color: #373299;
font-weight: bold;
margin-bottom: 5px; 
`;

export const ClearText = styled.span`
  font-size: 12px;
  color: #373299;
  cursor: pointer;
  font-weight: bold;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px; 
  //border: 4px solid yellow;
`;