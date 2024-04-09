import styled from 'styled-components';

export const RecentSearchList = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  z-index: 10;
`;

export const RecentSearchItem = styled.div`
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const DeleteButton = styled.span`
  cursor: pointer;
  margin-left: 10px;
`;

