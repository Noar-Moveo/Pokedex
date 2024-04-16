import styled from "styled-components";
import { Link } from 'react-router-dom';


export const LocationContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 4px solid firebrick;
  align-items: center;
  height: 100vh;  
  width: 100vw;  
`;


export const LocationHeader = styled.h1`
  font-size: 26px;
  color: #373299;
  //top: 100px;
  padding-bottom: 30px;
`;



export const StyledLink = styled(Link)`
  display: block;
  margin: 10px 0;
  color: #0077cc;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
