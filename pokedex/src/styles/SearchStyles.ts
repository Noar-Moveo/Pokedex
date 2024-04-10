import styled from "styled-components";


export const SearchPopup = styled.div`
  width: 400px;
  height: auto; 
  min-height: 120px; 
  position: absolute;
  top: 165px;
  left: 427px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: #FFF;
  border: 1px solid #DDD;
  z-index: 1000;
  opacity: 1; 
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
`;