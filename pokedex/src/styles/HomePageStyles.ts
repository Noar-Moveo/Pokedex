import styled from "styled-components";

export const TopLine = styled.div`
  height: 67px;
  background-color: #020166;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 106px 0 20px;
`;

export const Box = styled.div`
  width: 114px;
  height: 67px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HomeBox = styled(Box)`
  background-color: #94d97e;
  color: black;
  margin-left: 0px;
`;

export const FavoriteBox = styled(Box)`
  background-color: #020166;
  color: white;
  margin-left: 0px;
`;

export const BoxText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const NonClickableBox = styled.div`
  width: 114px;
  height: 67px;
  margin-left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.input`
  width: 434px;
  height: 37px;
  position: absolute;
  top: 123px;
  left: 428px;
  border-radius: 9px 0 0 0;
  border: 1px solid #02016680;
  background: #f7f7f9;
`;

export const SearchButton = styled.button`
  width: 87px;
  height: 36px;
  position: absolute;
  top: 123px;
  left: 868px;
  border-radius: 9px;
  background: #373299;
  color: #ffffff;
  cursor: pointer;
  border: none;
`;

export const LoadMoreButton = styled.button`
  width: 210px;
  height: 36px;
  margin: -100px auto 80px;
  display: block;
  border-radius: 9px;
  border: 1px solid #373299;
  background-color: #ffffff;
  color: #373299;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 54px;
  position: absolute;
  top: 6px;
  left: 110px;
  opacity: 1;
`;
